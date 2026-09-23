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

// Page masthead: the one place a page uses the largest type.
export function PageHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="label-mono mb-4">{eyebrow}</p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{title}</h1>
      {lede && <p className="text-lg text-gray-400 leading-relaxed">{lede}</p>}
    </div>
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
        <p className="label-mono mb-4">{eyebrow}</p>
        {heading && (
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{heading}</h2>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
