import React, { ReactNode } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Band, BandSplit, PageHead } from '../components/Band';

// A single role. Title and employer carry the weight, dates sit quietly in
// mono on the right, bullets are plainly body text — so the eye can tell them
// apart without reading a word.
function Role({
  title,
  org,
  dates,
  primary = false,
  children,
}: {
  title: string;
  org: string;
  dates: string;
  primary?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`border-l-2 pl-5 ${primary ? 'border-gray-600' : 'border-gray-800'}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-base font-semibold text-white">
          {title} <span className="font-normal text-gray-500">&nbsp;|&nbsp;</span>{' '}
          <span className="font-normal text-gray-300">{org}</span>
        </h3>
        <p className="font-mono text-xs text-gray-400">{dates}</p>
      </div>
      <ul className="mt-3 list-disc list-outside ml-5 space-y-2 text-gray-400 leading-relaxed">
        {children}
      </ul>
    </div>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-8">
      <p className="label-mono pt-1">{label}</p>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}

export function AboutPage() {
  return (
    <>
      <Band className="pt-16">
        <AnimatedSection>
          <PageHead
            eyebrow="About"
            title="About me"
            lede="Dhaka to Queens, by way of a computer science degree and an unexpected interest in insurance data."
          />
        </AnimatedSection>
      </Band>

      {/* ---------------- story ---------------- */}
      <Band tone="raised">
        <AnimatedSection>
          <BandSplit eyebrow="Story" heading="Where I'm from, and how I got here">
            <div className="grid gap-8 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-10">
              <img
                src="/me.JPG"
                alt="Nafis Ahmed"
                className="w-full aspect-square object-cover object-[50%_28%] rounded-sm"
              />
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Growing up in the bustling streets of Dhaka, Bangladesh, my childhood was
                  filled with the vibrant colors of Bengali culture, the warmth of family
                  gatherings, and the excitement of festival celebrations. I&apos;m a proud
                  Bengali who loves to share my culture with friends, especially through our
                  cuisine, above all Kacchi Biryani and Phuchka.
                </p>
                <p>
                  My journey to America in 2023 was both thrilling and challenging. As an
                  international student at St. John&apos;s University I&apos;ve found a new
                  world of opportunities while staying close to my roots. When I&apos;m not
                  coding or studying you&apos;ll find me on the soccer field with my
                  intramural team, where I&apos;ve made some of my closest friends and
                  learned that teamwork crosses cultural boundaries. It is also where I
                  met my fianc&eacute;e. We played on the same side, started out as
                  friends, and have been together ever since.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-5">
              {[
                { icon: Github, href: 'https://github.com/nafisahmed510', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/nafisahmed510', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:nafisahmed510@gmail.com', label: 'Email' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={l.label}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <l.icon size={18} />
                </a>
              ))}
            </div>
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- education ---------------- */}
      <Band>
        <AnimatedSection>
          <BandSplit eyebrow="Education" heading="St. John's University">
            <div className="divide-y divide-gray-800/80 border-t border-gray-800/80">
              <Fact label="Degree">
                <span className="font-semibold text-white">
                  B.S. Computer Science
                </span>
                <span className="text-gray-500"> &nbsp;|&nbsp; </span>
                <span className="font-semibold text-white">
                  Minor in Risk Management and Insurance
                </span>
                <p className="mt-1 text-sm text-gray-400">
                  Class of 2027 &nbsp;·&nbsp; GPA 3.7
                </p>
              </Fact>
              <Fact label="Honours">
                Dean&apos;s List 2023/24, 2024/25, 2025/26
              </Fact>
              <Fact label="Leadership">
                Peer Mentor, Project A.I.M. &nbsp;·&nbsp; Junior Senator, Student Government
                &nbsp;·&nbsp; President, Bengali Students Association
              </Fact>
              <Fact label="Coursework">
                Advanced Data Structures &nbsp;·&nbsp; Database Management &nbsp;·&nbsp;
                Analysis of Algorithms &nbsp;·&nbsp; Software Design Methods &nbsp;·&nbsp;
                Discrete Mathematics &nbsp;·&nbsp; Programming Fundamentals
              </Fact>
              <Fact label="Certifications">
                <span className="font-semibold text-white">The Institutes</span>:
                Insurance Essentials &nbsp;·&nbsp; Underwriting Essentials (2026)
              </Fact>
            </div>
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- experience ---------------- */}
      <Band tone="raised">
        <AnimatedSection>
          <BandSplit eyebrow="Experience" heading="Where I've worked">
            <div className="space-y-10">
              <Role
                primary
                title="Data Operations Intern"
                org="MS Transverse"
                dates="Jun 2026 to Aug 2026"
              >
                <li>
                  Proposed and built an automated Python reconciliation engine for a key
                  monthly premium-balancing control, cutting cycle time by over 70% and
                  per-program processing from tens of minutes to under two.
                </li>
                <li>
                  Built a rulebook-driven knowledge base encoding reconciliation logic
                  across the program portfolio, validating automated output to the penny
                  against manual totals.
                </li>
                <li>
                  Deployed the engine as a deterministic, script-backed Claude Skill for
                  repeatable, auditable results; authored adoption documentation used
                  team-wide.
                </li>
                <li>
                  Designed a second control rating and QC-checking automated data mappings,
                  and built a tool generating interactive Excel PivotTables for audit
                  response.
                </li>
              </Role>

              <Role
                title="Artificial Intelligence Intern"
                org="SJ Innovation"
                dates="Jul 2025 to Aug 2025"
              >
                <li>
                  Completed 40+ hours of applied AI training on the Collab AI platform and
                  contributed to team-delivered AI solutions using GitHub and collaborative
                  tooling.
                </li>
              </Role>

              <Role
                title="Additional Experience"
                org="St. John's University"
                dates="Aug 2024 to present"
              >
                <li>
                  Marketing &amp; Labs Assistant (Jan 2025 to present) &middot; A/V
                  Assistant, Summer Conference Services (May to Aug 2025) &middot;
                  Student Worker, International Admissions (Aug to Dec 2024).
                </li>
                <li>
                  Maintained AV systems at 95% uptime across 50+ inspected spaces, resolved
                  10+ technical issues weekly through structured work-ticket systems, and
                  maintained student information databases.
                </li>
              </Role>
            </div>
          </BandSplit>
        </AnimatedSection>
      </Band>

      {/* ---------------- philosophy ---------------- */}
      <Band>
        <AnimatedSection>
          <BandSplit eyebrow="Approach" heading="What I'm trying to do">
            <div className="space-y-4 text-gray-400 leading-relaxed max-w-2xl">
              <p>
                Technology has been my passion since childhood, starting with video games
                and turning into a fascination with AI and programming. I believe in
                building things that solve a problem and are pleasant to use, and I&apos;d
                rather learn a new domain than settle into one.
              </p>
              <p>
                What drives me is using technology to connect people and bridge gaps, the
                same way I&apos;m doing in my own journey between Bangladesh and America.
                Every project is a chance to make something useful without lowering the
                standard it&apos;s held to.
              </p>
            </div>
          </BandSplit>
        </AnimatedSection>
      </Band>
    </>
  );
}
