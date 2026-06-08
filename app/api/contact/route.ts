import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, profil, prestation, message } = body;

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // Gmail service config — requires an App Password (16 chars from Google Account)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
  <div style="background:#1a5c28;padding:24px">
    <h2 style="color:white;margin:0;font-size:20px">♻ Vilbert Recyclage — Nouvelle demande</h2>
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
      <p style="margin:0;color:#374151;font-size:14px;white-space:pre-wrap">${message}</p>
    </div>
  </div>
  <div style="padding:16px;background:#1a1a1a;text-align:center">
    <p style="color:#9ca3af;font-size:12px;margin:0">Vilbert Recyclage — recyclage@groupe-vilbert.fr — 03 22 93 02 86</p>
  </div>
</div>`;

    await transporter.sendMail({
      from: `"Site Vilbert Recyclage" <${process.env.SMTP_USER}>`,
      to: "recyclage@groupe-vilbert.fr",
      replyTo: email,
      subject: `🏗️ Demande de devis — ${prenom} ${nom} (${profil || "non précisé"})`,
      html: emailHtml,
      text: `Demande de ${prenom} ${nom} — ${email} — ${telephone || ""}\nProfil: ${profil}\nPrestation: ${prestation}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
