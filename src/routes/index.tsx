import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Globe,
  Mail,
  Users,
  Calendar,
  BarChart2,
  Target,
  RefreshCw,
  Star,
  Headphones,
  CheckCircle,
  ArrowRight,
  Thermometer,
  Home as HomeIcon,
  Zap,
  Droplets,
  Leaf,
  HardHat,
  Grid2X2,
  DoorOpen,
  Building2,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

interface ServiceCard {
  id: string
  name: string
  desc: string
  price: string
  icon: React.ElementType
  accentBg: string
  accentBorder: string
  accentColor: string
}

interface Industry {
  id: string
  name: string
  icon: React.ElementType
}

const SERVICES: ServiceCard[] = [
  {
    id: 'website',
    name: 'Website Creation',
    desc: 'Mobile-optimized site with lead capture forms and contact integration.',
    price: '$1,500 – $2,000',
    icon: Globe,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'email',
    name: 'Business Email',
    desc: 'Microsoft 365 or Google Workspace setup with your own domain.',
    price: '$250 – $500',
    icon: Mail,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'crm',
    name: 'CRM Setup',
    desc: 'Pipeline setup, lead tracking organization, and workflow onboarding.',
    price: '$1,000 – $2,000',
    icon: Users,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'scheduling',
    name: 'Scheduling',
    desc: 'Dispatch workflows, calendar syncing, automated reminders, and booking.',
    price: '$1,000 – $2,000',
    icon: Calendar,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'analytics',
    name: 'Dashboard Analytics',
    desc: 'Custom dashboards for leads, sales, jobs, reviews, and KPIs.',
    price: '$1,000 – $2,000',
    icon: BarChart2,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'lead-capture',
    name: 'Lead Capture Automation',
    desc: 'Web forms, missed call text back, intake workflows, and notifications.',
    price: '$1,000 – $2,000',
    icon: Target,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'followup',
    name: 'Follow Up Automation',
    desc: 'Estimate reminders, customer communication, and operational automations.',
    price: '$1,000 – $2,000',
    icon: RefreshCw,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'reviews',
    name: 'Review Management',
    desc: 'Automated Google review requests and customer follow-up workflows.',
    price: '$1,000 – $2,000',
    icon: Star,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'support',
    name: 'Subscription Support',
    desc: 'Ongoing support, troubleshooting, software management, and optimization.',
    price: '$99 – $500 / mo',
    icon: Headphones,
    accentBg: 'rgba(28,25,23,0.08)',
    accentBorder: 'rgba(28,25,23,0.18)',
    accentColor: 'var(--sea-ink)',
  },
]

const INDUSTRIES: Industry[] = [
  { id: 'hvac', name: 'HVAC', icon: Thermometer },
  { id: 'plumbing', name: 'Plumbing', icon: Droplets },
  { id: 'roofing', name: 'Roofing', icon: HomeIcon },
  { id: 'electrical', name: 'Electrical', icon: Zap },
  { id: 'landscaping', name: 'Landscaping', icon: Leaf },
  { id: 'restoration', name: 'Restoration', icon: HardHat },
  { id: 'fencing', name: 'Fencing', icon: Grid2X2 },
  { id: 'garage-door', name: 'Garage Door', icon: DoorOpen },
  { id: 'foundation', name: 'Foundation Repair', icon: Building2 },
]

const VALUE_PROPS = [
  {
    label: 'Transparent Pricing',
    desc: 'No hidden fees, no surprise invoices. You always know exactly what you pay.',
  },
  {
    label: 'À La Carte Services',
    desc: 'Pay only for what you need. Start with one service and add more as you grow.',
  },
  {
    label: 'Built for Trades',
    desc: 'Solutions designed around how home service businesses actually operate.',
  },
]

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.28),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.16),transparent_66%)]" />

        <p className="island-kicker relative mb-4">
          HVAC · Roofing · Plumbing · Electrical · Landscaping · and more
        </p>

        <h1 className="display-title relative mb-6 max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-(--sea-ink) sm:text-6xl">
          Modern technology <br className="hidden sm:block" />
          for home services.
        </h1>

        <p className="relative mb-10 max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          Tempus Solutions modernizes small and mid-sized service businesses with the tools
          they actually need: websites, CRMs, automations, and analytics, built and
          managed for you, with transparent flat-rate pricing.
        </p>

        <div className="relative flex flex-wrap gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#b45309] px-6 py-3 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            View Services &amp; Pricing <ArrowRight size={15} />
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
          <p className="island-kicker mb-2">Services &amp; Pricing</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            Everything your business needs to modernize.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-(--sea-ink-soft)">
            Pick the services that solve your biggest problems today. Add more as you grow.
            No bundles, no lock-in.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="island-shell feature-card rise-in flex flex-col rounded-2xl p-5"
                style={{ animationDelay: `${i * 55 + 120}ms` }}
              >
                <div
                  className="mb-3 inline-flex w-fit items-center justify-center rounded-xl p-2"
                  style={{
                    background: service.accentBg,
                    border: `1px solid ${service.accentBorder}`,
                  }}
                >
                  <Icon size={16} style={{ color: service.accentColor }} />
                </div>

                <h3 className="mb-1 text-sm font-semibold text-(--sea-ink)">{service.name}</h3>
                <p className="mb-4 flex-1 text-xs leading-5 text-(--sea-ink-soft)">{service.desc}</p>

                <div className="flex items-center justify-between border-t border-(--line) pt-3">
                  <p className="text-xs font-bold text-(--sea-ink)">{service.price}</p>
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
          <p className="island-kicker mb-2">Industries We Serve</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) sm:text-4xl">
            We know your industry.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-(--sea-ink-soft)">
            Built around the realities of home service businesses, from scheduling pressure
            to lead management to seasonal swings.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon
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

        <p className="island-kicker relative mb-3">Ready to Modernize?</p>
        <h2 className="display-title relative mb-4 text-3xl font-bold text-(--sea-ink) sm:text-4xl">
          Let's talk about your business.
        </h2>
        <p className="relative mx-auto mb-8 max-w-md text-base text-(--sea-ink-soft)">
          Get a free consultation and find out which services fit your current needs and
          your future goals.
        </p>
        <a
          href="mailto:info@tempussolutions.io"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#b45309] px-8 py-3.5 text-sm font-bold text-white no-underline shadow-[0_10px_32px_rgba(180,83,9,0.38)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Book a Free Consultation <ArrowRight size={15} />
        </a>
      </section>
    </main>
  )
}
