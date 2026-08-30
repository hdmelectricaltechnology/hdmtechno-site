import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Residential Smart Home Technology | HDM Electrical Technology',
  description: 'Smart home planning, home networking, entertainment rooms, security cameras, smart lighting, and connected residential technology in Upstate South Carolina.',
};

const residentialServices = [
  {
    number: '01',
    title: 'Home Automation',
    description: 'Bring lighting, security, entertainment, connectivity, and everyday controls into one thoughtfully planned home experience.',
    detail: 'Custom scenes • Smart controls • Automation planning',
  },
  {
    number: '02',
    title: 'Home Networking',
    description: 'Build the wired and wireless foundation that keeps streaming, work, security, and connected devices performing throughout the home.',
    detail: 'Wi-Fi support • Data wiring • Connected-device planning',
  },
  {
    number: '03',
    title: 'Technology Rooms',
    description: 'Create a purpose-built space for movies, music, gaming, sports, or family entertainment with clean, coordinated technology.',
    detail: 'TVs & displays • Audio/video • Home theater',
  },
  {
    number: '04',
    title: 'Security Cameras',
    description: 'Plan camera and doorbell coverage around the property, network, viewing needs, and the way your household uses the system.',
    detail: 'Cameras • Doorbells • Connected viewing',
  },
  {
    number: '05',
    title: 'Smart Lighting',
    description: 'Use switches, controls, schedules, and scenes to make the home easier to use while creating the right atmosphere for each space.',
    detail: 'Smart switches • Scenes • Lighting controls',
  },
];

const experienceZones = [
  ['Arrival', 'Lighting, access, cameras, and the network respond as one connected welcome.'],
  ['Everyday living', 'Simple controls put the right lights, audio, displays, and comfort settings within easy reach.'],
  ['Entertainment', 'A technology room brings the display, sound, networking, and controls together without visual clutter.'],
  ['Away from home', 'Connected cameras, doorbells, lighting schedules, and remote visibility help you stay informed.'],
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <section className="residential-hero">
          <div className="residential-glow residential-glow-one" />
          <div className="residential-glow residential-glow-two" />
          <div className="container-max relative z-10 grid min-h-[42rem] gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="residential-eyebrow">Residential technology</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                A smarter home should feel
                <span className="block text-sky-300">effortless.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                HDM Electrical Technology helps plan the connected experience behind modern living—from the network and smart lighting to security, entertainment, and custom home automation.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact" className="btn residential-primary">Plan your smart home</Link>
                <a href="#residential-services" className="btn residential-secondary">Explore residential services</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-sky-100/70">
                {['Connected', 'Personalized', 'Easy to use'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-sky-400" />{item}</span>
                ))}
              </div>
            </div>

            <div className="smart-home-visual" aria-label="Connected smart home experience graphic">
              <div className="smart-scene-backyard" aria-hidden="true">
                <div className="security-light-source" />
                <div className="security-light-beam" />
                <div className="smart-scene-status">
                  <span><i /> SECURITY LIGHT ON</span>
                  <strong>Backyard evening scene</strong>
                  <small>Lighting • Security • Connected control</small>
                </div>
              </div>
              <div className="camera-view-panel" aria-hidden="true">
                <div className="camera-view-header">
                  <div>
                    <span><i /> FIVE CAMERAS ONLINE</span>
                    <strong>Whole-home security view</strong>
                  </div>
                  <small>LIVE</small>
                </div>
                <div className="camera-view-grid">
                  {['Front door', 'Driveway', 'Backyard', 'Side gate', 'Garage'].map((camera, index) => (
                    <div key={camera} className={`camera-feed camera-feed-${index + 1}`}>
                      <span>CAM {String(index + 1).padStart(2, '0')}</span>
                      <strong>{camera}</strong>
                      <i />
                    </div>
                  ))}
                </div>
                <div className="camera-device-row">
                  <span>View on home TVs</span>
                  <span>Apple TV</span>
                  <span>iPhone</span>
                  <span>iPad</span>
                </div>
                <p>Demonstration views. Apple-device access depends on the selected camera platform and compatible equipment.</p>
              </div>
              <div className="smart-home-topline">
                <span>HDM HOME</span>
                <span className="smart-home-live"><i /> CONNECTED</span>
              </div>
              <div className="smart-home-core">
                <p>HOME EXPERIENCE</p>
                <strong>One connected plan</strong>
                <span>Network foundation → everyday control</span>
              </div>
              <div className="smart-home-grid">
                {[
                  ['LIGHT', 'Smart scenes'],
                  ['WIFI', 'Whole-home network'],
                  ['VIEW', 'Security cameras'],
                  ['PLAY', 'Entertainment'],
                ].map(([code, label], index) => (
                  <div
                    key={code}
                    className={`smart-home-node smart-home-node-${index + 1}`}
                    tabIndex={index === 0 || index === 2 ? 0 : undefined}
                  >
                    <span>{code}</span>
                    <strong>{label}</strong>
                    {(index === 0 || index === 2) && <em>Hover to preview</em>}
                  </div>
                ))}
              </div>
              <div className="smart-home-signal"><i /><i /><i /><i /></div>
            </div>
          </div>
        </section>

        <section id="residential-services" className="section bg-slate-950/45">
          <div className="container-max">
            <div className="section-heading">
              <div>
                <p className="residential-eyebrow">Designed around daily life</p>
                <h2 className="section-title">Your home. Your routines. Your technology.</h2>
              </div>
              <p className="section-intro">Start with one focused upgrade or plan a connected home experience across multiple rooms and systems.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {residentialServices.map((service) => (
                <article key={service.number} className="residential-service-card">
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <small>{service.detail}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-max grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="residential-eyebrow">The connected experience</p>
              <h2 className="section-title">Technology that follows the rhythm of home.</h2>
              <p className="mt-6 max-w-lg leading-7 text-slate-400">The strongest smart-home experience is not a collection of unrelated devices. It is a coordinated plan for how the home connects, responds, entertains, and keeps you informed.</p>
            </div>
            <div className="residential-experience-list">
              {experienceZones.map(([title, description], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-y border-sky-300/10 bg-[#061a35]">
          <div className="container-max grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="residential-eyebrow">Custom technology rooms</p>
              <h2 className="section-title">Make entertainment part of the architecture.</h2>
              <p className="mt-6 max-w-xl leading-7 text-slate-300">Plan the display, sound, controls, equipment location, lighting, and network as one room experience. The result feels intentional instead of added on.</p>
              <Link href="/contact" className="text-link mt-8">Discuss your entertainment room <span aria-hidden="true">→</span></Link>
            </div>
            <div className="technology-room-graphic">
              <div className="technology-screen"><span>YOUR EXPERIENCE</span></div>
              <div className="technology-console"><i /><i /><i /></div>
              <div className="technology-light technology-light-left" />
              <div className="technology-light technology-light-right" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-max">
            <div className="residential-cta">
              <div>
                <p className="residential-eyebrow">Start with a plan</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">What should your home do better?</h2>
                <p className="mt-5 max-w-2xl leading-7 text-slate-300">Tell us about your home, the rooms you want to improve, and the experience you want to create.</p>
              </div>
              <Link href="/contact" className="btn residential-primary shrink-0">Request a consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
