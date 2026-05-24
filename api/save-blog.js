// api/save-blog.js  (kaede-corp / v3.4-fix2)
// シート未存在時に自動作成してからヘッダー追加
"use strict";

const { google } = require("googleapis");

const SHEET_NAME = "ブログ記事";

function getAuth() {
  const json = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  return new google.auth.GoogleAuth({
    credentials: json,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSpreadsheetId() {
  return process.env.BLOG_SPREADSHEET_ID || process.env.SHIGYOU_SPREADSHEET_ID;
}

// シート存在確認 → なければ作成 → ヘッダー確認
async function ensureSheet(sheets) {
  const spreadsheetId = getSpreadsheetId();

  // シート一覧取得
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets.some(s => s.properties.title === SHEET_NAME);

  if (!exists) {
    // シート新規作成
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: SHEET_NAME } } }],
      },
    });
    // ヘッダー追加
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [["ID","投稿日時","カテゴリ","タイトル","本文"]] },
    });
    return;
  }

  // シートは存在 → ヘッダー確認
  const check = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A1:E1`,
  });
  if (!check.data.values || check.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "RAW",
      requestBody: { values: [["ID","投稿日時","カテゴリ","タイトル","本文"]] },
    });
  }
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const auth   = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = getSpreadsheetId();
    await ensureSheet(sheets);

    // ── GET: 記事一覧 ─────────────────────────────
    if (req.method === "GET") {
      const r = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${SHEET_NAME}!A2:E`,
      });
      const posts = (r.data.values || [])
        .map(row => ({
          id:       row[0] || "",
          datetime: row[1] || "",
          category: row[2] || "",
          title:    row[3] || "",
          body:     row[4] || "",
        }))
        .reverse();
      return res.status(200).json({ posts });
    }

    // ── POST: 投稿保存 ────────────────────────────
    if (req.method === "POST") {
      const { category, title, body } = req.body || {};
      if (!title || !body) return res.status(400).json({ error: "title and body required" });

      const now = new Date()
        .toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
        .replace(/\//g, "-");
      const id = `blog-${Date.now()}`;

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: "RAW",
        requestBody: { values: [[id, now, category || "つぶやき", title, body]] },
      });
      return res.status(200).json({ ok: true, id });
    }

    // ── DELETE: 記事削除 ──────────────────────────
    if (req.method === "DELETE") {
      const { id } = req.body || {};
      if (!id) return res.status(400).json({ error: "id required" });

      const r = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${SHEET_NAME}!A:A`,
      });
      const rowIndex = (r.data.values || []).findIndex(row => row[0] === id);
      if (rowIndex === -1) return res.status(404).json({ error: "not found" });

      const meta = await sheets.spreadsheets.get({ spreadsheetId });
      const sheet = meta.data.sheets.find(s => s.properties.title === SHEET_NAME);

      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{
            deleteDimension: {
              range: {
                sheetId:    sheet.properties.sheetId,
                dimension:  "ROWS",
                startIndex: rowIndex,
                endIndex:   rowIndex + 1,
              },
            },
          }],
        },
      });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (err) {
    console.error("[save-blog] error:", err.message);
    return res.status(500).json({ error: err.message });
  }
};
