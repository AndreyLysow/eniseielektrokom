// pages/api/views/bulk.js
import db from "../../../lib/db";

export const config = { api: { bodyParser: true } };

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }
  try {
    const { ids } = req.body || {};
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ ok: false, error: "Missing ids[]" });
    }

    // Получаем totals по пачке id
    const placeholders = ids.map(() => "?").join(",");
    const rows = db
      .prepare(`SELECT id, count FROM totals WHERE id IN (${placeholders})`)
      .all(...ids);

    const map = Object.fromEntries(ids.map((id) => [String(id), 0]));
    for (const r of rows) map[String(r.id)] = r.count || 0;

    return res.status(200).json({ ok: true, counts: map });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Internal Error" });
  }
}