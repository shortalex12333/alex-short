import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Methodology',
  description: 'Structured protocols for yacht insurance policy analysis and risk documentation. Analytical framework, policy review process, and documentation standards.',
}

export default function Methodology() {
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
            Methodology
          </h1>
          <p className="text-subhead text-text-secondary max-w-2xl mb-20">
            Structured protocols for yacht insurance policy analysis and risk documentation.
          </p>

          <div className="space-y-20">
            {/* Section 1 */}
            <div className="border-t-2 border-accent-blue pt-12">
              <h2 className="font-display text-heading font-normal text-text-primary mb-8">
                Analytical Framework
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-body text-text-body leading-relaxed">
                  All policy analysis begins with complete document review, including schedules,
                  endorsements, and incorporated clauses. Each coverage element is mapped to
                  specific policy sections with clause and page references. Interpretations
                  reference established case law, standard market wordings (Institute Clauses),
                  and regulatory guidance where applicable.
                </p>
                <p className="text-body text-text-body leading-relaxed">
                  No opinion is offered on coverage without direct citation to policy language.
                  Where ambiguity exists, contra proferentem principles are noted, and alternative
                  interpretations are documented with supporting precedent.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="border-t border-border-subtle pt-12">
              <h2 className="font-display text-heading font-normal text-text-primary mb-8">
                Policy Review Protocol
              </h2>
              <div className="space-y-8 max-w-3xl">
                <div className="pb-6 border-b border-border-subtle">
                  <h3 className="text-subhead font-medium text-text-primary mb-3">
                    Document Assembly
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Collection of base policy wording, all schedules, endorsements, and incorporated
                    Institute Clauses. Verification that all referenced documents are complete
                    and properly executed.
                  </p>
                </div>

                <div className="pb-6 border-b border-border-subtle">
                  <h3 className="text-subhead font-medium text-text-primary mb-3">
                    Coverage Mapping
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Isolation of each coverage grant with specific clause references. Documentation
                    of trigger conditions, territorial limits, deductibles, and sublimits.
                    Cross-reference to standard market forms.
                  </p>
                </div>

                <div className="pb-6 border-b border-border-subtle">
                  <h3 className="text-subhead font-medium text-text-primary mb-3">
                    Exclusion Analysis
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Systematic review of all exclusion clauses. Assessment of exclusion scope,
                    exceptions to exclusions, and interaction with warranty provisions.
                    Citation to relevant case law interpreting similar language.
                  </p>
                </div>

                <div>
                  <h3 className="text-subhead font-medium text-text-primary mb-3">
                    Warranty Evaluation
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Identification of all warranty conditions. Determination of whether warranties
                    are suspensive or promissory. Documentation of breach consequences and
                    coverage reinstatement requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="border-t border-border-subtle pt-12">
              <h2 className="font-display text-heading font-normal text-text-primary mb-8">
                Documentation Standards
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-body text-text-body leading-relaxed">
                  Each analysis document includes a reference index citing specific policy provisions,
                  relevant case decisions, and applicable Institute Clauses. Technical terminology
                  follows Lloyd&apos;s Market Association definitions and International Union of Marine
                  Insurance conventions.
                </p>
                <p className="text-body text-text-body leading-relaxed">
                  Vessel-specific considerations reference classification society rules (ABS, Lloyd&apos;s
                  Register, DNV) and flag state regulatory requirements. All recommendations are
                  accompanied by direct source citations and, where applicable, relevant sections
                  of the Marine Insurance Act 1906 or applicable jurisdiction&apos;s marine insurance legislation.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="border-t border-border-subtle pt-12">
              <h2 className="font-display text-heading font-normal text-text-primary mb-8">
                Scope Limitations
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-body text-text-body leading-relaxed">
                  Analysis is limited to policy interpretation and risk documentation. No legal
                  advice is provided. For questions of coverage application to specific claims
                  or disputes, consultation with maritime legal counsel is recommended.
                </p>
                <p className="text-body text-text-body leading-relaxed">
                  All work is conducted independently. No affiliations exist with insurance carriers,
                  brokers, or underwriting syndicates. Assessments are based solely on policy
                  documentation and established marine insurance principles. No commissions or
                  referral fees are accepted from any insurance market participants.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
