import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, DollarSign, Layers, Target } from 'lucide-react'

export const Route = createFileRoute('/about')({ component: AboutPage })

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: 'Built for Your Industry',
    desc: "We're not generalist IT consultants. We built Tempus around the trades such as HVAC, roofing, electrical, and plumbing, so we already understand your workflow before the first conversation.",
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: "Every plan is clearly scoped. You'll always know exactly what you're paying for, with no hidden fees, no long-term lock-in, and no surprise invoices at the end of the month.",
    accentBg: 'rgba(120,113,108,0.1)',
    accentBorder: 'rgba(120,113,108,0.22)',
  },
  {
    icon: Layers,
    title: 'Scalable by Design',
    desc: 'Our tiered model means you start with what makes sense today and add more capability as your business grows, without switching providers or renegotiating contracts.',
    accentBg: 'rgba(28,25,23,0.08)',
    accentBorder: 'rgba(28,25,23,0.18)',
  },
]

function AboutPage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.26),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-4">About Tempus Solutions</p>
        <h1 className="display-title relative mb-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          Technology that works as hard as you do.
        </h1>
        <p className="relative max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          We believe every small business deserves the same quality of
          technology infrastructure that the big players have, without the
          corporate price tag or the confusing jargon.
        </p>
      </section>

      <section className="island-shell mt-8 rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
        <p className="island-kicker mb-3">Our Story</p>
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
          <div>
            <h2 className="display-title mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
              We saw the gap. We decided to close it.
            </h2>
            <p className="m-0 text-sm leading-7 text-(--sea-ink-soft)">
              We kept seeing the same problem: small service businesses like HVAC
              contractors, roofers, electricians, and plumbers were either
              overpaying for IT they didn't understand, or running critical
              operations on personal Gmail accounts, Excel spreadsheets, and a
              collection of disconnected apps.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm leading-7 text-(--sea-ink-soft)">
            <p className="m-0">
              Meanwhile, the technology that could genuinely help them (organized
              CRM pipelines, automated follow-ups, professional email, optimized
              Google listings) was either buried behind complex enterprise
              software or priced for companies ten times their size.
            </p>
            <p className="m-0">
              Tempus Solutions exists to change that. Through smart tooling and
              AI-assisted operations, we deliver real IT infrastructure to the
              businesses that need it most, at prices that actually make sense.
            </p>
          </div>
        </div>
      </section>

      <section className="island-shell mt-6 rounded-2xl px-6 py-8 sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="shrink-0">
            <p className="island-kicker mb-1">Our Mission</p>
            <h2 className="display-title text-xl font-bold text-(--sea-ink) sm:text-2xl">
              In plain English
            </h2>
          </div>
          <blockquote className="m-0 border-l-2 border-(--lagoon) pl-5 text-base italic leading-7 text-(--sea-ink-soft) sm:text-lg">
            "Business technology modernization for small and mid-sized
            businesses, through transparent pricing, flexibility, and scalable
            solutions."
          </blockquote>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-7 text-center">
          <p className="island-kicker mb-2">What Makes Us Different</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            Not your typical IT firm.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {DIFFERENTIATORS.map(
            ({ icon: Icon, title, desc, accentBg, accentBorder }, i) => (
              <article
                key={title}
                className="island-shell feature-card rise-in rounded-2xl p-6"
                style={{ animationDelay: `${i * 100 + 100}ms` }}
              >
                <div
                  className="mb-4 inline-flex w-fit rounded-xl p-2.5"
                  style={{
                    background: accentBg,
                    border: `1px solid ${accentBorder}`,
                  }}
                >
                  <Icon size={18} style={{ color: 'var(--lagoon-deep)' }} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-(--sea-ink)">
                  {title}
                </h3>
                <p className="m-0 text-sm leading-6 text-(--sea-ink-soft)">
                  {desc}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="island-shell mt-8 rounded-2xl px-6 py-8 sm:px-8">
        <p className="island-kicker mb-3">How We Operate</p>
        <h2 className="display-title mb-6 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          Low overhead. High value.
        </h2>
        <div className="grid gap-4 text-sm leading-7 text-(--sea-ink-soft) sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="mb-2 font-semibold text-(--sea-ink)">
              AI-Assisted Operations
            </p>
            <p className="m-0">
              We use AI tooling internally to keep our overhead low, which means
              we pass the savings on to you instead of charging enterprise-tier
              rates for the same work.
            </p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-(--sea-ink)">
              Month-to-Month Flexibility
            </p>
            <p className="m-0">
              No multi-year contracts. No cancellation penalties. If we're not
              delivering value, you can walk away. That's how we stay motivated
              to keep earning your business.
            </p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-(--sea-ink)">
              Personal Onboarding
            </p>
            <p className="m-0">
              Every new client gets a dedicated account manager and a full
              onboarding session. We don't hand you a login and disappear.
            </p>
          </div>
        </div>
      </section>

      <section className="island-shell relative mt-10 overflow-hidden rounded-4xl px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-3">Let's Work Together</p>
        <h2 className="display-title relative mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          Start the conversation today.
        </h2>
        <p className="relative mx-auto mb-7 max-w-sm text-sm leading-6 text-(--sea-ink-soft)">
          A free 30-minute call is all it takes to figure out where we can make
          the biggest impact on your business.
        </p>
        <div className="relative flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@tempussolutions.io"
            className="inline-flex items-center gap-2 rounded-full bg-[#b45309] px-7 py-3 text-sm font-bold text-white no-underline shadow-[0_10px_28px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Book a Free Call <ArrowRight size={15} />
          </a>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(28,25,23,0.18)] bg-white/50 px-7 py-3 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-[rgba(28,25,23,0.32)]"
          >
            View Our Plans
          </Link>
        </div>
      </section>
    </main>
  )
}
