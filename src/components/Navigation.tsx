'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-surface-base/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-label font-medium text-text-primary"
        >
          Alex Short
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-caption transition-colors ${
              pathname === '/'
                ? 'text-text-primary'
                : 'text-text-tertiary hover:text-text-secondary'
            }`}
          >
            Record
          </Link>
          <Link
            href="/methodology"
            className={`text-caption transition-colors ${
              pathname === '/methodology'
                ? 'text-text-primary'
                : 'text-text-tertiary hover:text-text-secondary'
            }`}
          >
            Methodology
          </Link>
        </div>
      </div>
    </nav>
  )
}
