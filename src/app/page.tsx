import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Header - Minimal, institutional */}
        <section className="border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-8 py-16">
            <div className="text-caption text-text-tertiary tracking-wider uppercase mb-3">
              Professional Record
            </div>
            <h1 className="font-display text-4xl font-light text-text-primary mb-2">
              Alex Short
            </h1>
            <div className="text-body text-text-secondary">
              Yacht Insurance Risk Analyst
            </div>
          </div>
        </section>

        {/* Document Body */}
        <div className="max-w-4xl mx-auto px-8 py-12">

          {/* 1. Summary */}
          <section className="mb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">1.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Summary
              </h2>
            </div>
            <div className="pl-10">
              <p className="text-body text-text-body leading-relaxed">
                Independent analyst specialising in yacht insurance policy documentation.
                Former superyacht ETO with operational experience across engineering systems,
                refit management, and technical compliance. Analysis published at{' '}
                <Link
                  href="https://myyachtsinsurance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary underline underline-offset-2"
                >
                  myyachtsinsurance.com
                </Link>.
              </p>
            </div>
          </section>

          {/* 2. Scope of Work */}
          <section className="mb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">2.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Scope of Work
              </h2>
            </div>
            <div className="pl-10 space-y-6">
              <div>
                <h3 className="text-body font-medium text-text-primary mb-1">
                  2.1 Policy Architecture
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Navigational warranties. Lay-up provisions. Territorial limits.
                  Schedule structures. Deductible frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-body font-medium text-text-primary mb-1">
                  2.2 Underwriting Triggers
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Material change provisions. Warranty breach mechanics.
                  Disclosure requirements. Survey conditions. Crew qualifications.
                </p>
              </div>
              <div>
                <h3 className="text-body font-medium text-text-primary mb-1">
                  2.3 Exclusion Analysis
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Insured perils. Standard exclusions. Salvage provisions.
                  Total loss criteria. Hull-machinery-liability interactions.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Methodology */}
          <section className="mb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">3.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Methodology
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div className="flex gap-3">
                <span className="text-caption text-text-tertiary">3.1</span>
                <p className="text-body text-text-secondary">
                  Complete policy document review including schedules and endorsements.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-caption text-text-tertiary">3.2</span>
                <p className="text-body text-text-secondary">
                  Coverage mapping to specific policy sections with clause references.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-caption text-text-tertiary">3.3</span>
                <p className="text-body text-text-secondary">
                  Exclusion evaluation against Institute Clauses.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-caption text-text-tertiary">3.4</span>
                <p className="text-body text-text-secondary">
                  No interpretation without direct citation.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/methodology"
                  className="text-body text-text-secondary underline underline-offset-2 hover:text-text-primary"
                >
                  Full methodology documentation →
                </Link>
              </div>
            </div>
          </section>

          {/* 4. Background */}
          <section className="mb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">4.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Background
              </h2>
            </div>
            <div className="pl-10">
              <table className="w-full text-body">
                <tbody>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 pr-8 text-text-tertiary whitespace-nowrap align-top w-32">
                      2025–Present
                    </td>
                    <td className="py-3 text-text-primary font-medium align-top w-48">
                      Risk Analyst
                    </td>
                    <td className="py-3 text-text-secondary align-top">
                      Independent. Policy documentation and analysis.
                    </td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 pr-8 text-text-tertiary whitespace-nowrap align-top">
                      2023–2025
                    </td>
                    <td className="py-3 text-text-primary font-medium align-top">
                      Head of Department
                    </td>
                    <td className="py-3 text-text-secondary align-top">
                      ETO across 5 superyachts. Engineering systems, refit oversight, technical compliance.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-8 text-text-tertiary whitespace-nowrap align-top">
                      2020–2023
                    </td>
                    <td className="py-3 text-text-primary font-medium align-top">
                      Maritime Entry
                    </td>
                    <td className="py-3 text-text-secondary align-top">
                      ETO qualification. Transition to superyacht sector.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Limitations */}
          <section className="mb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">5.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Limitations
              </h2>
            </div>
            <div className="pl-10 space-y-3">
              <p className="text-body text-text-secondary leading-relaxed">
                Analysis only. No brokerage services. No legal advice.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                For policy placement, consult a licensed marine insurance broker.
                For coverage disputes, consult maritime legal counsel.
              </p>
            </div>
          </section>

          {/* 6. Contact */}
          <section className="mb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">6.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Contact
              </h2>
            </div>
            <div className="pl-10">
              <p className="text-body text-text-secondary">
                <Link
                  href="mailto:alex@alex-short.com"
                  className="text-text-primary underline underline-offset-2"
                >
                  alex@alex-short.com
                </Link>
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}
