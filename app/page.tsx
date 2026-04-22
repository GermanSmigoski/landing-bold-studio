'use client'

import { useState } from 'react'

export default function AgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const works = [
    { client: 'Lumina', category: 'Branding & Web', year: '2024', color: '#FFE600' },
    { client: 'Nordvik', category: 'Campaña Digital', year: '2024', color: '#fff' },
    { client: 'Mira AI', category: 'Identidad Visual', year: '2023', color: '#FFE600' },
    { client: 'Celsius', category: 'Motion & Social', year: '2023', color: '#fff' },
  ]

  const services = [
    'Branding', 'Web Design', 'Motion', 'Copywriting', 'UI/UX', 'Social Media',
    'Art Direction', 'Ilustración', 'Packaging', 'Estrategia',
  ]

  const steps = [
    { n: '01', title: 'Discovery', desc: 'Entendemos tu negocio, tu audiencia y tus objetivos antes de dibujar un solo pixel.' },
    { n: '02', title: 'Concepto', desc: 'Desarrollamos ideas audaces que separan tu marca del resto. Sin templates, todo custom.' },
    { n: '03', title: 'Producción', desc: 'Damos vida al concepto con precisión artesanal en cada detalle visual.' },
    { n: '04', title: 'Lanzamiento', desc: 'Desplegamos el trabajo y medimos su impacto. Tu éxito es nuestro portafolio.' },
  ]

  const navLinks = [
    { label: 'Trabajo', href: '#work' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-widest hover:text-[#FFE600] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[#FFE600] text-black font-black text-sm uppercase tracking-widest"
          >
            Hablemos
          </a>
        </div>
      )}

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
        <a href="#" className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#FFE600]" />
          <span className="font-black text-xl tracking-tighter">BOLD STUDIO</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors tracking-wide uppercase text-xs">{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden md:block text-sm font-black uppercase tracking-widest px-5 py-2.5 bg-[#FFE600] text-black hover:bg-white transition-colors">
            Hablemos
          </a>
          <button
            className="md:hidden text-white text-2xl leading-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/5 pointer-events-none" />
        <div className="absolute bottom-20 right-12 text-[200px] font-black leading-none text-white/[0.03] select-none pointer-events-none">BOLD</div>

        <div className="max-w-6xl">
          <p className="text-[#FFE600] text-sm font-black tracking-[0.4em] uppercase mb-8">
            Agencia Creativa — Buenos Aires
          </p>
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-tighter uppercase mb-10">
            Hacemos<br />
            <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>marcas</span>
            <br />que importan
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="#work"
              className="px-8 py-4 bg-[#FFE600] text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-colors"
            >
              Ver nuestro trabajo ↓
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/30" />
              <span className="text-sm text-white/40 font-medium">200+ marcas. 12 premios. 8 años.</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-12 pb-8 text-xs text-white/20 font-mono">
          <span>© 2024 BOLD STUDIO</span>
          <a href="#work" className="hover:text-white/40 transition-colors">SCROLL PARA VER →</a>
        </div>
      </section>

      {/* Marquee / Servicios */}
      <div
        id="servicios"
        className="py-5 border-y border-white/10 overflow-hidden scroll-mt-0"
        style={{ background: '#FFE600' }}
      >
        <div className="marquee-track">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="text-black font-black text-sm uppercase tracking-widest mx-8 shrink-0">
              {s} <span className="mx-4 opacity-30">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="px-6 md:px-12 py-24 max-w-7xl mx-auto scroll-mt-0">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Trabajo<br /><span className="text-[#FFE600]">Selecto</span>
          </h2>
          <a href="#contacto" className="text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest hidden md:block">
            Trabajar con nosotros →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {works.map((w, i) => (
            <a
              key={w.client}
              href="#contacto"
              className="group relative p-10 bg-black hover:bg-zinc-950 transition-colors overflow-hidden block"
              style={{ minHeight: i % 2 === 0 ? '380px' : '320px' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${w.color}08, transparent)` }}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-auto">
                  <span className="text-white/20 text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-white/20 text-xs font-mono">{w.year}</span>
                </div>
                <div className="mt-20">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-3">{w.category}</p>
                  <h3
                    className="text-4xl md:text-5xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform"
                    style={{ color: w.color }}
                  >
                    {w.client}
                  </h3>
                </div>
              </div>
              <div
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: w.color }}
              >
                <span className="text-black font-black text-sm">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '200+', label: 'Clientes' },
            { value: '12', label: 'Premios Internacionales' },
            { value: '8', label: 'Años de experiencia' },
            { value: '100%', label: 'Proyectos custom' },
          ].map((s) => (
            <div key={s.label} className="border-l-2 border-[#FFE600] pl-6">
              <div className="text-5xl font-black text-[#FFE600] mb-2">{s.value}</div>
              <div className="text-sm text-white/40 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-24 px-6 md:px-12 max-w-6xl mx-auto scroll-mt-0">
        <div className="mb-16">
          <p className="text-[#FFE600] text-xs font-black tracking-[0.4em] uppercase mb-4">Nuestro proceso</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Cómo<br />trabajamos
          </h2>
        </div>
        <div className="space-y-0">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group flex flex-col md:flex-row md:items-center gap-6 py-10 border-b border-white/10 hover:pl-4 transition-all duration-300 cursor-default"
            >
              <span className="text-[#FFE600] font-black text-sm font-mono w-10 shrink-0">{s.n}</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight w-64 shrink-0">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed md:max-w-lg">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contacto */}
      <section id="contacto" className="py-32 px-6 text-center scroll-mt-0" style={{ background: '#FFE600' }}>
        <p className="text-black/50 text-xs font-black tracking-[0.4em] uppercase mb-6">¿TENÉS UN PROYECTO?</p>
        <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-10">
          Hagamos<br />algo bold.
        </h2>
        <a
          href="mailto:hola@boldstudio.com?subject=Nuevo%20proyecto"
          className="inline-block px-10 py-5 bg-black text-[#FFE600] font-black text-sm uppercase tracking-widest hover:bg-zinc-900 transition-colors"
        >
          hola@boldstudio.com →
        </a>
        <p className="text-black/40 text-xs font-bold uppercase tracking-widest mt-8">
          O llamanos al <a href="tel:+541143219876" className="underline">+54 11 4321-9876</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10">
        <span className="font-black text-white/40 text-sm tracking-widest">BOLD STUDIO © 2024</span>
        <div className="flex gap-8 text-xs text-white/30 font-bold uppercase tracking-widest">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}
