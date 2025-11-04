import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(''),
  phone: z.string().optional().default(''),
  message: z.string().min(5),
});

function transport() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS.');
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const data = schema.parse(json);

    const to = process.env.CONTACT_TO || 'contact@hdmtechno.com';
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER!;

    const mail = {
      from,
      to,
      subject: `New inquiry from ${data.name} — hdmtechno.com`,
      replyTo: data.email,
      text: `Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Phone: ${data.phone}

Message:
${data.message}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Company:</strong> ${data.company}</p>
<p><strong>Phone:</strong> ${data.phone}</p>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g,'<br/>')}</p>`,
    };

    const t = transport();
    await t.sendMail(mail);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err.message || 'Unknown error' }, { status: 400 });
  }
}
