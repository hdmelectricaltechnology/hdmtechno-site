'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
      if(!res.ok) throw new Error(await res.text());
      setStatus('sent');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <input required name="name" placeholder="Your name" className="card !p-3" />
      <input required type="email" name="email" placeholder="Email" className="card !p-3" />
      <input name="company" placeholder="Company / Site" className="card !p-3" />
      <input name="phone" placeholder="Phone (optional)" className="card !p-3" />
      <textarea required name="message" placeholder="Briefly describe your project, system(s), and timeline" rows={5} className="card !p-3" />
      <button type="submit" className="btn btn-primary" disabled={status==='sending'}>
        {status==='sending' ? 'Sending…' : 'Send'}
      </button>
      {status==='sent' && <p className="text-emerald-300 text-sm">Thanks! We’ll get back to you shortly.</p>}
      {status==='error' && <p className="text-rose-300 text-sm">Something went wrong. Please try again later.</p>}
      <p className="text-xs text-slate-500">By submitting, you agree to our consultation terms and privacy policy.</p>
    </form>
  );
}
