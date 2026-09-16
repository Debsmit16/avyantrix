import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface SectionHeaderProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  badge,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 lg:mb-16', alignment[align], className)}>
      {badge && (
        <div className="mb-3.5">
          <Badge variant="red" dot>
            {badge}
          </Badge>
        </div>
      )}

      {eyebrow && !badge && (
        <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.2em] font-mono text-avy-red dark:text-avy-red-light font-bold">
          <span className="h-px w-6 bg-avy-red/60" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.15] font-display">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
