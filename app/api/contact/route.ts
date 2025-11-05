// app/api/contact/route.ts
export const runtime = 'nodejs'; // Ensure Node runtime on Vercel

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company = '', phone = '', message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || 'contact@hdmtechno.com',
      replyTo: email,
      subject: `New inquiry from ${name} — hdmtechno.com`,
      text: `Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}

Message:
${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('contact route error:', err?.message || err);
    return NextResponse.json({ ok: false, error: 'Email failed' }, { status: 400 });
  }
}

