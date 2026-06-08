import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prenom, nom, email, telephone, profil, prestation, message } = body;

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailContent = `
Nouvelle demande de devis — Vilbert Recyclage
=============================================

Nom : ${prenom} ${nom}
Email : ${email}
Téléphone : ${telephone || "Non renseigné"}
Profil : ${profil || "Non renseigné"}
Prestation souhaitée : ${prestation || "Non renseigné"}

Message :
${message}
    `.trim();

    await transporter.sendMail({
      from: `"Site Vilbert Recyclage" <${process.env.SMTP_USER}>`,
      to: "recyclage@groupe-vilbert.fr",
      replyTo: email,
      subject: `Demande de devis — ${prenom} ${nom} (${profil || "non précisé"})`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
