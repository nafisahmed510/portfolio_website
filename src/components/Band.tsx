import React, { ReactNode } from 'react';

// The sample's organising idea: full-bleed bands separated by a shift in tone,
// each split into a narrow left rail (eyebrow + heading) and a wide right
// column. No cards, no borders, no rounded boxes floating on a background —
// the band IS the container.

export function Band({
  children,
  tone = 'base',
  className = '',
  id,
}: {
  children: ReactNode;
  tone?: 'base' | 'raised';
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full ${tone === 'raised' ? 'bg-[#101010]' : 'bg-ink'} ${className}`}
    >
      <div className="container mx-auto max-w-6xl px-6 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function BandSplit({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-16">
      <div>
        <p className="label-mono mb-4">&mdash;&nbsp;&nbsp;{eyebrow}</p>
        {heading && (
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{heading}</h2>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
