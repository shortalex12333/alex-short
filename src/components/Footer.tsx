import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between text-caption text-text-tertiary">
          <div>Alex Short</div>
          <div className="flex items-center gap-6">
            <Link
              href="/llms.txt"
              className="hover:text-text-secondary transition-colors"
            >
              llms.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
