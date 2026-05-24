// api/save-shigyou.js  ─  採用フォーム統合処理  (Ver 3.4 / kaede-corp)
// SS書込み + Googleカレンダー仮登録 + Nodemailer Gmailメール通知

"use strict";

const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// ── 定数 ──────────────────────────────────────────
const SHEET_NAME   = "採用問い合わせ";
const NOTIFY_EMAIL = "info.kaedesalon@gmail.com";
// ──────────────────────────────────────────────────

function getAuth() {
  const json = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  return new google.auth.GoogleAuth({
    credentials: json,
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/calendar",
    ],
  });
}

async function appendToSheet(auth, payload) {
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SHIGYOU_SPREADSHEET_ID;

  // ヘッダー確認・自動挿入
  const checkRes = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A1:K1`,
  });
  if (!checkRes.data.values || checkRes.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [["送信日時","LP_ID","お名前","携帯電話","メールアドレス","面談希望日（第1）","面談希望日（第2）","おすすめポジション","スコア","レベル","診断回答"]],
      },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A1`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[
        payload.now,
        payload.lp,
        payload.name,
        payload.phone,
        payload.email,
        payload.date,
        payload.date2 || "",
        payload.recommended_menu || "",
        payload.score || "",
        payload.level || "",
        payload.answersStr || "",
      ]],
    },
  });
}

async function insertCalendar(auth, payload) {
  const calendarId = process.env.CALENDAR_ID;
  if (!calendarId || !payload.date) return;

  const calendar = google.calendar({ version: "v3", auth });
  // date は yyyy-mm-dd 形式必須（スラッシュ禁止）
  const dateOnly = payload.date.split(" ")[0]; // "yyyy-mm-dd HH:MM" → "yyyy-mm-dd"

  await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: `【仮予約・採用面談】${payload.name} 様`,
      description: `ポジション: ${payload.recommended_menu}\nスコア: ${payload.score} (${payload.level})\nTEL: ${payload.phone}\nEmail: ${payload.email}`,
      start: { date: dateOnly },
      end:   { date: dateOnly },
    },
  });
}

async function sendMail(payload) {
  const gmailUser = process.env.GMAIL_USER || NOTIFY_EMAIL;
  const appPass   = process.env.GMAIL_APP_PASSWORD;
  if (!appPass) { console.warn("[mail] GMAIL_APP_PASSWORD 未設定・スキップ"); return; }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: appPass },
  });

  await transport.sendMail({
    from: `"楓salon 採用システム" <${gmailUser}>`,
    to:   NOTIFY_EMAIL,
    subject: `【採用問い合わせ】${payload.name} 様 (${payload.level})`,
    text: `
新しい採用問い合わせが届きました。

■ お名前        : ${payload.name}
■ 携帯電話      : ${payload.phone}
■ メールアドレス: ${payload.email}
■ 面談希望日（第1）: ${payload.date}
■ 面談希望日（第2）: ${payload.date2 || "未入力"}
■ おすすめポジション: ${payload.recommended_menu}
■ スコア        : ${payload.score} / レベル: ${payload.level}
■ 診断回答      : ${payload.answersStr}

送信日時: ${payload.now}
    `.trim(),
  });
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const body = req.body || {};
    const {
      lp, name, phone, email,
      date, date2,
      recommended_menu, score, level,
      answers,
    } = body;

    // answers は配列 → 文字列変換（Sheetsエラー防止）
    const answersStr = Array.isArray(answers) ? answers.join(" / ") : (answers || "");

    // JST 日時（ハイフン形式）
    const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
      .replace(/\//g, "-");

    const payload = {
      now, lp: lp || "kaede-recruit-v1",
      name, phone, email,
      date, date2: date2 || "",
      recommended_menu, score, level,
      answersStr,
    };

    const auth = getAuth();
    await Promise.all([
      appendToSheet(auth, payload),
      insertCalendar(auth, payload),
      sendMail(payload),
    ]);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[save-shigyou] error:", err);
    return res.status(500).json({ error: err.message });
  }
};
