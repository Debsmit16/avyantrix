import React from 'react';
import { cn } from '@/lib/utils';

interface TechGridBackgroundProps {
  className?: string;
  glow?: boolean;
  schematic?: boolean;
}

export function TechGridBackground({
  className,
  glow = true,
  schematic,
}: TechGridBackgroundProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden select-none -z-10',
        className
      )}
      aria-hidden="true"
    >
      {/* Clean Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 dark:opacity-40" />

      {/* Elegant Radial Glow Accent */}
      {glow && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-avy-red/5 dark:bg-avy-red/[0.08] blur-[120px] rounded-full pointer-events-none" />
      )}

      {/* Smooth Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-[#07080a]" />
    </div>
  );
}
