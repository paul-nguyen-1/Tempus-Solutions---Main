import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle, ArrowRight } from 'lucide-react'
import config from '../config/services.json'
import { SERVICE_ICONS } from '../config/icons'

export const Route = createFileRoute('/services')({ component: ServicesPage })

const ACCENT_STYLES = [
  { accentBg: 'rgba(46,125,50,0.1)', accentBorder: 'rgba(27,94,32,0.22)', accentColor: 'var(--lagoon-deep)' },
  { accentBg: 'rgba(27,94,32,0.08)', accentBorder: 'rgba(27,94,32,0.18)', accentColor: 'var(--palm)' },
]
const SUPPORT_ACCENT = { accentBg: 'rgba(28,25,23,0.08)', accentBorder: 'rgba(28,25,23,0.18)', accentColor: 'var(--sea-ink)' }

function ServicesPage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in rounded-2xl px-6 py-14 sm:px-12 sm:py-18">
        <p className="island-kicker mb-4">{config.hero.kicker}</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          {config.hero.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          {config.hero.subtitle}
        </p>
      </section>

      <section className="mt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {config.items.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon]
            const accent = service.id === 'support' ? SUPPORT_ACCENT : ACCENT_STYLES[i % 2]
            return (
              <article
                key={service.id}
                className="island-shell rise-in flex flex-col rounded-2xl p-6"
                style={{ animationDelay: `${i * 60 + 100}ms` }}
              >
                <div
                  className="mb-4 inline-flex w-fit rounded-xl p-2.5"
                  style={{ background: accent.accentBg, border: `1px solid ${accent.accentBorder}` }}
                >
                  <Icon size={20} style={{ color: accent.accentColor }} />
                </div>

                <h2 className="mb-2 text-base font-semibold text-(--sea-ink)">{service.name}</h2>
                <p className="mb-5 flex-1 text-sm leading-6 text-(--sea-ink-soft)">{service.description}</p>

                <div className="border-t border-(--line) pt-4">
                  <Link
                    to="/contact"
                    search={{ service: service.name }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(27,94,32,0.28)] bg-[rgba(46,125,50,0.1)] px-4 py-2 text-xs font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(46,125,50,0.16)]"
                  >
                    Get a Quote <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="island-shell mt-10 rounded-2xl px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0 sm:max-w-56">
            <p className="island-kicker mb-1.5">{config.alwaysIncluded.kicker}</p>
            <h2 className="display-title text-2xl font-bold text-(--sea-ink)">
              {config.alwaysIncluded.title}
            </h2>
          </div>
          <ul className="m-0 grid flex-1 gap-3 p-0 sm:grid-cols-2">
            {config.alwaysIncluded.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-(--sea-ink-soft)">
                <CheckCircle size={14} className="shrink-0" style={{ color: 'var(--lagoon-deep)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="island-shell mt-10 rounded-2xl px-6 py-12 text-center sm:px-12">
        <p className="island-kicker mb-3">{config.cta.kicker}</p>
        <h2 className="display-title mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          {config.cta.title}
        </h2>
        <p className="mx-auto mb-7 max-w-sm text-sm leading-6 text-(--sea-ink-soft)">
          {config.cta.subtitle}
        </p>
        <Link
          to="/contact"
          search={{ service: '' }}
          className="inline-flex items-center gap-2 rounded-full bg-[#2e7d32] px-8 py-3 text-sm font-bold text-white no-underline shadow-[0_10px_28px_rgba(46,125,50,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          {config.cta.buttonText} <ArrowRight size={15} />
        </Link>
      </section>
    </main>
  )
}
