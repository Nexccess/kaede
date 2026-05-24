// api/amplitude-feed.js  ─  Amplitude 中継API (kaede-corp)

"use strict";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const apiKey    = process.env.AMPLITUDE_API_KEY;
    const secretKey = process.env.AMPLITUDE_SECRET_KEY;
    if (!apiKey || !secretKey) return res.status(500).json({ error: "Amplitude keys not set" });

    if (req.method === "GET") {
      // ダッシュボード用: lp別イベント集計
      const { lp, event } = req.query;
      const body = {
        e: JSON.stringify({
          event_type: event || "page_view",
          filters: lp ? [{ subprop_type: "event", subprop_key: "lp", subprop_op: "is", subprop_value: [lp] }] : [],
        }),
        m: "uniques",
        start: req.query.start || "20240101",
        end:   req.query.end   || new Date().toISOString().slice(0,10).replace(/-/g,""),
      };
      const params = new URLSearchParams(body);
      const r = await fetch(`https://amplitude.com/api/2/events/segmentation?${params}`, {
        headers: {
          Authorization: "Basic " + Buffer.from(`${apiKey}:${secretKey}`).toString("base64"),
        },
      });
      const data = await r.json();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      // イベント送信中継
      const events = req.body?.events || [req.body];
      const r = await fetch("https://api2.amplitude.com/2/httpapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, events }),
      });
      const data = await r.json();
      return res.status(200).json(data);
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (err) {
    console.error("[amplitude-feed] error:", err);
    return res.status(500).json({ error: err.message });
  }
};
