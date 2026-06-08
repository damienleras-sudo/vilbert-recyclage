import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, profil, prestation, message } = body;

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
  <div style="background:#1a5c28;padding:24px">
    <h2 style="color:white;margin:0;font-size:20px">Vilbert Recyclage - Nouvelle demande de devis</h2>
  </div>
  <div style="padding:24px;background:#f9fafb">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px">Nom</td><td style="padding:8px 0;font-weight:bold">${prenom} ${nom}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Email</td><td style="padding:8px 0">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Telephone</td><td style="padding:8px 0">${telephone || "Non renseigne"}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Profil</td><td style="padding:8px 0">${profil || "Non renseigne"}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Prestation</td><td style="padding:8px 0">${prestation || "Non renseigne"}</td></tr>
    </table>
    <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border-left:4px solid #f5b800">
      <p style="color:#374151;font-size:14px;margin:0">${message}</p>
    </div>
  </div>
</div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Vilbert Recyclage <onboarding@resend.dev>",
        to: ["recyclage@groupe-vilbert.fr"],
        reply_to: email,
        subject: `Demande de devis - ${prenom} ${nom}`,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", JSON.stringify(data));
      return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
