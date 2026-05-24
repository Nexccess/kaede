// api/diagnose.js  ─  Path-Flow 採用向け AI診断  (Ver 3.4 / kaede-corp)
// Gemini fallback chain: gemini-2.5-flash-lite → gemini-1.5-flash → gemini-1.5-flash-8b

const { GoogleGenerativeAI } = require("@google/generative-ai");

const MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
];

const MENU_LIST = `
【楓salon 採用 ポジション一覧】
- セラピスト（未経験歓迎）：研修あり・時給1,200〜1,600円
- 受付・フロントスタッフ：週2〜OK・扶養内勤務応相談
- 業務委託セラピスト：経験者向け・歩合40〜50%
- 副業・WワークOK：週1〜・扶養内対応
`;

const SYSTEM_PROMPT = `
あなたは楓salon（メンズ美容サロン）の採用担当AIアシスタントです。
応募希望者の状況をヒアリングし、最も適したポジションを提案してください。

${MENU_LIST}

【回答ルール】
1. JSONのみ返答。マークダウン・コードブロック不要。
2. 以下の形式を厳守する:
{
  "recommended": "ポジション名",
  "score": 数値(0-100),
  "level": "A" | "B" | "C",
  "reason": "推薦理由（100文字以内）",
  "message": "応募者へのひとこと（50文字以内・温かみのある表現）"
}
3. スコア基準: A=80以上（即戦力・優先対応）/ B=50-79（研修で活躍可能）/ C=49以下（まずは面談推奨）
4. 回答は必ず上記JSONのみ。前置き・説明一切不要。
`;

function buildPrompt(answers) {
  return `
以下は応募希望者の回答です。最適なポジションを提案してください。

Q1 希望の働き方: ${answers[0] || "未回答"}
Q2 美容・接客の経験: ${answers[1] || "未回答"}
Q3 週に働ける日数: ${answers[2] || "未回答"}
Q4 扶養・社会保険の希望: ${answers[3] || "未回答"}
Q5 楓salonに期待すること: ${answers[4] || "未回答"}
`;
}

const FALLBACK_RESULT = {
  recommended: "セラピスト（未経験歓迎）",
  score: 65,
  level: "B",
  reason: "ご回答内容をもとに、研修から始められるポジションをご提案します。",
  message: "ぜひ一度、気軽にお話しましょう！",
};

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { answers } = req.body || {};
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: "answers is required (array)" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(200).json(FALLBACK_RESULT);

  const genai = new GoogleGenerativeAI(apiKey);
  const prompt = buildPrompt(answers);

  for (const modelName of MODELS) {
    try {
      const model = genai.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_PROMPT,
      });
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();
      const json = JSON.parse(text.replace(/```json|```/g, "").trim());
      return res.status(200).json(json);
    } catch (err) {
      const status = err?.status || err?.httpStatus || 0;
      if (status === 429 || status === 503) continue; // fallback
      console.error(`[diagnose] ${modelName} error:`, err.message);
      break;
    }
  }

  return res.status(200).json(FALLBACK_RESULT);
};
