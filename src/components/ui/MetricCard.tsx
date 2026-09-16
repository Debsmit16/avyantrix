import React from 'react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: string;
  description?: string;
  code?: string;
  className?: string;
}

export function MetricCard({ label, value, description, code, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        'p-5 sm:p-6 rounded-xl glass-card border-precision relative overflow-hidden group',
        className
      )}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-avy-red/5 rounded-full blur-xl group-hover:bg-avy-red/10 transition-colors pointer-events-none" />

      {code && (
        <div className="font-mono text-[10px] tracking-wider text-avy-red dark:text-avy-red-light uppercase mb-2">
          {code}
        </div>
      )}

      <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
        {value}
      </div>

      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1.5">{label}</div>

      {description && (
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{description}</div>
      )}
    </div>
  );
}
