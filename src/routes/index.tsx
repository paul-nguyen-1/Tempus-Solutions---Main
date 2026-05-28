import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import homeConfig from '../config/home.json'
import servicesConfig from '../config/services.json'
import industriesConfig from '../config/industries.json'
import { SERVICE_ICONS, INDUSTRY_ICONS } from '../config/icons'

export const Route = createFileRoute('/')({ component: HomePage })

const ACCENT_STYLES = [
  {
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
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
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.28),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.16),transparent_66%)]" />

        <p className="island-kicker relative mb-4">{hero.kicker}</p>
        <h1 className="display-title relative mb-6 max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-(--sea-ink) sm:text-6xl">
          {hero.title}
        </h1>
        <p className="relative mb-10 max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="relative flex flex-wrap gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#b45309] px-6 py-3 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            {hero.primaryCta} <ArrowRight size={15} />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(28,25,23,0.18)] bg-white/50 px-6 py-3 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-[rgba(28,25,23,0.32)]"
          >
            {hero.secondaryCta}
          </Link>
        </div>
      </section>

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

                <div className="flex items-center justify-between border-t border-(--line) pt-3">
                  <p className="text-xs font-bold text-(--sea-ink)">
                    {service.price}
                  </p>
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
                className="island-shell feature-card rise-in flex flex-col items-center gap-2.5 rounded-2xl px-3 py-5 text-center"
                style={{ animationDelay: `${i * 55 + 100}ms` }}
              >
                <div className="inline-flex rounded-xl border border-[rgba(180,83,9,0.2)] bg-[rgba(245,158,11,0.1)] p-2.5">
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

      <section className="island-shell relative mt-16 overflow-hidden rounded-4xl px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.2),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-3">{cta.kicker}</p>
        <h2 className="display-title relative mb-4 text-3xl font-bold text-(--sea-ink) sm:text-4xl">
          {cta.title}
        </h2>
        <p className="relative mx-auto mb-8 max-w-md text-base text-(--sea-ink-soft)">
          {cta.subtitle}
        </p>
        <a
          href="mailto:info@tempussolutions.io"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#b45309] px-8 py-3.5 text-sm font-bold text-white no-underline shadow-[0_10px_32px_rgba(180,83,9,0.38)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          {cta.buttonText} <ArrowRight size={15} />
        </a>
      </section>
    </main>
  )
}
