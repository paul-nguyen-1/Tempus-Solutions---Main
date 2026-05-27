import { createFileRoute } from '@tanstack/react-router'
import { Shield, TrendingUp, Cpu, CheckCircle, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/services')({ component: ServicesPage })

interface ServiceTier {
  id: string
  name: string
  subtitle: string
  tagline: string
  audience: string
  icon: React.ElementType
  features: string[]
  accentBg: string
  accentBorder: string
  accentColor: string
  ctaBg: string
  ctaShadow: string
  highlight: boolean
}

const TIERS: ServiceTier[] = [
  {
    id: 'foundation',
    name: 'Secure & Support',
    subtitle: 'Tier 1: The Foundation',
    tagline: 'IT that just works, secure, supported, and predictable.',
    audience:
      'For businesses that want their technology to run reliably without managing it themselves.',
    icon: Shield,
    features: [
      'Managed Business Email (custom domain)',
      'Cloud Storage & Automated Backup',
      'Cybersecurity Protection & Monitoring',
      'Helpdesk Support (email & phone)',
    ],
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
    ctaBg: '#b45309',
    ctaShadow: '0 8px 22px rgba(180,83,9,0.32)',
    highlight: false,
  },
  {
    id: 'grow',
    name: 'Grow & Operate',
    subtitle: 'Tier 2: The Mid-Tier',
    tagline: 'Capture more customers and run your operations smarter.',
    audience:
      'For businesses trying to grow their local market share and streamline their sales process.',
    icon: TrendingUp,
    features: [
      'Everything in Tier 1',
      'CRM Setup & Ongoing Management',
      'POS Integration & Support',
      'Website Optimization & Maintenance',
      'Google Business Profile Management',
      'Local SEO Setup',
    ],
    accentBg: 'rgba(180,83,9,0.1)',
    accentBorder: 'rgba(146,64,14,0.22)',
    accentColor: 'var(--palm)',
    ctaBg: '#92400e',
    ctaShadow: '0 8px 22px rgba(146,64,14,0.35)',
    highlight: true,
  },
  {
    id: 'automate',
    name: 'Automate & Scale',
    subtitle: 'Tier 3: The Premium Tier',
    tagline: 'AI-powered workflows and real-time data insights.',
    audience:
      'For businesses ready to compete at scale with intelligent automation and live analytics.',
    icon: Cpu,
    features: [
      'Everything in Tiers 1 & 2',
      'Custom AI Workflow Design & Build',
      'Real-Time Analytics Dashboards',
      'End-to-End Process Automation',
      'Monthly Strategy & Performance Review',
    ],
    accentBg: 'rgba(28,25,23,0.08)',
    accentBorder: 'rgba(28,25,23,0.18)',
    accentColor: 'var(--sea-ink)',
    ctaBg: '#292524',
    ctaShadow: '0 8px 22px rgba(28,25,23,0.28)',
    highlight: false,
  },
]

const BASE_INCLUSIONS = [
  'Dedicated account manager',
  'Full onboarding & setup support',
  'Month-to-month flexibility',
  'Email & phone support',
  'No long-term contracts required',
  'Free initial consultation',
]

function ServicesPage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-18">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.22),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-4">Plans &amp; Pricing</p>
        <h1 className="display-title relative mb-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          Plans designed for your stage of growth.
        </h1>
        <p className="relative max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          Every plan is built to flex with your business. Start with the essentials and layer in
          more capability as your team and revenue grow. No lock-in. No surprises.
        </p>
      </section>

      <section className="mt-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {TIERS.map((tier, i) => {
            const Icon = tier.icon
            return (
              <article
                key={tier.id}
                className="island-shell rise-in relative flex flex-col overflow-hidden rounded-2xl p-7"
                style={{ animationDelay: `${i * 110 + 100}ms` }}
              >
                {tier.highlight && (
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,var(--lagoon),var(--palm))]" />
                )}

                <div
                  className="mb-5 inline-flex w-fit rounded-2xl p-3"
                  style={{
                    background: tier.accentBg,
                    border: `1px solid ${tier.accentBorder}`,
                  }}
                >
                  <Icon size={22} style={{ color: tier.accentColor }} />
                </div>

                <p
                  className="island-kicker mb-1.5"
                  style={{ color: tier.highlight ? 'var(--palm)' : tier.accentColor }}
                >
                  {tier.highlight ? '★ Most Popular' : tier.subtitle}
                </p>

                <h2 className="mb-2 text-xl font-semibold text-(--sea-ink)">{tier.name}</h2>

                <p className="mb-2 text-sm font-medium text-(--sea-ink-soft)">{tier.tagline}</p>

                <p className="mb-6 text-xs leading-5 text-(--sea-ink-soft) opacity-75">
                  {tier.audience}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-(--sea-ink-soft)">
                      <CheckCircle
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: 'var(--lagoon-deep)' }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:hello@tempussolutions.io"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white no-underline transition hover:-translate-y-0.5 hover:opacity-90"
                  style={{ background: tier.ctaBg, boxShadow: tier.ctaShadow }}
                >
                  Get Started <ArrowRight size={14} />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="island-shell mt-10 rounded-2xl px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="shrink-0 sm:max-w-56">
            <p className="island-kicker mb-1.5">Always Included</p>
            <h2 className="display-title text-2xl font-bold text-(--sea-ink)">
              Every plan comes with the basics done right.
            </h2>
          </div>
          <ul className="m-0 grid flex-1 gap-3 p-0 sm:grid-cols-2">
            {BASE_INCLUSIONS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-(--sea-ink-soft)">
                <CheckCircle
                  size={14}
                  className="shrink-0"
                  style={{ color: 'var(--lagoon-deep)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="island-shell relative mt-10 overflow-hidden rounded-4xl px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.16),transparent_66%)]" />

        <p className="island-kicker relative mb-3">Not Sure Where to Start?</p>
        <h2 className="display-title relative mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          Let's figure it out together.
        </h2>
        <p className="relative mx-auto mb-7 max-w-sm text-sm leading-6 text-(--sea-ink-soft)">
          Book a free 30-minute consultation and we'll map out the right plan for where your
          business is right now.
        </p>
        <a
          href="mailto:hello@tempussolutions.io"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#b45309] px-8 py-3 text-sm font-bold text-white no-underline shadow-[0_10px_28px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Book Free Consultation <ArrowRight size={15} />
        </a>
      </section>
    </main>
  )
}
