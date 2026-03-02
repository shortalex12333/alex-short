'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-surface-base/80 backdrop-blur-md">
      <div className="max-w-content mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-medium text-text-primary hover:opacity-100"
        >
          Alex Short
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-label font-medium transition-colors ${
                pathname === link.href
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
