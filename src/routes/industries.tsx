import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Thermometer,
  Home as HomeIcon,
  Zap,
  Droplets,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/industries')({
  component: IndustriesPage,
})

interface Industry {
  id: string
  name: string
  icon: React.ElementType
  tagline: string
  challenges: string[]
  solutions: string[]
  recommendedTier: string
  accentBg: string
  accentBorder: string
}

const INDUSTRIES: Industry[] = [
  {
    id: 'hvac',
    name: 'HVAC',
    icon: Thermometer,
    tagline:
      'HVAC businesses live and die by scheduling efficiency. One missed dispatch or slow estimate can cost you the job.',
    challenges: [
      'Dispatch coordination across multiple technicians',
      'Lead management and follow-up gaps',
      'Scheduling conflicts and double-bookings',
      'Slow estimate delivery losing bids to competitors',
      'No system for tracking customer history',
    ],
    solutions: [
      'CRM setup for organized lead tracking & pipeline visibility',
      'Automated follow-up email sequences after every inquiry',
      'Scheduling software integration to eliminate conflicts',
      'Digital estimate tools for faster, professional quotes',
    ],
    recommendedTier: 'Grow & Operate',
    accentBg: 'rgba(245,158,11,0.08)',
    accentBorder: 'rgba(180,83,9,0.2)',
  },
  {
    id: 'roofing',
    name: 'Roofing',
    icon: HomeIcon,
    tagline:
      'Roofing is relationship- and reputation-driven. Losing track of leads or getting buried in insurance paperwork is money left on the table.',
    challenges: [
      'No system for tracking leads from inspection to close',
      'Insurance claim workflows managed in email chaos',
      'CRM that is out of date or simply not used',
      'Weak Google presence hurting credibility and search rank',
      'Inconsistent post-job review collection',
    ],
    solutions: [
      'Organized CRM with full pipeline visibility from lead to invoice',
      'Document management system for insurance claim workflows',
      'Google Business Profile optimization for local search',
      'Automated post-job review request sequences',
    ],
    recommendedTier: 'Grow & Operate',
    accentBg: 'rgba(120,113,108,0.1)',
    accentBorder: 'rgba(120,113,108,0.2)',
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: Zap,
    tagline:
      'Electrical contractors often punch above their weight on quality, but fall short online. A professional digital presence and smoother operations unlock real growth.',
    challenges: [
      'Scheduling gaps and customer no-shows',
      'Manual, paper-based estimate processes',
      'Poor or non-existent customer communication',
      'Outdated or missing website failing to generate leads',
      'Using a personal email address instead of a business domain',
    ],
    solutions: [
      'Professional business email on your own domain',
      'Website rebuild and local SEO to drive inbound leads',
      'Digital estimate tools for fast, polished quotes',
      'Automated appointment reminders to cut no-shows',
    ],
    recommendedTier: 'Secure & Support',
    accentBg: 'rgba(245,158,11,0.07)',
    accentBorder: 'rgba(180,83,9,0.18)',
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Droplets,
    tagline:
      'Plumbers need to respond fast to emergencies and convert that urgency into loyal, review-leaving customers. Most miss the window to build long-term relationships.',
    challenges: [
      'Emergency calls routing to the wrong person or voicemail',
      'Missed after-hours booking opportunities',
      'Too few online reviews to build trust with new customers',
      'CRM tools that get abandoned within a week',
      'No system for customer follow-up after a job',
    ],
    solutions: [
      'Smart call routing for after-hours and emergency coverage',
      'Online booking integration to capture after-hours demand',
      'Automated review request system sent after every job',
      'Simple CRM your team will actually stick with',
    ],
    recommendedTier: 'Grow & Operate',
    accentBg: 'rgba(245,158,11,0.07)',
    accentBorder: 'rgba(180,83,9,0.18)',
  },
]

function IndustriesPage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-18">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.22),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-4">Industries We Serve</p>
        <h1 className="display-title relative mb-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          We speak your language.
        </h1>
        <p className="relative max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          We built Tempus Solutions around the realities of trade and service
          businesses. That means we already understand your workflow, your
          seasonal pressure, and your customer expectations before we ever talk.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {INDUSTRIES.map((industry, i) => {
          const Icon = industry.icon
          return (
            <article
              key={industry.id}
              className="island-shell rise-in flex flex-col rounded-2xl p-7"
              style={{ animationDelay: `${i * 100 + 100}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="inline-flex rounded-2xl p-3"
                  style={{
                    background: industry.accentBg,
                    border: `1px solid ${industry.accentBorder}`,
                  }}
                >
                  <Icon size={22} style={{ color: 'var(--lagoon-deep)' }} />
                </div>
                <h2 className="m-0 text-xl font-semibold text-(--sea-ink)">
                  {industry.name}
                </h2>
              </div>

              <p className="mb-6 text-sm leading-6 text-(--sea-ink-soft)">
                {industry.tagline}
              </p>

              <div className="mb-5">
                <p className="island-kicker mb-3">Common Challenges</p>
                <ul className="m-0 space-y-2 p-0">
                  {industry.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-2 text-sm text-(--sea-ink-soft)"
                    >
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
                    <li
                      key={solution}
                      className="flex items-start gap-2 text-sm text-(--sea-ink-soft)"
                    >
                      <CheckCircle
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: 'var(--lagoon-deep)' }}
                      />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-(--line) pt-5">
                <div>
                  <p className="island-kicker mb-0.5">Recommended Plan</p>
                  <p className="m-0 text-sm font-semibold text-(--sea-ink)">
                    {industry.recommendedTier}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(180,83,9,0.28)] bg-[rgba(245,158,11,0.1)] px-4 py-2 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(245,158,11,0.16)]"
                >
                  View Plans <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          )
        })}
      </section>

      <section className="island-shell relative mt-10 overflow-hidden rounded-4xl px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.16),transparent_66%)]" />

        <p className="island-kicker relative mb-3">
          Your Industry, Our Expertise
        </p>
        <h2 className="display-title relative mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          Don't see your trade listed?
        </h2>
        <p className="relative mx-auto mb-7 max-w-sm text-sm leading-6 text-(--sea-ink-soft)">
          We work with any service business that has operational pain points. If
          you're running a lean team and feel like tech is holding you back,
          let's talk.
        </p>
        <a
          href="mailto:info@tempussolutions.io"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#b45309] px-8 py-3 text-sm font-bold text-white no-underline shadow-[0_10px_28px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Get in Touch <ArrowRight size={15} />
        </a>
      </section>
    </main>
  )
}
