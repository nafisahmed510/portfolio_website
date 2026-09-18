import React from 'react';

// Deliberately generic: this is the shape of a reconciliation control, not any
// employer's data, logic or figures.
const stages = [
  { x: 10,  label: 'Source files', sub: 'monthly premium data' },
  { x: 185, label: 'Parser', sub: 'format normalisation' },
  { x: 360, label: 'Rulebook engine', sub: 'per-program logic' },
  { x: 535, label: 'Validation', sub: 'vs. manual totals' },
  { x: 710, label: 'Outputs', sub: 'report + PivotTables' },
];

export function ReconciliationDiagram() {
  return (
    // Scrolls rather than scales below ~620px: shrunk to a phone width the
    // labels render at about 5px, which is a diagram nobody can read.
    <div className="overflow-x-auto">
    <svg
      viewBox="0 0 860 200"
      className="w-full min-w-[620px] h-auto"
      role="img"
      aria-label="Pipeline diagram: source files feed a parser, then a rulebook engine, then a validation step checked against manual totals, producing a reconciliation report and PivotTables."
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" />
        </marker>
      </defs>

      {stages.map((s, i) => (
        <g key={s.label}>
          <rect
            x={s.x} y={58} width={140} height={64} rx={8}
            fill="#111113"
            stroke={i === 3 ? '#9ca3af' : '#374151'}
            strokeWidth={i === 3 ? 2 : 1}
          />
          <text x={s.x + 70} y={84} textAnchor="middle"
                fill="#e5e7eb" fontSize="14" fontFamily="monospace">
            {s.label}
          </text>
          <text x={s.x + 70} y={104} textAnchor="middle"
                fill="#8b8f98" fontSize="11" fontFamily="monospace">
            {s.sub}
          </text>
          {i < stages.length - 1 && (
            <line
              x1={s.x + 140} y1={90} x2={s.x + 180} y2={90}
              stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"
            />
          )}
        </g>
      ))}

      {/* The validation step is the point of the whole thing */}
      <line x1={605} y1={122} x2={605} y2={150} stroke="#4b5563"
            strokeWidth="1" strokeDasharray="3 3" />
      <text x={605} y={168} textAnchor="middle" fill="#9ca3af"
            fontSize="12" fontFamily="monospace">
        reconciles to the penny
      </text>

      <text x={80} y={34} textAnchor="middle" fill="#6b7280"
            fontSize="11" fontFamily="monospace">
        tens of minutes
      </text>
      <text x={780} y={34} textAnchor="middle" fill="#9ca3af"
            fontSize="11" fontFamily="monospace">
        under two
      </text>
      <line x1={130} y1={30} x2={730} y2={30} stroke="#374151"
            strokeWidth="1" strokeDasharray="4 4" markerEnd="url(#arrow)" />
    </svg>
    </div>
  );
}
