// lib/ip.js
import crypto from "crypto";

export function getClientIp(req) {
  const xf = (req.headers["x-forwarded-for"] || "").toString();
  const viaProxy = xf.split(",").map(s => s.trim()).filter(Boolean)[0];
  const ip =
    viaProxy ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "0.0.0.0";
  return ip.toString();
}

export function hashIp(ip) {
  const salt = process.env.IP_SALT || "dev-salt-change-me";
  return crypto.createHmac("sha256", salt).update(ip).digest("hex");
}