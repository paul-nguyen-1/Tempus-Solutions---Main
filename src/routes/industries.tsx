import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Thermometer,
  Home as HomeIcon,
  Zap,
  Droplets,
  Leaf,
  HardHat,
  Grid2X2,
  DoorOpen,
  Building2,
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
  recommendedServices: string
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
      'Automated follow-up sequences after every inquiry',
      'Scheduling software integration to eliminate conflicts',
      'Digital estimate tools for faster, professional quotes',
    ],
    recommendedServices: 'CRM Setup + Scheduling Implementation',
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
      'Document management for insurance claim workflows',
      'Google Business Profile optimization for local search',
      'Automated post-job review request sequences',
    ],
    recommendedServices: 'CRM Setup + Review Management',
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
    recommendedServices: 'Website Creation + Business Email',
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
      'Lead capture automation and missed call text-back',
      'Online booking integration to capture after-hours demand',
      'Automated review request system sent after every job',
      'Simple CRM your team will actually stick with',
    ],
    recommendedServices: 'Lead Capture Automation + CRM Setup',
    accentBg: 'rgba(245,158,11,0.07)',
    accentBorder: 'rgba(180,83,9,0.18)',
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: Leaf,
    tagline:
      'Landscaping companies deal with seasonal swings, crew coordination, and property-by-property schedules that paper and phone calls cannot keep up with.',
    challenges: [
      'Managing crew schedules across multiple job sites',
      'Losing bids to faster-responding competitors',
      'No system for managing recurring client contracts',
      'Weak online presence in a saturated local market',
      'Manual invoicing eating up admin time',
    ],
    solutions: [
      'CRM for tracking recurring clients and service contracts',
      'Automated estimate follow-ups and contract renewals',
      'Scheduling software for crew dispatch and job routing',
      'Website with before/after portfolio and lead capture forms',
    ],
    recommendedServices: 'CRM Setup + Scheduling Implementation',
    accentBg: 'rgba(34,197,94,0.08)',
    accentBorder: 'rgba(22,163,74,0.2)',
  },
  {
    id: 'restoration',
    name: 'Restoration',
    icon: HardHat,
    tagline:
      'Restoration contractors work in high-urgency, insurance-driven jobs where speed, documentation, and follow-through determine whether you win or lose.',
    challenges: [
      'Managing insurance claim documentation and workflows',
      "Losing leads who don't hear back fast enough",
      'No centralized system for job photos and scopes',
      'Coordination breakdowns between field and office',
      'Inconsistent review collection after jobs close',
    ],
    solutions: [
      'Lead capture automation to respond instantly to inquiries',
      'CRM for tracking jobs from inspection to final payment',
      'Follow-up automation for estimate conversions',
      'Automated review requests after job completion',
    ],
    recommendedServices: 'Lead Capture Automation + CRM Setup',
    accentBg: 'rgba(120,113,108,0.1)',
    accentBorder: 'rgba(120,113,108,0.2)',
  },
  {
    id: 'fencing',
    name: 'Fencing',
    icon: Grid2X2,
    tagline:
      'Fencing is a high-competition local market where the first company to respond and look professional usually wins the job.',
    challenges: [
      'Slow response time losing installs to competitors',
      'No organized quote-to-job tracking system',
      'Weak digital presence in a competitive local market',
      'Manual scheduling causing crew conflicts',
      'No automated follow-up on open estimates',
    ],
    solutions: [
      'Lead capture automation with fast-response workflows',
      'CRM for tracking estimates and converting leads',
      'Website with project gallery and quote request forms',
      'Automated estimate follow-up reminders',
    ],
    recommendedServices: 'Website Creation + Lead Capture Automation',
    accentBg: 'rgba(245,158,11,0.07)',
    accentBorder: 'rgba(180,83,9,0.18)',
  },
  {
    id: 'garage-door',
    name: 'Garage Door',
    icon: DoorOpen,
    tagline:
      'Garage door companies win on speed and availability. Businesses that cannot capture emergency calls around the clock are handing that revenue to competitors.',
    challenges: [
      'Missing after-hours and emergency service calls',
      'No automated follow-up on maintenance leads',
      'Manual scheduling causing delays and gaps',
      'Relying on word-of-mouth instead of Google reviews',
      'No website capturing organic search traffic',
    ],
    solutions: [
      'Missed call text-back and lead capture automation',
      'Scheduling software with 24/7 online booking',
      'Automated review request sequences after every job',
      'Website with emergency service CTA and local SEO',
    ],
    recommendedServices: 'Lead Capture Automation + Scheduling Implementation',
    accentBg: 'rgba(245,158,11,0.07)',
    accentBorder: 'rgba(180,83,9,0.18)',
  },
  {
    id: 'foundation',
    name: 'Foundation Repair',
    icon: Building2,
    tagline:
      'Foundation repair is a high-ticket, trust-heavy sale. Homeowners do their research, and your online credibility and speed of response determine who gets the job.',
    challenges: [
      'Long sales cycles with no structured follow-up system',
      'Homeowners comparing multiple quotes without deciding',
      'No system for nurturing leads over weeks or months',
      'Weak Google presence vs. larger regional competitors',
      'Manual estimate processes slowing down the sales cycle',
    ],
    solutions: [
      'CRM with long-cycle pipeline management and follow-up sequences',
      'Automated estimate reminders and nurture workflows',
      'Dashboard analytics to track leads, quotes, and close rates',
      'Review automation to build credibility with new customers',
    ],
    recommendedServices: 'CRM Setup + Follow Up Automation',
    accentBg: 'rgba(120,113,108,0.1)',
    accentBorder: 'rgba(120,113,108,0.2)',
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
          We built Tempus Solutions around the realities of home service businesses. That
          means we already understand your workflow, your seasonal pressure, and your
          customer expectations before we ever talk.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {INDUSTRIES.map((industry, i) => {
          const Icon = industry.icon
          return (
            <article
              key={industry.id}
              className="island-shell rise-in flex flex-col rounded-2xl p-7"
              style={{ animationDelay: `${i * 80 + 100}ms` }}
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
                  <p className="island-kicker mb-0.5">Recommended Services</p>
                  <p className="m-0 text-sm font-semibold text-(--sea-ink)">
                    {industry.recommendedServices}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(180,83,9,0.28)] bg-[rgba(245,158,11,0.1)] px-4 py-2 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(245,158,11,0.16)]"
                >
                  View Pricing <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          )
        })}
      </section>

      <section className="island-shell relative mt-10 overflow-hidden rounded-4xl px-6 py-12 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.16),transparent_66%)]" />

        <p className="island-kicker relative mb-3">Your Industry, Our Expertise</p>
        <h2 className="display-title relative mb-4 text-2xl font-bold text-(--sea-ink) sm:text-3xl">
          Don't see your trade listed?
        </h2>
        <p className="relative mx-auto mb-7 max-w-sm text-sm leading-6 text-(--sea-ink-soft)">
          We work with any home service business that has operational pain points. If
          you're running a lean team and feel like tech is holding you back, let's talk.
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
