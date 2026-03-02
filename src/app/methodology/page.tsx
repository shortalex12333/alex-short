import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Methodology',
  description: 'Policy review protocol and documentation standards for yacht insurance analysis.',
}

export default function Methodology() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Header */}
        <section className="border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-8 py-16">
            <div className="text-caption text-text-tertiary tracking-wider uppercase mb-3">
              Reference Document
            </div>
            <h1 className="font-display text-4xl font-light text-text-primary mb-2">
              Methodology
            </h1>
            <div className="text-body text-text-secondary">
              Policy Review Protocol and Documentation Standards
            </div>
          </div>
        </section>

        {/* Document Body */}
        <div className="max-w-4xl mx-auto px-8 py-12">

          {/* Table of Contents */}
          <section className="mb-12 pb-8 border-b border-border-subtle">
            <div className="text-caption text-text-tertiary uppercase tracking-wider mb-4">
              Contents
            </div>
            <div className="space-y-2 text-body">
              <div><Link href="#section-1" className="text-text-secondary hover:text-text-primary">1. Scope</Link></div>
              <div><Link href="#section-2" className="text-text-secondary hover:text-text-primary">2. Document Assembly</Link></div>
              <div><Link href="#section-3" className="text-text-secondary hover:text-text-primary">3. Coverage Mapping</Link></div>
              <div><Link href="#section-4" className="text-text-secondary hover:text-text-primary">4. Exclusion Analysis</Link></div>
              <div><Link href="#section-5" className="text-text-secondary hover:text-text-primary">5. Warranty Evaluation</Link></div>
              <div><Link href="#section-6" className="text-text-secondary hover:text-text-primary">6. Documentation Standards</Link></div>
              <div><Link href="#section-7" className="text-text-secondary hover:text-text-primary">7. Limitations</Link></div>
            </div>
          </section>

          {/* 1. Scope */}
          <section id="section-1" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">1.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Scope
              </h2>
            </div>
            <div className="pl-10">
              <p className="text-body text-text-secondary leading-relaxed mb-4">
                This methodology applies to analysis of yacht insurance policies including:
              </p>
              <ul className="text-body text-text-secondary space-y-1 list-none">
                <li>1.1 Hull and machinery coverage</li>
                <li>1.2 Protection and indemnity</li>
                <li>1.3 Crew liability</li>
                <li>1.4 Charter arrangements</li>
                <li>1.5 Loss of hire provisions</li>
              </ul>
            </div>
          </section>

          {/* 2. Document Assembly */}
          <section id="section-2" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">2.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Document Assembly
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div>
                <span className="text-caption text-text-tertiary">2.1</span>
                <span className="text-body text-text-secondary ml-3">
                  Collect base policy wording, all schedules, and endorsements.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">2.2</span>
                <span className="text-body text-text-secondary ml-3">
                  Identify incorporated Institute Clauses by reference number.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">2.3</span>
                <span className="text-body text-text-secondary ml-3">
                  Verify document completeness and execution status.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">2.4</span>
                <span className="text-body text-text-secondary ml-3">
                  Note any manuscript amendments or bespoke clauses.
                </span>
              </div>
            </div>
          </section>

          {/* 3. Coverage Mapping */}
          <section id="section-3" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">3.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Coverage Mapping
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div>
                <span className="text-caption text-text-tertiary">3.1</span>
                <span className="text-body text-text-secondary ml-3">
                  Isolate each coverage grant with specific clause references.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">3.2</span>
                <span className="text-body text-text-secondary ml-3">
                  Document trigger conditions for each coverage element.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">3.3</span>
                <span className="text-body text-text-secondary ml-3">
                  Record territorial limits, navigational warranties, and trading areas.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">3.4</span>
                <span className="text-body text-text-secondary ml-3">
                  Note deductibles, sublimits, and aggregate caps.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">3.5</span>
                <span className="text-body text-text-secondary ml-3">
                  Cross-reference to standard market forms where applicable.
                </span>
              </div>
            </div>
          </section>

          {/* 4. Exclusion Analysis */}
          <section id="section-4" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">4.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Exclusion Analysis
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div>
                <span className="text-caption text-text-tertiary">4.1</span>
                <span className="text-body text-text-secondary ml-3">
                  Catalogue all exclusion clauses by category.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">4.2</span>
                <span className="text-body text-text-secondary ml-3">
                  Assess exclusion scope and any exceptions to exclusions.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">4.3</span>
                <span className="text-body text-text-secondary ml-3">
                  Evaluate interaction between exclusions and warranty provisions.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">4.4</span>
                <span className="text-body text-text-secondary ml-3">
                  Compare to Institute Yacht Clauses baseline.
                </span>
              </div>
            </div>
          </section>

          {/* 5. Warranty Evaluation */}
          <section id="section-5" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">5.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Warranty Evaluation
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div>
                <span className="text-caption text-text-tertiary">5.1</span>
                <span className="text-body text-text-secondary ml-3">
                  Identify all express warranties.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">5.2</span>
                <span className="text-body text-text-secondary ml-3">
                  Determine warranty type: suspensive or promissory.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">5.3</span>
                <span className="text-body text-text-secondary ml-3">
                  Document breach consequences per Insurance Act 2015 s.10-11.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">5.4</span>
                <span className="text-body text-text-secondary ml-3">
                  Note coverage reinstatement requirements.
                </span>
              </div>
            </div>
          </section>

          {/* 6. Documentation Standards */}
          <section id="section-6" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">6.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Documentation Standards
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div>
                <span className="text-caption text-text-tertiary">6.1</span>
                <span className="text-body text-text-secondary ml-3">
                  Reference index citing specific policy provisions.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">6.2</span>
                <span className="text-body text-text-secondary ml-3">
                  Terminology per Lloyd&apos;s Market Association definitions.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">6.3</span>
                <span className="text-body text-text-secondary ml-3">
                  Classification society rules where vessel-specific (ABS, Lloyd&apos;s Register, DNV).
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">6.4</span>
                <span className="text-body text-text-secondary ml-3">
                  No interpretation without direct citation.
                </span>
              </div>
            </div>
          </section>

          {/* 7. Limitations */}
          <section id="section-7" className="mb-10">
            <div className="flex gap-4 mb-4">
              <span className="text-caption text-text-tertiary font-medium w-6">7.</span>
              <h2 className="text-label font-medium text-text-primary uppercase tracking-wider">
                Limitations
              </h2>
            </div>
            <div className="pl-10 space-y-4">
              <div>
                <span className="text-caption text-text-tertiary">7.1</span>
                <span className="text-body text-text-secondary ml-3">
                  Analysis limited to policy interpretation and documentation.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">7.2</span>
                <span className="text-body text-text-secondary ml-3">
                  No legal advice provided.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">7.3</span>
                <span className="text-body text-text-secondary ml-3">
                  For coverage application to specific claims, consult maritime legal counsel.
                </span>
              </div>
              <div>
                <span className="text-caption text-text-tertiary">7.4</span>
                <span className="text-body text-text-secondary ml-3">
                  Independent work. No affiliations with carriers, brokers, or syndicates.
                </span>
              </div>
            </div>
          </section>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border-subtle">
            <Link
              href="/"
              className="text-body text-text-secondary underline underline-offset-2 hover:text-text-primary"
            >
              ← Back to record
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
