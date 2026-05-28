import { createFileRoute } from '@tanstack/react-router'
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
} from 'lucide-react'

export const Route = createFileRoute('/services')({ component: ServicesPage })

interface Service {
  id: string
  name: string
  description: string
  price: string
  icon: React.ElementType
  accentBg: string
  accentBorder: string
  accentColor: string
}

const SERVICES: Service[] = [
  {
    id: 'website',
    name: 'Website Creation',
    description:
      'Custom business website with mobile optimization, lead capture forms, and contact integration.',
    price: '$1,500 – $2,000',
    icon: Globe,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'email',
    name: 'Business Email',
    description:
      'Microsoft 365 or Google Workspace setup with domain email configuration.',
    price: '$250 – $500',
    icon: Mail,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'crm',
    name: 'CRM Setup',
    description:
      'CRM implementation, customer pipeline setup, lead tracking organization, and workflow onboarding.',
    price: '$1,000 – $2,000',
    icon: Users,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'scheduling',
    name: 'Scheduling Implementation',
    description:
      'Scheduling software setup, calendar syncing, automated reminders, dispatch workflow setup, and booking optimization.',
    price: '$1,000 – $2,000',
    icon: Calendar,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'analytics',
    name: 'Dashboard Analytics',
    description:
      'Custom business dashboards for leads, sales, jobs, reviews, and operational KPIs.',
    price: '$1,000 – $2,000',
    icon: BarChart2,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'lead-capture',
    name: 'Lead Capture Automation',
    description:
      'Automated web forms, missed call text back setup, customer intake workflows, and notification systems.',
    price: '$1,000 – $2,000',
    icon: Target,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'followup',
    name: 'Follow Up Automation',
    description:
      'Automated follow ups, estimate reminders, customer communication workflows, and operational automations.',
    price: '$1,000 – $2,000',
    icon: RefreshCw,
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(180,83,9,0.22)',
    accentColor: 'var(--lagoon-deep)',
  },
  {
    id: 'reviews',
    name: 'Review Management',
    description:
      'Automated Google review requests and customer follow-up workflows to build your online reputation.',
    price: '$1,000 – $2,000',
    icon: Star,
    accentBg: 'rgba(180,83,9,0.08)',
    accentBorder: 'rgba(180,83,9,0.18)',
    accentColor: 'var(--palm)',
  },
  {
    id: 'support',
    name: 'Subscription Support',
    description:
      'Ongoing support, workflow adjustments, troubleshooting, software management, and optimization.',
    price: '$99 – $500 / mo',
    icon: Headphones,
    accentBg: 'rgba(28,25,23,0.08)',
    accentBorder: 'rgba(28,25,23,0.18)',
    accentColor: 'var(--sea-ink)',
  },
]

const BASE_INCLUSIONS = [
  'Free initial consultation',
  'Full onboarding & setup support',
  'Dedicated point of contact',
  'Clear project timeline',
  'No long-term contracts required',
  'Transparent, flat-rate pricing',
]

function ServicesPage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-12">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-18">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.22),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.14),transparent_66%)]" />

        <p className="island-kicker relative mb-4">Services &amp; Pricing</p>
        <h1 className="display-title relative mb-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          Pick exactly what your business needs.
        </h1>
        <p className="relative max-w-2xl text-base leading-7 text-(--sea-ink-soft) sm:text-lg">
          No bundles. No bloated packages. Choose the services that solve your actual
          problems and add more when you're ready. Everything comes with flat-rate
          pricing and no surprises.
        </p>
      </section>

      <section className="mt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="island-shell rise-in flex flex-col rounded-2xl p-6"
                style={{ animationDelay: `${i * 60 + 100}ms` }}
              >
                <div
                  className="mb-4 inline-flex w-fit rounded-xl p-2.5"
                  style={{
                    background: service.accentBg,
                    border: `1px solid ${service.accentBorder}`,
                  }}
                >
                  <Icon size={20} style={{ color: service.accentColor }} />
                </div>

                <h2 className="mb-2 text-base font-semibold text-(--sea-ink)">
                  {service.name}
                </h2>
                <p className="mb-5 flex-1 text-sm leading-6 text-(--sea-ink-soft)">
                  {service.description}
                </p>

                <div className="flex items-center justify-between border-t border-(--line) pt-4">
                  <div>
                    <p className="island-kicker mb-0.5 text-[10px]">Starting at</p>
                    <p className="text-sm font-bold text-(--sea-ink)">{service.price}</p>
                  </div>
                  <a
                    href="mailto:info@tempussolutions.io"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(180,83,9,0.28)] bg-[rgba(245,158,11,0.1)] px-4 py-2 text-xs font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(245,158,11,0.16)]"
                  >
                    Get Started <ArrowRight size={12} />
                  </a>
                </div>
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
              Every project starts on the right foot.
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
          Book a free 30-minute consultation and we'll map out the right services for
          where your business is right now.
        </p>
        <a
          href="mailto:info@tempussolutions.io"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#b45309] px-8 py-3 text-sm font-bold text-white no-underline shadow-[0_10px_28px_rgba(180,83,9,0.35)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Book Free Consultation <ArrowRight size={15} />
        </a>
      </section>
    </main>
  )
}
