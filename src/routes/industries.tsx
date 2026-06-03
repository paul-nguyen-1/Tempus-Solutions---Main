import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle, ArrowRight } from 'lucide-react'
import config from '../config/industries.json'
import { INDUSTRY_ICONS } from '../config/icons'

export const Route = createFileRoute('/industries')({ component: IndustriesPage })

function IndustriesPage() {
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

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {config.items.map((industry, i) => {
          const Icon = INDUSTRY_ICONS[industry.icon]
          return (
            <article
              key={industry.id}
              className="island-shell rise-in flex flex-col rounded-2xl p-7"
              style={{ animationDelay: `${i * 80 + 100}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="inline-flex rounded-2xl p-3"
                  style={{ background: industry.accentBg, border: `1px solid ${industry.accentBorder}` }}
                >
                  <Icon size={22} style={{ color: 'var(--lagoon-deep)' }} />
                </div>
                <h2 className="m-0 text-xl font-semibold text-(--sea-ink)">{industry.name}</h2>
              </div>

              <p className="mb-6 text-sm leading-6 text-(--sea-ink-soft)">{industry.tagline}</p>

              <div className="mb-5">
                <p className="island-kicker mb-3">Common Challenges</p>
                <ul className="m-0 space-y-2 p-0">
                  {industry.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-sm text-(--sea-ink-soft)">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(28,25,23,0.25)]" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="island-kicker mb-3">How Tempus Helps</p>
                <ul className="m-0 space-y-2 p-0">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2 text-sm text-(--sea-ink-soft)">
                      <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--lagoon-deep)' }} />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-(--line) pt-5">
                <div>
                  <p className="island-kicker mb-0.5">Recommended Services</p>
                  <p className="m-0 text-sm font-semibold text-(--sea-ink)">{industry.recommendedServices}</p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(27,94,32,0.28)] bg-[rgba(46,125,50,0.1)] px-4 py-2 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(46,125,50,0.16)]"
                >
                  <span className="sm:hidden">Pricing</span>
                  <span className="hidden sm:inline">View Pricing</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          )
        })}
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
