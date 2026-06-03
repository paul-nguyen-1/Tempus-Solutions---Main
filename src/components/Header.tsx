import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { to: '/' as const, label: 'Home', exact: true },
  { to: '/services' as const, label: 'Services' },
  { to: '/industries' as const, label: 'Industries' },
  { to: '/about' as const, label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center gap-x-6 py-2 sm:py-2.5">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center no-underline transition hover:-translate-y-0.5"
          onClick={() => setOpen(false)}
        >
          <Logo height={68} />
        </Link>

        <div className="hidden items-center gap-x-5 text-sm font-semibold lg:flex">
          {NAV_LINKS.map(({ to, label, exact }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
              activeOptions={exact ? { exact: true } : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Link
            to="/contact"
            search={{ service: '' }}
            className="hidden items-center rounded-full border border-[rgba(46,125,50,0.3)] bg-[rgba(46,125,50,0.1)] px-4 py-1.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(46,125,50,0.18)] lg:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-(--sea-ink-soft) transition hover:bg-[rgba(46,125,50,0.08)] hover:text-(--sea-ink) lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-(--line) pb-4 lg:hidden">
          <div className="page-wrap flex flex-col gap-1 pt-3">
            {NAV_LINKS.map(({ to, label, exact }) => (
              <Link
                key={to}
                to={to}
                className="nav-link rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-[rgba(46,125,50,0.06)]"
                activeProps={{
                  className:
                    'nav-link is-active rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-[rgba(46,125,50,0.06)]',
                }}
                activeOptions={exact ? { exact: true } : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              search={{ service: '' }}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[rgba(46,125,50,0.3)] bg-[rgba(46,125,50,0.1)] px-4 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:bg-[rgba(46,125,50,0.18)]"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
