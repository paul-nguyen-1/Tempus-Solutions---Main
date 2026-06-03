import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { sendContactEmail } from '#/utils/sendContactEmail'

const EMAIL = 'info@tempussolutions.io'

const SERVICES = [
  'Website Creation',
  'Business Email',
  'CRM Setup',
  'Scheduling Implementation',
  'Dashboard Analytics',
  'Lead Capture Automation',
  'Follow Up Automation',
  'Review Management',
  'Subscription Support',
]

const INDUSTRIES = [
  'HVAC',
  'Roofing',
  'Electrical',
  'Plumbing',
  'Landscaping',
  'Restoration',
  'Fencing',
  'Garage Door',
  'Foundation Repair',
  'Other',
]

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === 'string' ? search.service : '',
  }),
})

const field =
  'w-full rounded-lg border border-(--line) bg-white px-3.5 py-2.5 text-sm text-(--sea-ink) placeholder:text-[rgba(120,113,108,0.45)] transition focus:border-[#2e7d32] focus:outline-none focus:ring-2 focus:ring-[rgba(46,125,50,0.15)]'

function ContactPage() {
  const { service: preselected } = Route.useSearch()
  const isQuote = Boolean(preselected)

  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [industry, setIndustry] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselected ? [preselected] : [],
  )
  const [challenge, setChallenge] = useState('')
  const [goals, setGoals] = useState('')
  const [contactPref, setContactPref] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const toggle = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      await sendContactEmail({
        data: {
          name,
          businessName,
          email,
          phone,
          industry,
          selectedServices,
          challenge,
          goals,
          contactPref,
          isQuote,
          preselected,
        },
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="page-wrap px-4 pb-4">
      <section className="rise-in border-b-2 border-(--line) pb-8 pt-8 sm:pt-12">
        <p className="island-kicker mb-2">
          {isQuote ? 'Get a Quote' : 'Contact Us'}
        </p>
        <h1 className="display-title mb-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-(--sea-ink) sm:text-5xl">
          {isQuote
            ? `Get a quote for ${preselected}.`
            : "Let's talk about your business."}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-(--sea-ink-soft)">
          {isQuote
            ? "Fill out the form below and we'll follow up with details and next steps within one business day."
            : "Fill out the form below and we'll reach out within one business day to schedule your free consultation."}
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={handleSubmit}
          className="island-shell rounded-2xl p-6 sm:p-8"
        >
          <fieldset className="mb-8 border-0 p-0">
            <legend className="island-kicker mb-5">Your Information</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Name <span className="text-red-500">*</span>
                </span>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Business Name <span className="text-red-500">*</span>
                </span>
                <input
                  required
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Acme HVAC LLC"
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@acmehvac.com"
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Phone Number
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-1.5 sm:col-span-2">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Industry / Trade
                </span>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className={field}
                >
                  <option value="">Select your trade…</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="mb-8 border-0 p-0">
            <legend className="island-kicker mb-4">
              Services You're Interested In
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <label
                  key={s}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-(--line) px-3.5 py-2.5 text-sm text-(--sea-ink) transition hover:border-[rgba(46,125,50,0.4)] has-[:checked]:border-[#2e7d32] has-[:checked]:bg-[rgba(46,125,50,0.06)]"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(s)}
                    onChange={() => toggle(s)}
                    className="shrink-0 accent-[#2e7d32]"
                  />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mb-8 border-0 p-0">
            <legend className="island-kicker mb-4">Tell Us More</legend>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  What's your biggest challenge right now?
                </span>
                <textarea
                  rows={3}
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  placeholder="e.g. We're losing leads because we don't have a way to follow up automatically…"
                  className={`${field} resize-none leading-6`}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Any specific goals or questions?
                </span>
                <textarea
                  rows={3}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="e.g. We want automated review requests and a professional website by Q2…"
                  className={`${field} resize-none leading-6`}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-(--sea-ink)">
                  Preferred way to be contacted
                </span>
                <select
                  value={contactPref}
                  onChange={(e) => setContactPref(e.target.value)}
                  className={field}
                >
                  <option value="">Select…</option>
                  <option value="Email">Email</option>
                  <option value="Phone call">Phone call</option>
                  <option value="Text message">Text message</option>
                </select>
              </label>
            </div>
          </fieldset>

          {error && (
            <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {submitted ? (
            <div className="flex items-center gap-3 rounded-xl border border-[rgba(46,125,50,0.3)] bg-[rgba(46,125,50,0.06)] px-5 py-4 text-sm font-semibold text-[#2e7d32]">
              <CheckCircle size={18} />
              Message sent! We'll be in touch within one business day.
            </div>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-[#2e7d32] px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {submitting
                ? 'Sending…'
                : isQuote
                  ? 'Request Quote'
                  : 'Send Message'}{' '}
              {!submitting && <ArrowRight size={15} />}
            </button>
          )}
        </form>

        <aside className="flex flex-col gap-4">
          <div className="island-shell rounded-2xl p-6">
            <p className="island-kicker mb-4">What to expect</p>
            <ol className="space-y-4 text-sm leading-6 text-(--sea-ink-soft)">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-xs font-bold text-(--lagoon-deep)">
                  01
                </span>
                We review your submission within one business day
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-xs font-bold text-(--lagoon-deep)">
                  02
                </span>
                A team member reaches out to discuss your situation
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-xs font-bold text-(--lagoon-deep)">
                  03
                </span>
                We put together a tailored plan with transparent pricing
              </li>
            </ol>
          </div>

          <div className="island-shell rounded-2xl p-6">
            <p className="island-kicker mb-2">Prefer to email directly?</p>
            <a
              href={`mailto:${EMAIL}`}
              className="break-all text-sm font-semibold text-(--lagoon-deep) no-underline hover:underline"
            >
              {EMAIL}
            </a>
          </div>

          {!isQuote && (
            <div className="island-shell rounded-2xl p-6">
              <p className="island-kicker mb-2">
                Looking for a specific service?
              </p>
              <p className="mb-3 text-sm leading-6 text-(--sea-ink-soft)">
                Browse our services and request a quote directly from any plan.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--lagoon-deep) no-underline hover:underline"
              >
                View Services <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </aside>
      </div>
    </main>
  )
}
