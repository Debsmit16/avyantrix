import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'red' | 'outline' | 'success' | 'amber';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.08]',
    red: 'bg-avy-red/10 text-avy-red dark:text-avy-red-light border-avy-red/25',
    outline: 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-white/15',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 tracking-wide font-mono',
    md: 'text-xs px-2.5 py-1 tracking-wider font-mono uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full animate-pulse',
            variant === 'red' ? 'bg-avy-red' : variant === 'success' ? 'bg-emerald-500' : 'bg-slate-400'
          )}
        />
      )}
      {children}
    </span>
  );
}
