import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
      <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Avyantrix</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-avy-red dark:text-avy-red-light font-medium">{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
