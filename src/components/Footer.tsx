import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-content mx-auto px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="text-caption text-text-tertiary">
            2026 Alex Short
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://myyachtsinsurance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-text-secondary hover:text-text-primary transition-colors"
            >
              Research at MYI
            </Link>
            <Link
              href="/llms.txt"
              className="text-caption text-text-tertiary hover:text-text-secondary transition-colors"
            >
              llms.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
