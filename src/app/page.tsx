import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="min-h-[90vh] flex items-center relative">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--accent-blue) 1px, transparent 1px),
                linear-gradient(to bottom, var(--accent-blue) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />

          <div className="max-w-content mx-auto px-8 py-24 relative z-10">
            <h1 className="font-display text-display font-light text-text-primary mb-6">
              Alex Short
            </h1>
            <h2 className="text-heading font-display font-normal text-text-secondary mb-8">
              Yacht Insurance Risk Analyst
            </h2>
            <p className="text-body text-text-body max-w-2xl mb-10 leading-relaxed">
              Structured analysis of yacht insurance policy architecture, underwriting triggers,
              and exclusion mechanics. Former superyacht ETO bringing operational perspective
              to marine insurance risk documentation.
            </p>
            <Link
              href="https://myyachtsinsurance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue text-label font-medium group"
            >
              <span className="group-hover:underline">View Research at MYI</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="border-t border-border-subtle">
          <div className="max-w-content mx-auto px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-t-2 border-accent-blue pt-8">
                <h3 className="font-display text-subhead font-medium text-text-primary mb-4">
                  Policy Architecture
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Analysis of navigational warranties, lay-up provisions, and territorial limits.
                  Examination of schedule structures, deductible frameworks, and premium calculation methodologies.
                </p>
              </div>

              <div className="border-t-2 border-accent-blue pt-8">
                <h3 className="font-display text-subhead font-medium text-text-primary mb-4">
                  Underwriting Triggers
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Assessment of material change provisions, warranty breach implications, and disclosure requirements.
                  Review of survey conditions, crew qualifications, and operational parameter effects.
                </p>
              </div>

              <div className="border-t-2 border-accent-blue pt-8">
                <h3 className="font-display text-subhead font-medium text-text-primary mb-4">
                  Exclusion Mechanics
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  Evaluation of insured perils, standard exclusions, and documentation requirements.
                  Study of salvage provisions, total loss criteria, and hull-machinery-liability interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Preview */}
        <section className="border-t border-border-subtle">
          <div className="max-w-content mx-auto px-8 py-24">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-display text-heading font-normal text-text-primary">
                  Analytical Framework
                </h2>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="space-y-6">
                  <div className="pb-6 border-b border-border-subtle">
                    <p className="text-body text-text-body leading-relaxed">
                      All analysis begins with complete policy document review, including schedules,
                      endorsements, and incorporated clauses. Each coverage element is mapped to
                      specific policy sections with direct clause references.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-border-subtle">
                    <p className="text-body text-text-body leading-relaxed">
                      Trigger conditions are isolated and documented with supporting policy language.
                      Exclusion clauses are evaluated against standard Institute Clauses and relevant case precedent.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-border-subtle">
                    <p className="text-body text-text-body leading-relaxed">
                      No interpretation is offered without direct citation. Where ambiguity exists,
                      contra proferentem principles are noted with alternative readings documented.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/methodology"
                      className="inline-flex items-center gap-2 text-accent-blue text-label font-medium group"
                    >
                      <span className="group-hover:underline">Full Methodology</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="border-t border-border-subtle">
          <div className="max-w-content mx-auto px-8 py-24">
            <h2 className="font-display text-heading font-normal text-text-primary mb-16">
              Background
            </h2>

            <div className="space-y-12">
              <div className="flex gap-8 border-l-2 border-accent-blue pl-8">
                <div className="flex-shrink-0 w-32 text-caption text-text-secondary font-medium">
                  2025–Present
                </div>
                <div className="flex-1">
                  <div className="text-subhead font-medium text-text-primary mb-2">
                    Independent Risk Analyst
                  </div>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Yacht insurance policy analysis and risk documentation. Analytical contributor
                    to MyYachtsInsurance.com. Shore-side transition from operational superyacht career.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 border-l-2 border-border-subtle pl-8">
                <div className="flex-shrink-0 w-32 text-caption text-text-secondary font-medium">
                  2023–2025
                </div>
                <div className="flex-1">
                  <div className="text-subhead font-medium text-text-primary mb-2">
                    Head of Department — Superyachts
                  </div>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Qualified ETO serving as Head of Department across 5 superyachts, including
                    some of the world&apos;s most prestigious vessels. Engineering systems management,
                    refit oversight, and technical compliance.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 border-l-2 border-border-subtle pl-8">
                <div className="flex-shrink-0 w-32 text-caption text-text-secondary font-medium">
                  2020–2023
                </div>
                <div className="flex-1">
                  <div className="text-subhead font-medium text-text-primary mb-2">
                    Maritime Industry Entry
                  </div>
                  <p className="text-body text-text-secondary leading-relaxed">
                    Entered maritime industry. Progressive qualifications leading to ETO certification
                    and transition to superyacht sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Link */}
        <section className="border-t border-border-subtle">
          <div className="max-w-content mx-auto px-8 py-24">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-heading font-normal text-text-primary mb-4">
                  Published Analysis
                </h2>
                <p className="text-body text-text-secondary max-w-xl">
                  Technical assessments of yacht insurance policy structures and coverage mechanics
                  are published at MyYachtsInsurance.com.
                </p>
              </div>
              <Link
                href="https://myyachtsinsurance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface-primary border border-border-default rounded-lg text-label font-medium text-text-primary hover:bg-surface-hover transition-colors"
              >
                <span>View Research</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
