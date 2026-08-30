import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HDM Electrical Technology | Smart Electrical Technology',
  description: 'Electrical, smart home, AV, security, networking, and automation solutions for home, business, and light industry in Upstate South Carolina.',
  metadataBase: new URL('https://hdmtechno.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
