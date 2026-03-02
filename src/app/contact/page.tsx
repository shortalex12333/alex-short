import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Professional inquiry contact for yacht insurance risk analysis and policy documentation services.',
}

export default function Contact() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="max-w-content mx-auto px-8 pt-12 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-blue text-label font-medium mb-12 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </section>

        {/* Content */}
        <section className="max-w-content mx-auto px-8 pb-24">
          <h1 className="font-display text-title font-light text-text-primary mb-6">
            Contact
          </h1>
          <p className="text-subhead text-text-secondary max-w-2xl mb-16">
            Professional inquiries regarding yacht insurance risk analysis and policy documentation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Email */}
            <div className="border-t-2 border-accent-blue pt-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-text-secondary" />
                <h2 className="text-subhead font-medium text-text-primary">
                  Email
                </h2>
              </div>
              <p className="text-body text-text-secondary mb-6">
                For professional inquiries, policy analysis requests, or research collaboration.
              </p>
              <a
                href="mailto:alex@alex-short.com"
                className="text-accent-blue text-body font-medium hover:underline"
              >
                alex@alex-short.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="border-t border-border-subtle pt-8">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-5 h-5 text-text-secondary" />
                <h2 className="text-subhead font-medium text-text-primary">
                  LinkedIn
                </h2>
              </div>
              <p className="text-body text-text-secondary mb-6">
                Connect for professional networking and industry discussions.
              </p>
              <a
                href="https://linkedin.com/in/alexshort"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue text-body font-medium hover:underline"
              >
                linkedin.com/in/alexshort
              </a>
            </div>
          </div>

          {/* Note */}
          <div className="mt-20 p-8 bg-surface-primary rounded-lg border border-border-subtle">
            <h3 className="text-subhead font-medium text-text-primary mb-4">
              Note on Services
            </h3>
            <p className="text-body text-text-secondary leading-relaxed">
              Analysis services focus on policy interpretation and risk documentation.
              No brokerage services are offered. For insurance placement, policy purchase,
              or claims handling, please consult a licensed marine insurance broker.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
