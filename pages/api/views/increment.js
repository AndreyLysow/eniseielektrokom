// pages/api/views/increment.js
import db from "../../../lib/db";
import { getClientIp, hashIp } from "../../../lib/ip";

export const config = { api: { bodyParser: true } };

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { id } = req.body || {};
    if (!id) return res.status(400).json({ ok: false, error: "Missing id" });

    const ip = getClientIp(req);
    const ipHash = hashIp(ip);
    const now = Math.floor(Date.now() / 1000);
    const DAY = 86400;

    const getView = db.prepare(
      `SELECT ts FROM ip_views WHERE id = ? AND ip_hash = ?`
    );
    const insertView = db.prepare(
      `INSERT INTO ip_views (id, ip_hash, ts) VALUES (?, ?, ?)`
    );
    const updateView = db.prepare(
      `UPDATE ip_views SET ts = ? WHERE id = ? AND ip_hash = ?`
    );
    const getTotal = db.prepare(
      `SELECT count FROM totals WHERE id = ?`
    );
    const upsertTotalNew = db.prepare(
      `INSERT INTO totals (id, count) VALUES (?, 1)
       ON CONFLICT(id) DO UPDATE SET count = totals.count + 1`
    );

    const trx = db.transaction(() => {
      const row = getView.get(id, ipHash);

      // Флаг: инкрементировать ли totals
      let incremented = false;

      if (!row) {
        insertView.run(id, ipHash, now);
        upsertTotalNew.run(id);
        incremented = true;
      } else if (row.ts <= now - DAY) {
        updateView.run(now, id, ipHash);
        upsertTotalNew.run(id);
        incremented = true;
      }

      const totalRow = getTotal.get(id);
      const total = totalRow ? totalRow.count : 0;

      return { total, incremented };
    });

    const result = trx();
    return res.status(200).json({ ok: true, id, ...result });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Internal Error" });
  }
}