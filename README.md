# HDM Electrical Technology — hdmtechno.com

A Next.js 14 site with Tailwind CSS and a contact API using Nodemailer.

## Quick start

```bash
pnpm i   # or npm install / yarn
cp .env.example .env.local
pnpm dev # https://hdmtechno.com/
```

## Environment

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey-or-username
SMTP_PASS=secret
CONTACT_TO=contact@hdmtechno.com
CONTACT_FROM=hdmtechno.com <no-reply@hdmtechno.com>
```

## Deploy

- **Vercel:** add env vars above, set `CONTACT_FROM` to a verified sender (or use your SMTP provider).
- **Docker:** see Dockerfile.

## License

Proprietary — © HDM Electrical Technology.
