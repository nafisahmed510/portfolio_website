import React from 'react';

// "N" cut from a rounded square: the counter of the letter is the gap between
// two uprights and a diagonal, so the mark reads at 20px as well as 200px.
export function Monogram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Nafis Ahmed">
      <rect
        x="1" y="1" width="38" height="38" rx="10"
        fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5"
      />
      <g fill="currentColor">
        <rect x="12" y="11" width="4" height="18" rx="1" />
        <rect x="24" y="11" width="4" height="18" rx="1" />
        <path d="M16 11.6 L28 26.2 V29 h-2.6 L13.4 14.4 V11.6 Z" />
      </g>
    </svg>
  );
}
