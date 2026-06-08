import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, profil, prestation, message } = body;

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY manquante");
      return NextResponse.json({ error: "Configuration email manquante" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
  <div style="background:#1a5c28;padding:24px">
    <h2 style="color:white;margin:0;font-size:20px">♻ Vilbert Recyclage — Nouvelle demande de devis</h2>
  </div>
  <div style="padding:24px;background:#f9fafb">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px">Nom</td><td style="padding:8px 0;font-weight:bold">${prenom} ${nom}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Téléphone</td><td style="padding:8px 0">${telephone || "Non renseigné"}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Profil</td><td style="padding:8px 0">${profil || "Non renseigné"}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Prestation</td><td style="padding:8px 0">${prestation || "Non renseigné"}</td></tr>
    </table>
    <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border-left:4px solid #f5b800">
      <p style="color:#374151;font-size:14px;white-space:pre-wrap;margin:0">${message}</p>
    </div>
  </div>
  <div style="padding:14px;background:#1a1a1a;text-align:center">
    <p style="color:#9ca3af;font-size:12px;margin:0">Vilbert Recyclage — recyclage@groupe-vilbert.fr — 03 22 93 02 86</p>
  </div>
</div>`;

    const { error } = await resend.emails.send({
      from: "Vilbert Recyclage <onboarding@resend.dev>",
      to: ["recyclage@groupe-vilbert.fr"],
      replyTo: email,
      subject: `🏗️ Demande de devis — ${prenom} ${nom} (${profil || "non précisé"})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
