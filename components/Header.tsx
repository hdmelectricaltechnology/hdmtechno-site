'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { label: 'Residential', href: '/residential' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'AV & Smart', href: '/av-smart-technology' },
  { label: 'Automation', href: '/automation-controls' },
  { label: 'Demo Lab', href: '/demo-lab' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-sky-400/15 bg-[#020b24]/95 shadow-lg shadow-black/10 backdrop-blur-md">
      <div className="container-max flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="HDM Electrical Technology home">
          <div className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-sky-300/30 bg-[#0d2b59] p-1">
            <Image
              src="/brand/hdm-iguana-trademark.png"
              alt="HDM Electrical Technology iguana trademark"
              width={1024}
              height={656}
              className="brand-mark-dark h-full w-full object-contain object-center"
              priority
            />
          </div>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-semibold tracking-wide text-white">HDM Electrical Technology</span>
            <span className="hidden text-xs text-slate-400 sm:block">Home • Business • Industry</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 sm:block">
          <Link href="/contact" className="btn btn-primary">Request service</Link>
        </div>
        <button
          type="button"
          className="btn btn-outline xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-slate-950 xl:hidden">
          <nav className="container-max flex flex-col gap-1 py-4 text-sm" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-slate-200 transition hover:bg-white/5 hover:text-emerald-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-3 justify-center sm:hidden" onClick={() => setOpen(false)}>
              Request service
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
