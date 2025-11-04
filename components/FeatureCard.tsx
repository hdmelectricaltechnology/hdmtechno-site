import { ReactNode } from 'react';

export default function FeatureCard({ title, icon, children }:{ title:string, icon: ReactNode, children: ReactNode }){
  return (
    <div className="card">
      <div className="h-10 w-10 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30 grid place-items-center mb-2">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mt-2">{children}</p>
    </div>
  );
}
