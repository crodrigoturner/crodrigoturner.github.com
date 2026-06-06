/**
 * Cloudflare Worker — Resend contact form handler
 *
 * Deploy steps:
 *  1. Go to https://dash.cloudflare.com → Workers & Pages → Create
 *  2. Paste this file, deploy
 *  3. Add a secret: Settings → Variables → RESEND_API_KEY = re_xxxx
 *  4. Copy the worker URL and paste it into contact/index.md as WORKER_URL
 */

const ALLOWED_ORIGIN = "https://carlosrodrigo.com";
const TO_EMAIL       = "rodrigoturner.carlos@gmail.com";
const FROM_EMAIL     = "contact@carlosrodrigo.com"; // must be a verified Resend sender

const CORS = {
  "Access-Control-Allow-Origin":  ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    let name, email, message;
    try {
      ({ name, email, message } = await request.json());
    } catch {
      return json({ ok: false, error: "Invalid JSON" }, 400);
    }

    if (!name || !email || !message) {
      return json({ ok: false, error: "Missing fields" }, 422);
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to:   TO_EMAIL,
        reply_to: email,
        subject:  `Message from ${name}`,
        html: `<p><strong>${name}</strong> &lt;${email}&gt;</p>
               <p>${message.replace(/\n/g, "<br>")}</p>`,
      }),
    });

    return res.ok
      ? json({ ok: true })
      : json({ ok: false, error: "Resend error" }, 500);
  },
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}
