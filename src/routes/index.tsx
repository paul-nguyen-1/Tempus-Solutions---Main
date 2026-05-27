import { createFileRoute, Link } from '@tanstack/react-router'
import { Shield, TrendingUp, Cpu, CheckCircle, ArrowRight, Thermometer, Home as HomeIcon, Zap, Droplets } from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

interface Tier {
  id: string
  name: string
  subtitle: string
  tagline: string
  icon: React.ElementType
  features: string[]
  accentBg: string
  accentBorder: string
  accentColor: string
  highlight: boolean
}

interface Industry {
  id: string
  name: string
  icon: React.ElementType
  painPoints: string[]
}

const TIERS: Tier[] = [
  {
    id: 'foundation',
    name: 'Secure & Support',
    subtitle: 'Tier 1: The Foundation',
    tagline: 'IT that works: secure, supported, and predictable.',
    icon: Shield,
    features: [
      'Managed Business Email',
      'Cloud Storage & Backup',
      'Cybersecurity Protection',
      'Helpdesk Support',
    ],
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
    highlight: false,
  },
  {
    id: 'grow',
    name: 'Grow & Operate',
    subtitle: 'Tier 2: The Mid-Tier',
    tagline: 'Capture more customers and run your ops smarter.',
    icon: TrendingUp,
    features: [
      'Everything in Tier 1',
      'CRM / POS Management',
      'Website Optimization',
      'Google Business Profile',
    ],
    accentBg: 'rgba(180,83,9,0.1)',
    accentBorder: 'rgba(146,64,14,0.22)',
    accentColor: 'var(--palm)',
    highlight: true,
  },
  {
    id: 'automate',
    name: 'Automate & Scale',
    subtitle: 'Tier 3: The Premium Tier',
    tagline: 'AI-powered workflows and real-time analytics.',
    icon: Cpu,
    features: [
      'Everything in Tiers 1 & 2',
      'Custom AI Workflows',
      'Real-Time Analytics Dashboards',
      'Process Automation',
    ],
    accentBg: 'rgba(28,25,23,0.08)',
    accentBorder: 'rgba(28,25,23,0.18)',
    accentColor: 'var(--sea-ink)',
    highlight: false,
  },
]

