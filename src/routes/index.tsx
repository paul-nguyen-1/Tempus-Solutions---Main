import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import homeConfig from '../config/home.json'
import servicesConfig from '../config/services.json'
import industriesConfig from '../config/industries.json'
import { SERVICE_ICONS, INDUSTRY_ICONS } from '../config/icons'

export const Route = createFileRoute('/')({ component: HomePage })

const ACCENT_STYLES = [
  {
    accentBg: 'rgba(46,125,50,0.1)',
    accentBorder: 'rgba(27,94,32,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    accentBg: 'rgba(27,94,32,0.08)',
    accentBorder: 'rgba(27,94,32,0.18)',
    accentColor: 'var(--palm)',
  },
]
const SUPPORT_ACCENT = {
  accentBg: 'rgba(28,25,23,0.08)',
  accentBorder: 'rgba(28,25,23,0.18)',
  accentColor: 'var(--sea-ink)',
}

function HomePage() {
  const { hero, valueProps, servicesSection, industriesSection, cta } =
    homeConfig
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const tryPlay = () => {
      video.muted = true
      video.play().catch(() => {})
    }
    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true })
    }
    return () => video.removeEventListener('loadeddata', tryPlay)
  }, [])
  return (
    <main className="pb-20">
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '680px' }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/cta_video.png"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/cta_video.mp4" type="video/mp4" />
          <source src="/cta_video.webm" type="video/webm" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(12,20,35,0.82) 0%, rgba(12,20,35,0.62) 50%, rgba(12,20,35,0.28) 100%)',
          }}
        />

        <div className="page-wrap relative z-10 flex min-h-[680px] flex-col justify-center px-4 py-28">
          <p className="mb-5 text-[0.69rem] font-bold uppercase tracking-[0.16em] text-[#4caf50]">
            {hero.kicker}
          </p>
          <h1 className="display-title mb-6 max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mb-10 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#2e7d32] px-7 py-3.5 text-sm font-bold text-white no-underline shadow-[0_8px_32px_rgba(46,125,50,0.45)] transition hover:-translate-y-0.5 hover:opacity-90"
            >
              {hero.primaryCta} <ArrowRight size={15} />
            </Link>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white no-underline backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <div className="page-wrap px-4">
        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {valueProps.map(({ label, desc }, i) => (
            <article
              key={label}
              className="island-shell feature-card rise-in rounded-2xl p-5"
              style={{ animationDelay: `${i * 80 + 90}ms` }}
            >
              <h2 className="mb-1.5 text-sm font-semibold text-(--sea-ink)">
                {label}
              </h2>
              <p className="m-0 text-sm leading-6 text-(--sea-ink-soft)">
                {desc}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <p className="island-kicker mb-2">{servicesSection.kicker}</p>
            <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
              {servicesSection.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-(--sea-ink-soft)">
              {servicesSection.subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesConfig.items.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon]
              const accent =
                service.id === 'support' ? SUPPORT_ACCENT : ACCENT_STYLES[i % 2]
              return (
                <article
                  key={service.id}
                  className="island-shell feature-card rise-in flex flex-col rounded-2xl p-5"
                  style={{ animationDelay: `${i * 55 + 120}ms` }}
                >
                  <div
                    className="mb-3 inline-flex w-fit items-center justify-center rounded-xl p-2"
                    style={{
                      background: accent.accentBg,
                      border: `1px solid ${accent.accentBorder}`,
                    }}
                  >
                    <Icon size={16} style={{ color: accent.accentColor }} />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-(--sea-ink)">
                    {service.name}
                  </h3>
                  <p className="mb-4 flex-1 text-xs leading-5 text-(--sea-ink-soft)">
                    {service.description}
                  </p>
                  <div className="border-t border-(--line) pt-3">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-(--lagoon-deep) no-underline hover:underline"
                    >
                      Details <ArrowRight size={11} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <p className="island-kicker mb-2">{industriesSection.kicker}</p>
            <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
              {industriesSection.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-(--sea-ink-soft)">
              {industriesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {industriesConfig.items.map((industry, i) => {
              const Icon = INDUSTRY_ICONS[industry.icon]
              return (
                <article
                  key={industry.id}
                  className="island-shell feature-card rise-in flex flex-col items-center gap-2.5 rounded-2xl px-2 py-5 text-center"
                  style={{ animationDelay: `${i * 55 + 100}ms` }}
                >
                  <div className="inline-flex rounded-xl border border-[rgba(180,83,9,0.2)] bg-[rgba(46,125,50,0.1)] p-2.5">
                    <Icon size={18} style={{ color: 'var(--lagoon-deep)' }} />
                  </div>
                  <p className="m-0 text-xs font-semibold leading-tight text-(--sea-ink)">
                    {industry.name}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--lagoon-deep) no-underline hover:underline"
            >
              See how we help each industry <ArrowRight size={13} />
            </Link>
          </div>
        </section>

        <section className="island-shell mt-16 rounded-2xl px-6 py-14 text-center sm:px-12">
          <p className="island-kicker mb-3">{cta.kicker}</p>
          <h2 className="display-title mb-4 text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base text-(--sea-ink-soft)">
            {cta.subtitle}
          </p>
          <Link
            to="/contact"
            search={{ service: '' }}
            className="inline-flex items-center gap-2 rounded-full bg-[#2e7d32] px-8 py-3.5 text-sm font-bold text-white no-underline shadow-[0_10px_32px_rgba(46,125,50,0.38)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            {cta.buttonText} <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </main>
  )
}
