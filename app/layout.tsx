import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HDM Electrical Technology — Automation‑Solutions',
  description: 'Consultation and turnkey solutions for Industrial robotics, vision, PLC/controllers, and design engineering — Commercial and Home Smart home applications using patented technologyAI technology.',
  metadataBase: new URL('https://hdmtechno.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
