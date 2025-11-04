'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-950/60">
      <div className="container-max h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-400/10 grid place-items-center ring-1 ring-emerald-400/30">
            <span className="text-emerald-400 font-bold">HDM</span>
          </div>
          <span className="font-semibold tracking-wide">HDM Electrical Technology</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="nav-link">Services</a>
          <a href="#verticals" className="nav-link">Sectors</a>
          <a href="#why" className="nav-link">Why HDM</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="hidden sm:block">
          <Link href="#contact" className="btn btn-primary">Book a consult</Link>
        </div>
        <button className="md:hidden btn btn-outline" onClick={() => setOpen(!open)}>Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/80">
          <div className="container-max py-4 flex flex-col gap-3 text-sm">
            <a href="#services" className="nav-link" onClick={() => setOpen(false)}>Services</a>
            <a href="#verticals" className="nav-link" onClick={() => setOpen(false)}>Sectors</a>
            <a href="#why" className="nav-link" onClick={() => setOpen(false)}>Why HDM</a>
            <a href="#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
