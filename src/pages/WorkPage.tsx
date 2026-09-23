import React, { ReactNode } from 'react';
import { Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Band, BandSplit, PageHead } from '../components/Band';
import { ReconciliationDiagram } from '../components/ReconciliationDiagram';

// One rung of the ladder: a mono label, then body. Used inside a case study so
// "The problem" never competes with the case study's own title.
function Note({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-8">
      <p className="label-mono pt-1">{label}</p>
      <div className="space-y-3 text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

function RepoLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-gray-400 transition-colors hover:text-white"
    >
      <Github size={14} /> {children}
    </a>
  );
}

export function WorkPage() {
  return (
    <>
      <Band className="pt-16">
        <AnimatedSection>
          <PageHead
            eyebrow="Selected work"
            title="Things I've built"
            lede="Three things I've built, and how I thought about them. Where the work was done for an employer, details stay at the level I can share publicly."
          />
        </AnimatedSection>
      </Band>

      {/* ---------------- 1 ---------------- */}
      <Band tone="raised">
        <AnimatedSection>
          <BandSplit
            eyebrow="Data operations · Summer 2026"
            heading="Automating a monthly premium reconciliation control"
          >
            <div className="bg-[#0b0b0b] p-4 md:p-6 mb-8">
              <ReconciliationDiagram />
            </div>

            <div className="divide-y divide-gray-800/80 border-t border-gray-800/80">
              <Note label="The problem">
                <p>
                  A monthly control balanced premium figures across a portfolio of
                  programs. It worked, but it was manual: each program took tens of
                  minutes, the work repeated every cycle, and because every run was done
                  by hand, two people could reasonably arrive at two different answers.
                </p>
              </Note>

              <Note label="The approach">
                <p>
                  I proposed and built a Python engine to do the balancing. The logic
                  lives in a rulebook &mdash; a knowledge base encoding how each program
                  reconciles &mdash; rather than being hard-coded, so a change in one
                  program&apos;s treatment is a data change, not a code change.
                </p>
                <p>
                  Correctness had to be provable, not asserted, so the engine was
                  validated against the existing manual totals until it matched to the
                  penny. That exercise is what surfaced the most interesting bug: values
                  in accounting format, where negatives appear in parentheses, were being
                  parsed as positive. Nothing errored. The totals were just quietly wrong.
                </p>
              </Note>

              <Note label="The outcome">
                <p>
                  Cycle time fell by over 70%, with per-program processing going from tens
                  of minutes to under two. I deployed it as a deterministic, script-backed
                  Claude Skill so results were repeatable and auditable rather than
                  regenerated each run, and wrote the adoption documentation the team uses.
                </p>
              </Note>

              <Note label="What I'd take from it">
                <p>
                  The parsing bug is the part I think about. A silent wrong answer is
                  worse than a crash, because nothing tells you to go looking. Validating
                  against a known-good total wasn&apos;t box-ticking &mdash; it was the
                  only reason the bug was ever found.
                </p>
              </Note>
            </div>
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- 2 ---------------- */}
      <Band>
        <AnimatedSection>
          <BandSplit
            eyebrow="Side project · In progress"
            heading="A multi-agent personal assistant, built from scratch"
          >
            <div className="divide-y divide-gray-800/80 border-t border-gray-800/80">
              <Note label="The idea">
                <p>
                  A supervisor agent takes a request, routes it to specialist sub-agents
                  &mdash; inbox, calendar, research, notes &mdash; delegates the work, and
                  assembles the result.
                </p>
              </Note>

              <Note label="The choice">
                <p>
                  I&apos;m writing the orchestration loop and tool-calling layer myself
                  before reaching for a framework. Frameworks are faster to start with and
                  harder to debug when routing goes wrong, and I&apos;d rather understand
                  the mechanism than inherit it. Porting to LangGraph is a later phase,
                  once the behaviour I want is pinned down.
                </p>
              </Note>

              <Note label="Status">
                <p>
                  Early &mdash; Python 3.12 with Pydantic for typed message contracts and
                  SQLite plus embeddings for memory. The repository is public and the
                  README tracks which phase it&apos;s in, so what you see there is where it
                  actually is.
                </p>
              </Note>
            </div>
            <RepoLink href="https://github.com/nafisahmed510/agent-system">
              nafisahmed510/agent-system
            </RepoLink>
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- 3 ---------------- */}
      <Band tone="raised">
        <AnimatedSection>
          <BandSplit eyebrow="Side project" heading="Digital marketing automation agent">
            <div className="divide-y divide-gray-800/80 border-t border-gray-800/80">
              <Note label="What it does">
                <p>
                  Automates social media triage and engagement analysis &mdash; the
                  repetitive read-and-sort work that comes before any actual decision.
                </p>
              </Note>

              <Note label="The interesting part">
                <p>
                  It began as a JavaScript codebase and I migrated it to Python for
                  modular integration into the Kortix platform. A migration is a good
                  forcing function: you cannot port what you do not understand, and the
                  boundaries between scheduling, API integration and analysis only became
                  clear once each had to be rebuilt as its own piece.
                </p>
              </Note>
            </div>
            <RepoLink href="https://github.com/nafisahmed510/digital-marketing-automation-agent">
              nafisahmed510/digital-marketing-automation-agent
            </RepoLink>
          </BandSplit>
        </AnimatedSection>
      </Band>
    </>
  );
}
