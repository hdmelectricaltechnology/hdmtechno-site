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
      <label className="grid gap-2 text-sm text-slate-300">Name<input required name="name" placeholder="Your name" className="card !p-3" /></label>
      <label className="grid gap-2 text-sm text-slate-300">Email<input required type="email" name="email" placeholder="you@example.com" className="card !p-3" /></label>
      <label className="grid gap-2 text-sm text-slate-300">Company or site<input name="company" placeholder="Optional" className="card !p-3" /></label>
      <label className="grid gap-2 text-sm text-slate-300">Phone<input name="phone" placeholder="Optional" className="card !p-3" /></label>
      <label className="grid gap-2 text-sm text-slate-300">How can we help?<textarea required name="message" placeholder="Describe the space, system, challenge, and timing." rows={5} className="card !p-3" /></label>
      <button type="submit" className="btn btn-primary" disabled={status==='sending'}>
        {status==='sending' ? 'Sending…' : 'Request a consultation'}
      </button>
      {status==='sent' && <p className="text-emerald-300 text-sm">Thanks! We’ll get back to you shortly.</p>}
      {status==='error' && <p className="text-rose-300 text-sm">Something went wrong. Please try again later.</p>}
      <p className="text-xs text-slate-500">Your information will be used to respond to this inquiry.</p>
    </form>
  );
}
