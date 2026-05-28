import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import config from '../config/about.json'
import { ABOUT_ICONS } from '../config/icons'
import { getConsultationMailto } from '../utils/mailto'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.26),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-4">{config.hero.kicker}</p>
        <h1 className="display-title relative mb-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          {config.hero.title}
        </h1>
        <p className="relative max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          {config.hero.subtitle}
        </p>
      </section>

      <section className="island-shell mt-8 rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
        <p className="island-kicker mb-3">{config.story.kicker}</p>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
          <div>
            <h2 className="display-title mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
              {config.story.title}
            </h2>
            <p className="m-0 text-sm leading-7 text-(--sea-ink-soft)">{config.story.col1}</p>
          </div>
          <div className="flex flex-col gap-4 text-sm leading-7 text-(--sea-ink-soft)">
            <p className="m-0">{config.story.col2a}</p>
            <p className="m-0">{config.story.col2b}</p>
          </div>
        </div>
      </section>

      <section className="island-shell mt-6 rounded-2xl px-6 py-8 sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="shrink-0">
            <p className="island-kicker mb-1">{config.mission.kicker}</p>
            <h2 className="display-title text-xl font-bold text-(--sea-ink) sm:text-2xl">
              {config.mission.title}
            </h2>
          </div>
          <blockquote className="m-0 border-l-2 border-(--lagoon) pl-5 text-base italic leading-7 text-(--sea-ink-soft) sm:text-lg">
            "{config.mission.quote}"
          </blockquote>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-7 text-center">
          <p className="island-kicker mb-2">{config.differentiators.kicker}</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            {config.differentiators.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {config.differentiators.items.map(({ icon, title, desc, accentBg, accentBorder }, i) => {
            const Icon = ABOUT_ICONS[icon]
            return (
              <article
                key={title}
                className="island-shell feature-card rise-in rounded-2xl p-6"
                style={{ animationDelay: `${i * 100 + 100}ms` }}
              >
                <div
                  className="mb-4 inline-flex w-fit rounded-xl p-2.5"
                  style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
                >
                  <Icon size={18} style={{ color: 'var(--lagoon-deep)' }} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-(--sea-ink)">{title}</h3>
                <p className="m-0 text-sm leading-6 text-(--sea-ink-soft)">{desc}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="island-shell mt-8 rounded-2xl px-6 py-8 sm:px-8">
        <p className="island-kicker mb-3">{config.operations.kicker}</p>
        <h2 className="display-title mb-6 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          {config.operations.title}
        </h2>
        <div className="grid gap-4 text-sm leading-7 text-(--sea-ink-soft) sm:grid-cols-3 sm:gap-8">
          {config.operations.items.map(({ title, desc }) => (
            <div key={title}>
              <p className="mb-2 font-semibold text-(--sea-ink)">{title}</p>
              <p className="m-0">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="island-shell relative mt-10 overflow-hidden rounded-4xl px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-3">{config.cta.kicker}</p>
        <h2 className="display-title relative mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          {config.cta.title}
        </h2>
        <p className="relative mx-auto mb-7 max-w-sm text-sm leading-6 text-(--sea-ink-soft)">
          {config.cta.subtitle}
        </p>
        <div className="relative flex flex-wrap justify-center gap-3">
          <a
            href={getConsultationMailto()}
            className="inline-flex items-center gap-2 rounded-full bg-[#b45309] px-7 py-3 text-sm font-bold text-white no-underline shadow-[0_10px_28px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            {config.cta.primaryCta} <ArrowRight size={15} />
          </a>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(28,25,23,0.18)] bg-white/50 px-7 py-3 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-[rgba(28,25,23,0.32)]"
          >
            {config.cta.secondaryCta}
          </Link>
        </div>
      </section>
    </main>
  )
}
