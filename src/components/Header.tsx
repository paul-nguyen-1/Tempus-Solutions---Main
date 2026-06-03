import { Link } from '@tanstack/react-router'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center gap-x-6 py-2 sm:py-2.5">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center no-underline transition hover:-translate-y-0.5"
        >
          <Logo height={68} />
        </Link>

        <div className="flex items-center gap-x-5 text-sm font-semibold">
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

        <div className="ml-auto">
          <Link
            to="/contact"
            search={{ service: '' }}
            className="inline-flex items-center rounded-full border border-[rgba(46,125,50,0.3)] bg-[rgba(46,125,50,0.1)] px-4 py-1.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(46,125,50,0.18)]"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  )
}
