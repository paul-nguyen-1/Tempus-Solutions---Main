import { Link } from '@tanstack/react-router'
import Logo from './Logo'
import { getConsultationMailto } from '../utils/mailto'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-24 px-4 pb-14 pt-10">
      <div className="page-wrap">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="mb-3">
              <Logo height={68} />
            </div>
            <p className="m-0 text-sm leading-6 text-(--sea-ink-soft)">
              Business technology modernization for small and mid-sized
              businesses with transparent pricing, flexible plans, scalable
              solutions.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <nav aria-label="Company links">
              <p className="island-kicker mb-3 mt-0">Company</p>
              <ul className="m-0 list-none space-y-2 p-0">
                <li>
                  <Link
                    to="/"
                    className="text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Solutions links">
              <p className="island-kicker mb-3 mt-0">Solutions</p>
              <ul className="m-0 list-none space-y-2 p-0">
                <li>
                  <Link
                    to="/services"
                    className="text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)"
                  >
                    Services &amp; Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-(--sea-ink-soft) no-underline transition hover:text-(--sea-ink)"
                  >
                    Industries
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-(--line) pt-6 text-sm text-(--sea-ink-soft) sm:flex-row sm:items-center">
          <p className="m-0">
            &copy; {year} Tempus Solutions. All rights reserved.
          </p>
          <a
            href={getConsultationMailto()}
            className="text-(--lagoon-deep) no-underline hover:underline"
          >
            info@tempussolutions.io
          </a>
        </div>
      </div>
    </footer>
  )
}
