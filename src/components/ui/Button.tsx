import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: boolean;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  icon = false,
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-avy-red/40 disabled:opacity-50 disabled:pointer-events-none group';

  const variants = {
    primary:
      'bg-avy-red hover:bg-avy-red-hover text-white shadow-md hover:shadow-lg shadow-avy-red/20 hover:shadow-avy-red/35 border border-avy-red-light/30',
    secondary:
      'bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.07] dark:hover:bg-white/[0.12] text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 shadow-sm dark:shadow-none',
    outline:
      'bg-transparent hover:bg-avy-red/10 text-slate-800 dark:text-slate-200 hover:text-avy-red dark:hover:text-white border border-slate-300 dark:border-white/20 hover:border-avy-red/50',
    ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-7 py-3.5 rounded-lg gap-2.5 font-semibold',
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {content}
    </button>
  );
}
