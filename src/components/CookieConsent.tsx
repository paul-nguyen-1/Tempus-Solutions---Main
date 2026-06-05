import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

const CONSENT_KEY = 'siteCookieConsent'

const getConsent = () => {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

const setConsent = (value: '1' | '0') => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {}
}

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (consent === '1' || consent === '0') {
      setShow(false)
    } else {
      setShow(true)
    }

    const handleOpen = () => setShow(true)
    window.addEventListener('open-cookie-settings', handleOpen)

    return () => window.removeEventListener('open-cookie-settings', handleOpen)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white p-3 sm:p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
      <div className="page-wrap flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
        <div className="flex items-start gap-3 sm:gap-4 flex-1">
          <div className="flex-shrink-0 mt-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <text x="12" y="15" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">C</text>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="m-0 text-xs sm:text-sm leading-relaxed">
              We use cookies and similar technologies to improve your experience and analyze traffic. We do not share or use your personal information outside this site.{' '}
              <Link
                to="/privacy"
                className="text-[#4a9eff] hover:underline font-semibold"
              >
                Privacy policy
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => {
              setConsent('0')
              setShow(false)
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded border border-gray-400 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:border-gray-300 hover:bg-gray-800 transition"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={() => {
              setConsent('1')
              setShow(false)
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#1a1a1a] hover:bg-gray-100 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
