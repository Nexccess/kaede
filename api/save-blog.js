// api/save-blog.js  ─  ブログ記事管理 (kaede-corp)
// POST: 投稿保存  GET: 一覧取得  DELETE: 記事削除

"use strict";

const { google } = require("googleapis");

const SHEET_NAME = "ブログ記事";
const BLOG_SPREADSHEET_ID = process.env.BLOG_SPREADSHEET_ID
  || process.env.SHIGYOU_SPREADSHEET_ID; // fallback 同一SS

function getAuth() {
  const json = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  return new google.auth.GoogleAuth({
    credentials: json,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function ensureHeader(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: BLOG_SPREADSHEET_ID,
    range: `${SHEET_NAME}!A1:E1`,
  });
  if (!res.data.values || res.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: BLOG_SPREADSHEET_ID,
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
    const auth  = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    await ensureHeader(sheets);

    // ── GET: 記事一覧取得 ──────────────────────────
    if (req.method === "GET") {
      const r = await sheets.spreadsheets.values.get({
        spreadsheetId: BLOG_SPREADSHEET_ID,
        range: `${SHEET_NAME}!A2:E`,
      });
      const rows = (r.data.values || []).map((row) => ({
        id:        row[0] || "",
        datetime:  row[1] || "",
        category:  row[2] || "",
        title:     row[3] || "",
        body:      row[4] || "",
      })).reverse(); // 新しい順
      return res.status(200).json({ posts: rows });
    }

    // ── POST: 記事保存 ────────────────────────────
    if (req.method === "POST") {
      const { category, title, body } = req.body || {};
      if (!title || !body) return res.status(400).json({ error: "title and body are required" });

      const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })
        .replace(/\//g, "-");
      const id  = `blog-${Date.now()}`;

      await sheets.spreadsheets.values.append({
        spreadsheetId: BLOG_SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: "RAW",
        requestBody: { values: [[id, now, category || "つぶやき", title, body]] },
      });
      return res.status(200).json({ ok: true, id });
    }

    // ── DELETE: 記事削除（ID一致行を削除） ──────────
    if (req.method === "DELETE") {
      const { id } = req.body || {};
      if (!id) return res.status(400).json({ error: "id is required" });

      const r = await sheets.spreadsheets.values.get({
        spreadsheetId: BLOG_SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:A`,
      });
      const rows = r.data.values || [];
      const rowIndex = rows.findIndex((row) => row[0] === id);
      if (rowIndex === -1) return res.status(404).json({ error: "not found" });

      // スプレッドシートのsheetId取得
      const meta = await sheets.spreadsheets.get({ spreadsheetId: BLOG_SPREADSHEET_ID });
      const sheet = meta.data.sheets.find((s) => s.properties.title === SHEET_NAME);
      if (!sheet) return res.status(500).json({ error: "sheet not found" });

      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: BLOG_SPREADSHEET_ID,
        requestBody: {
          requests: [{
            deleteDimension: {
              range: {
                sheetId: sheet.properties.sheetId,
                dimension: "ROWS",
                startIndex: rowIndex,
                endIndex: rowIndex + 1,
              },
            },
          }],
        },
      });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (err) {
    console.error("[save-blog] error:", err);
    return res.status(500).json({ error: err.message });
  }
};