const INDUSTRIES: Industry[] = [
  {
    id: 'hvac',
    name: 'HVAC',
    icon: Thermometer,
    painPoints: [
      'Dispatch coordination across techs',
      'Lead management & follow-up gaps',
      'Scheduling conflicts & double-bookings',
      'Slow estimate delivery losing bids',
    ],
  },
  {
    id: 'roofing',
    name: 'Roofing',
    icon: HomeIcon,
    painPoints: [
      'Disorganized lead tracking',
      'Insurance workflow chaos',
      'CRM sprawl & data loss',
      'Weak Google presence & reviews',
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: Zap,
    painPoints: [
      'Scheduling gaps & no-shows',
      'Manual estimate processes',
      'Poor customer communication',
      'Outdated or missing website',
    ],
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Droplets,
    painPoints: [
      'Emergency call routing failures',
      'Missed after-hours bookings',
      'Too few online reviews',
      'CRM nobody actually uses',
    ],
  },
]

const VALUE_PROPS = [
  {
    label: 'Transparent Pricing',
    desc: 'No hidden fees, no surprise invoices. You always know exactly what you pay.',
  },
  {
    label: 'Flexible Plans',
    desc: 'Start with what you need today and add more capability as you grow.',
  },
  {
    label: 'Built for Trades',
    desc: 'Solutions designed around how service businesses actually operate day-to-day.',
  },
]

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.28),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.16),transparent_66%)]" />

        <p className="island-kicker relative mb-4">HVAC · Roofing · Electrical · Plumbing</p>

        <h1 className="display-title relative mb-6 max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-(--sea-ink) sm:text-6xl">
          Modern IT for <br className="hidden sm:block" />
          the trades.
        </h1>

        <p className="relative mb-10 max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          Tempus Solutions brings enterprise-grade technology to small and mid-sized service
          businesses, with transparent pricing, zero jargon, and plans that scale with you.
        </p>

        <div className="relative flex flex-wrap gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#b45309] px-6 py-3 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            View Our Plans <ArrowRight size={15} />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(28,25,23,0.18)] bg-white/50 px-6 py-3 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-[rgba(28,25,23,0.32)]"
          >
            Who We Serve
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {VALUE_PROPS.map(({ label, desc }, i) => (
          <article
            key={label}
            className="island-shell feature-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${i * 80 + 90}ms` }}
          >
            <h2 className="mb-1.5 text-sm font-semibold text-(--sea-ink)">{label}</h2>
            <p className="m-0 text-sm leading-6 text-(--sea-ink-soft)">{desc}</p>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-8 text-center">
          <p className="island-kicker mb-2">Plans &amp; Pricing</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            Choose the right tier for your stage.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-(--sea-ink-soft)">
            Each plan builds on the last. Start simple and layer in more capability as you grow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {TIERS.map((tier, i) => {
            const Icon = tier.icon
            return (
              <article
                key={tier.id}
                className="island-shell feature-card rise-in relative flex flex-col overflow-hidden rounded-2xl p-6"
                style={{ animationDelay: `${i * 100 + 120}ms` }}
              >
                {tier.highlight && (
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,var(--lagoon),var(--palm))]" />
                )}

                <div
                  className="mb-4 inline-flex w-fit items-center justify-center rounded-xl p-2.5"
                  style={{
                    background: tier.accentBg,
                    border: `1px solid ${tier.accentBorder}`,
                  }}
                >
                  <Icon size={18} style={{ color: tier.accentColor }} />
                </div>

                <p
                  className="island-kicker mb-1.5"
                  style={{ color: tier.highlight ? 'var(--palm)' : tier.accentColor }}
                >
                  {tier.highlight ? '★ Most Popular' : tier.subtitle}
                </p>

                <h3 className="mb-2 text-base font-semibold text-(--sea-ink)">{tier.name}</h3>
                <p className="mb-5 text-sm leading-6 text-(--sea-ink-soft)">{tier.tagline}</p>

                <ul className="mb-6 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-(--sea-ink-soft)">
                      <CheckCircle
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: 'var(--lagoon-deep)' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-(--line) bg-(--chip-bg) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
                >
                  See Full Details <ArrowRight size={13} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 text-center">
          <p className="island-kicker mb-2">Industries We Serve</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            We know your pain points.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-(--sea-ink-soft)">
            Every trade has unique operational headaches. Our solutions are built around how you
            actually work, not generic IT consulting.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon
            return (
              <article
                key={industry.id}
                className="island-shell feature-card rise-in rounded-2xl p-6"
                style={{ animationDelay: `${i * 80 + 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex rounded-xl border border-[rgba(180,83,9,0.2)] bg-[rgba(245,158,11,0.1)] p-2.5">
                    <Icon size={20} style={{ color: 'var(--lagoon-deep)' }} />
                  </div>
                  <h3 className="m-0 text-base font-semibold text-(--sea-ink)">{industry.name}</h3>
                </div>

                <ul className="m-0 space-y-2 p-0">
                  {industry.painPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-(--sea-ink-soft)">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--lagoon)" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/industries"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-(--lagoon-deep) no-underline hover:underline"
                >
                  See our approach <ArrowRight size={13} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      <section className="island-shell relative mt-16 overflow-hidden rounded-4xl px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.2),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-3">Ready to Modernize?</p>
        <h2 className="display-title relative mb-4 text-3xl font-bold text-(--sea-ink) sm:text-4xl">
          Let's talk about your business.
        </h2>
        <p className="relative mx-auto mb-8 max-w-md text-base text-(--sea-ink-soft)">
          Get a free consultation and find out which plan fits your current needs and your future
          goals.
        </p>
        <a
          href="mailto:hello@tempussolutions.io"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#b45309] px-8 py-3.5 text-sm font-bold text-white no-underline shadow-[0_10px_32px_rgba(180,83,9,0.38)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Book a Free Consultation <ArrowRight size={15} />
        </a>
      </section>
    </main>
  )
}
