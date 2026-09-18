import React from 'react';
import { motion } from 'framer-motion';

// Grouped by what the work actually is, not by logo availability.
// Everything here is claimable from the resume — nothing aspirational.
const groups = [
  {
    title: 'Languages & Data',
    note: 'Where most of the work happens',
    items: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Data Tooling',
    note: 'Turning messy inputs into checkable output',
    items: ['pandas', 'openpyxl', 'Excel (PivotTables, automation)', 'Power BI', 'n8n'],
  },
  {
    title: 'AI & Agents',
    note: 'Automation that has to stay auditable',
    items: ['Claude Skills development', 'Agentic frameworks', 'Prompt engineering'],
  },
  {
    title: 'Platform & Web',
    note: 'Shipping and keeping it running',
    items: ['AWS', 'Git', 'VS Code', 'React', 'TypeScript'],
  },
  {
    title: 'Domain',
    note: 'Learned on the job, not from a course',
    items: [
      'Financial reconciliation & controls',
      'Insurance premium / bordereau data',
      'Data quality & mapping validation',
    ],
    highlight: true,
  },
];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group, index) => (
        <motion.div
          key={group.title}
          className={`flex flex-col p-6 rounded-lg bg-gray-900 border transition-colors duration-300 ${
            group.highlight
              ? 'border-gray-600 hover:border-gray-500 lg:col-span-2'
              : 'border-gray-800 hover:border-gray-700'
          }`}
        >
          <h3 className="text-silver font-semibold mb-1">{group.title}</h3>
          <p className="text-xs text-gray-500 mb-4">{group.note}</p>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="text-sm text-gray-300 bg-black/40 border border-gray-800 rounded px-3 py-1"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
