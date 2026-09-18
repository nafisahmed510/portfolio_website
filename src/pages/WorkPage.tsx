import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ReconciliationDiagram } from '../components/ReconciliationDiagram';

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h4 className="label-mono mb-2">{label}</h4>
      <div className="text-gray-300 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Case({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedSection>
      <motion.article
        className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-10 mb-12"
      >
        {children}
      </motion.article>
    </AnimatedSection>
  );
}

export function WorkPage() {
  return (
    <div className="pt-32 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <p className="label-mono mb-3">Selected work</p>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Things I&apos;ve built
          </motion.h1>
          <p className="text-gray-400 mb-16 max-w-2xl text-lg">
            Three things I&apos;ve built, and how I thought about them. Where the work was
            done for an employer, details stay at the level I can share publicly.
          </p>
        </AnimatedSection>

        {/* ---------- 1. Reconciliation engine ---------- */}
        <Case>
          <p className="label-mono mb-3">DATA OPERATIONS &bull; SUMMER 2026</p>
          <h2 className="text-2xl font-bold text-white mb-6">
            Automating a monthly premium reconciliation control
          </h2>

          <div className="bg-black/40 border border-gray-800 rounded-lg p-4 md:p-6 mb-8">
            <ReconciliationDiagram />
          </div>

          <Block label="THE PROBLEM">
            <p>
              A monthly control balanced premium figures across a portfolio of programs.
              It worked, but it was manual: each program took tens of minutes, the work
              repeated every cycle, and because every run was done by hand, two people
              could reasonably arrive at two different answers.
            </p>
          </Block>

          <Block label="THE APPROACH">
            <p>
              I proposed and built a Python engine to do the balancing. The logic itself
              lives in a rulebook &mdash; a knowledge base encoding how each program
              reconciles &mdash; rather than being hard-coded, so a change in one
              program&apos;s treatment is a data change, not a code change.
            </p>
            <p>
              Correctness had to be provable, not asserted, so the engine was validated
              against the existing manual totals until it matched to the penny. That
              exercise is what surfaced the most interesting bug: values in accounting
              format, where negatives appear in parentheses, were being parsed as
              positive. Nothing errored. The totals were just quietly wrong.
            </p>
          </Block>

          <Block label="THE OUTCOME">
            <p>
              Cycle time fell by over 70%, with per-program processing going from tens of
              minutes to under two. I deployed it as a deterministic, script-backed Claude
              Skill so results were repeatable and auditable rather than regenerated each
              run, and wrote the adoption documentation the team uses.
            </p>
          </Block>

          <Block label="WHAT I&rsquo;D TAKE FROM IT">
            <p>
              The parsing bug is the part I think about. A silent wrong answer is worse
              than a crash, because nothing tells you to go looking. Validating against a
              known-good total wasn&apos;t box-ticking &mdash; it was the only reason the
              bug was ever found.
            </p>
          </Block>
        </Case>

        {/* ---------- 2. Agent system ---------- */}
        <Case>
          <p className="label-mono mb-3">SIDE PROJECT &bull; IN PROGRESS</p>
          <h2 className="text-2xl font-bold text-white mb-6">
            A multi-agent personal assistant, built from scratch
          </h2>

          <Block label="THE IDEA">
            <p>
              A supervisor agent takes a request, routes it to specialist sub-agents
              &mdash; inbox, calendar, research, notes &mdash; delegates the work, and
              assembles the result.
            </p>
          </Block>

          <Block label="THE DELIBERATE CHOICE">
            <p>
              I&apos;m writing the orchestration loop and tool-calling layer myself before
              reaching for a framework. Frameworks are faster to start with and harder to
              debug when routing goes wrong, and I&apos;d rather understand the mechanism
              than inherit it. Porting to LangGraph is a later phase, once the behaviour I
              want is pinned down.
            </p>
          </Block>

          <Block label="STATUS">
            <p>
              Early &mdash; Python 3.12 with Pydantic for typed message contracts and
              SQLite plus embeddings for memory. The repository is public and the README
              tracks which phase it&apos;s in, so what you see there is where it actually
              is.
            </p>
          </Block>

          <a
            href="https://github.com/nafisahmed510/agent-system"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-silver hover:text-white transition-colors"
          >
            <Github size={18} /> nafisahmed510/agent-system
          </a>
        </Case>

        {/* ---------- 3. Marketing automation agent ---------- */}
        <Case>
          <p className="label-mono mb-3">SIDE PROJECT</p>
          <h2 className="text-2xl font-bold text-white mb-6">
            Digital marketing automation agent
          </h2>

          <Block label="WHAT IT DOES">
            <p>
              Automates social media triage and engagement analysis &mdash; the repetitive
              read-and-sort work that comes before any actual decision.
            </p>
          </Block>

          <Block label="THE INTERESTING PART">
            <p>
              It began as a JavaScript codebase and I migrated it to Python for modular
              integration into the Kortix platform. A migration is a good forcing function:
              you cannot port what you do not understand, and the boundaries between
              scheduling, API integration and analysis only became clear once each had to
              be rebuilt as its own piece.
            </p>
          </Block>

          <a
            href="https://github.com/nafisahmed510/digital-marketing-automation-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-silver hover:text-white transition-colors"
          >
            <Github size={18} /> nafisahmed510/digital-marketing-automation-agent
          </a>
        </Case>
      </div>
    </div>
  );
}
