import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HDM Electrical Technology — Automation‑Integrated Solutions',
  description: 'Consultation and turnkey integration for robotics, vision, PLC/controllers, and design engineering — serving industrial, commercial, and residential sectors.',
  metadataBase: new URL('https://hdmtechno.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
