import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const servicePaths = [
  {
    number: '01',
    eyebrow: 'Residential',
    title: 'Modern technology for your home',
    description: 'Plan and connect lighting, security, networks, entertainment, smart controls, and EV charging around the way you live.',
    href: '/residential',
    link: 'Explore residential',
  },
  {
    number: '02',
    eyebrow: 'Commercial',
    title: 'Technology that works for your business',
    description: 'Bring power, low-voltage wiring, networking, cameras, lighting controls, and AV together in one practical plan.',
    href: '/commercial',
    link: 'Explore commercial',
  },
  {
    number: '03',
    eyebrow: 'Automation & Controls',
    title: 'Industrial experience. Connected manufacturing.',
    description: 'Turn machine and controls data into useful visibility through focused troubleshooting, dashboards, alarms, trends, and integration.',
    href: '/automation-controls',
    link: 'Explore automation',
  },
];

const services = [
  ['Security & Cameras', 'Camera and doorbell planning, installation support, and connected viewing for homes and businesses.'],
  ['Networks & Data', 'Wi-Fi support, network drops, and the connected infrastructure behind dependable technology.'],
  ['Smart Lighting & Controls', 'Practical lighting and control upgrades designed around the space and the people using it.'],
  ['AV & Media', 'TVs, projectors, displays, home theater, audio/video, and conference-room technology.'],
  ['EV Charger Support', 'Site planning and support for a clean, dependable charging setup.'],
  ['Monitoring & Dashboards', 'Customer-understandable views of equipment status, counts, faults, trends, and performance.'],
];

const serviceArea = ['Greenville', 'Simpsonville', 'Fountain Inn', 'Mauldin', 'Greer', 'Spartanburg'];

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container-max relative z-10 grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-28">
            <div>
              <p className="eyebrow">Upstate South Carolina</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Smart electrical technology
                <span className="block text-emerald-300">for home, business & industry.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                HDM Electrical Technology brings electrical systems, smart technology, AV, security, networking, and automation together with one connected approach.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary btn-large">Request service</Link>
                <Link href="/demo-lab" className="btn btn-outline btn-large">View technology demo</Link>
              </div>
            </div>
            <aside className="hero-panel">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">One connected partner</p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white">Power. Connect. Control.</p>
              <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 text-sm text-slate-300">
                {['Electrical', 'Smart Home', 'AV', 'Security', 'Networking', 'Automation'].map((item) => (
                  <div key={item} className="flex items-center gap-2 border-t border-white/10 pt-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="verticals" className="section bg-slate-950/45">
          <div className="container-max">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Solutions built around your space</p>
                <h2 className="section-title">Three paths. One technology partner.</h2>
              </div>
              <p className="section-intro">Start with the environment you need to improve. We connect the right systems around the problem—not the other way around.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {servicePaths.map((path) => (
                <article key={path.eyebrow} className="path-card">
                  <div className="flex items-start justify-between gap-4">
                    <span className="path-number">{path.number}</span>
                    <span className="badge">{path.eyebrow}</span>
                  </div>
                  <h3 className="mt-12 text-2xl font-bold leading-tight text-white">{path.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{path.description}</p>
                  <Link href={path.href} className="text-link mt-8">{path.link} <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container-max">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Practical services</p>
                <h2 className="section-title">Technology that works together.</h2>
              </div>
              <p className="section-intro">From a focused upgrade to a connected system, HDM ET helps plan the path, coordinate the technology, and make the result easier to use.</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, description], index) => (
                <article key={title} className="service-tile">
                  <p className="text-xs font-bold tracking-[0.2em] text-emerald-400">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Link href="/av-smart-technology" className="text-link">Explore AV & smart technology <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section id="why" className="section bg-emerald-300 text-slate-950">
          <div className="container-max grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-950/70">Why HDM</p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Electrical thinking meets connected technology.</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                ['Connected-system approach', 'Power, connectivity, controls, and the user experience are planned as parts of one system.'],
                ['Advanced controls perspective', 'Industrial automation depth adds a stronger technical lens to practical home and business technology.'],
                ['Clean, considered execution', 'The work is approached with attention to planning, organization, documentation, and testing.'],
                ['Built for long-term use', 'The goal is a dependable result that is understandable, supportable, and ready for what comes next.'],
              ].map(([title, description]) => (
                <article key={title} className="border-t border-slate-950/20 pt-5">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-800">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-max">
            <div className="lab-panel">
              <div className="max-w-2xl">
                <p className="eyebrow">HDM Technology Demo Lab</p>
                <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">See connected manufacturing in action.</h2>
                <p className="mt-6 text-base leading-7 text-slate-300">A customer-understandable demonstration of how machine signals can become dashboards, alarms, trends, history, and reporting—without exposing a production system.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/demo-lab" className="btn btn-primary btn-large">View technology demo</Link>
                  <Link href="/contact" className="btn btn-outline btn-large">Request a live demo</Link>
                </div>
              </div>
              <div className="lab-flow" aria-label="Demo Lab technology flow">
                {['Machine logic', 'Connected data', 'Dashboards', 'Reporting'].map((item, index) => (
                  <div key={item} className="lab-step">
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section border-y border-white/5 bg-slate-950/40">
          <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Work & projects</p>
              <h2 className="section-title">Real work will tell the story.</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">Residential, commercial, AV, security, and automation project highlights are being prepared for this site. Each featured project will focus on the problem, the approach, and the finished result.</p>
              <p className="mt-4 text-sm text-slate-500">Project photos and case studies will be added as approved material becomes available.</p>
            </div>
            <div className="project-grid" aria-label="Future project categories">
              {['Residential', 'Commercial', 'AV', 'Security', 'Automation'].map((item) => (
                <div key={item} className="project-placeholder"><span>{item}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Local support</p>
              <h2 className="section-title">Serving Upstate South Carolina.</h2>
              <p className="mt-5 text-slate-400">Contact HDM ET to confirm availability for your location and project.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceArea.map((city) => <span key={city} className="location-pill">{city}</span>)}
              <span className="location-pill">Surrounding areas</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section border-t border-white/5 bg-slate-950/60">
          <div className="container-max grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="section-title">What are you trying to improve, connect, or automate?</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">Share the space, system, or challenge you have in mind. HDM ET can use those details to understand the request and discuss a practical next step.</p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <a className="contact-link" href="tel:+18646212171">(864) 621-2171</a>
                <a className="contact-link" href="mailto:hdmtechno@icloud.com">hdmtechno@icloud.com</a>
              </div>
            </div>
            <div className="contact-panel"><ContactForm /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
