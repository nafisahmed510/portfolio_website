import React from 'react';

// Rows with hairline rules rather than bordered cards: the group name sits in
// the left rail, the items read as one line of text on the right.
const groups = [
  {
    title: 'Languages & Data',
    items: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Data Tooling',
    items: ['pandas', 'openpyxl', 'Excel (PivotTables, automation)', 'Power BI', 'n8n'],
  },
  {
    title: 'AI & Agents',
    items: ['Claude Skills development', 'Agentic frameworks', 'Prompt engineering'],
  },
  {
    title: 'Platform & Web',
    items: ['AWS', 'Git', 'VS Code', 'React', 'TypeScript'],
  },
  {
    title: 'Domain',
    items: [
      'Financial reconciliation & controls',
      'Insurance premium / bordereau data',
      'Data quality & mapping validation',
    ],
  },
];

export function SkillsGrid() {
  return (
    <dl className="divide-y divide-gray-800/80 border-t border-gray-800/80">
      {groups.map((group) => (
        <div key={group.title} className="grid gap-2 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8">
          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500 pt-1">
            {group.title}
          </dt>
          <dd className="text-gray-300 leading-relaxed">
            {group.items.join('  ·  ')}
          </dd>
        </div>
      ))}
    </dl>
  );
}
