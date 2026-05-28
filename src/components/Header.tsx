import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import { getConsultationMailto } from '../utils/mailto'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <div className="shrink-0">
          <Link
            to="/"
            className="inline-flex items-center no-underline transition hover:-translate-y-0.5"
          >
            <Logo height={64} />
          </Link>
        </div>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-1 pb-1 text-sm font-semibold sm:order-0 sm:w-auto sm:flex-nowrap sm:pb-0">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Services
          </Link>
          <Link
            to="/industries"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Industries
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            About
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={getConsultationMailto()}
            className="hidden items-center rounded-full border border-[rgba(180,83,9,0.3)] bg-[rgba(245,158,11,0.1)] px-4 py-1.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(245,158,11,0.18)] sm:inline-flex"
          >
            Get in Touch
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
