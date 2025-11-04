import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

function Icon({path}:{path:string}){
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="text-emerald-400"><path d={path} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function Page(){
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="section">
          <div className="container-max">
            <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
              Automation‑Integrated Solutions
              <span className="block text-emerald-400">for Industrial, Commercial & Home</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-300">
              From robotics and machine vision to PLCs, controllers, and design engineering—HDM Electrical
              Technology delivers consultation and turnkey integration that moves projects from concept to
              production with clarity, safety, and ROI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="btn btn-primary">Explore services</a>
              <a href="#contact" className="btn btn-outline">Request proposal</a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Icon path="M9 12l2 2 4-4" /> NFPA/ISO practices • Vendor‑agnostic • Documentation‑driven
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container-max">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold">Core Services</h2>
              <span className="badge">Rockwell • Siemens • Beckhoff • Ignition</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard title="Robotics Integration" icon={<Icon path="M12 2v4m0 12v4m8-8h-4M8 12H4m12.49-6.49l-2.83 2.83M8.34 15.66l-2.83 2.83M15.66 15.66l2.83 2.83M8.34 8.34L5.51 5.51"/>}>
                End‑to‑end robot cell design, safety, commissioning, and cycle‑time optimization.
              </FeatureCard>
              <FeatureCard title="Machine Vision" icon={<Icon path="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 100-6 3 3 0 000 6z"/>}>
                High‑accuracy inspection, guidance, OCR, and defect detection with robust lighting/optics.
              </FeatureCard>
              <FeatureCard title="PLC & Controllers" icon={<Icon path="M4 7h16M4 12h16M4 17h16M8 3v4M8 17v4M16 3v4M16 17v4"/>}>
                Rockwell/Siemens/Beckhoff programming, networks, and MES/L2 integrations.
              </FeatureCard>
              <FeatureCard title="Design Engineering" icon={<Icon path="M3 8l9-5 9 5v8l-9 5-9-5V8z"/>}>
                Controls architecture, panel design, functional safety, and documentation.
              </FeatureCard>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold flex items-center gap-2"><Icon path="M3 12h18M12 3v18"/>Networks & Data</h3>
                <p className="text-slate-400 text-sm mt-2">OT networks, secure remote access, historians, dashboards, and MES connectors.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold flex items-center gap-2"><Icon path="M16 3H8a2 2 0 00-2 2v14l6-3 6 3V5a2 2 0 00-2-2z"/>Retrofits & Upgrades</h3>
                <p className="text-slate-400 text-sm mt-2">Control migrations, safety upgrades, OEE improvements, and obsolescence planning.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold flex items-center gap-2"><Icon path="M12 2l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z"/>Panel & Electrical Design</h3>
                <p className="text-slate-400 text-sm mt-2">UL‑ready panel designs, drawings, and field install packages with labeled I/O.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section id="verticals" className="section border-t border-white/5">
          <div className="container-max">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Sectors We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold flex items-center gap-2"><Icon path="M3 21h18M4 21V8h16v13"/>Industrial</h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">Discrete & process manufacturing, tire & rubber, packaging, material handling.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold flex items-center gap-2"><Icon path="M3 21h18M7 21V10h10v11"/>Commercial</h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">Facilities automation, energy optimization, AV & smart‑building systems.</p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold flex items-center gap-2"><Icon path="M3 12l9-9 9 9v9H3z"/>Residential</h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">Premium smart‑home, security, networks, and integrated AV experiences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why HDM */}
        <section id="why" className="section">
          <div className="container-max grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Why HDM</h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li className="flex items-start gap-3"><Icon path="M5 13l4 4L19 7" /> Documentation‑first approach: functional specs, I/O lists, and risk assessments are deliverables—not afterthoughts.</li>
                <li className="flex items-start gap-3"><Icon path="M5 13l4 4L19 7" /> Vendor‑agnostic integrations across PLCs, HMIs, vision, drives, and robots.</li>
                <li className="flex items-start gap-3"><Icon path="M5 13l4 4L19 7" /> Safety and standards: NFPA 70/79, ISO 13849, IEC 61508 practices.</li>
                <li className="flex items-start gap-3"><Icon path="M5 13l4 4L19 7" /> Clear project rhythm: Discover → Design → Integrate → Support.</li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {n:1, t:'Discover', d:'Workshop to capture goals, safety, constraints, and ROI targets.'},
                {n:2, t:'Design', d:'Architecture, bill of materials, timeline, and risk register.'},
                {n:3, t:'Integrate', d:'Programming, FAT/SAT, training, and documentation handoff.'},
                {n:4, t:'Support', d:'Remote monitoring, change control, and continuous improvement.'},
              ].map(s => (
                <div key={s.n} className="card">
                  <span className="badge">Step {s.n}</span>
                  <h3 className="text-lg font-semibold mt-2">{s.t}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mt-1">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section border-t border-white/5">
          <div className="container-max grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Start your project</h2>
              <p className="mt-4 text-slate-300 max-w-xl">Tell us about your application and desired outcomes. We’ll propose a pragmatic path that balances performance, schedule, and budget.</p>
              <div className="mt-6 space-y-3 text-slate-300 text-sm">
                <div className="flex items-center gap-2">📞 <span>(555) 555‑0199</span></div>
                <div className="flex items-center gap-2">✉️ <span>contact@hdmtechno.com</span></div>
                <div className="flex items-center gap-2">📍 <span>United States • Remote & On‑site</span></div>
              </div>
            </div>
            <div className="card"><ContactForm/></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
