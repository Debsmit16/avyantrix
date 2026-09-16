import React from 'react';
import { timelineMilestones } from '@/data/timeline';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function InteractiveTimeline() {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-slate-300 dark:border-white/[0.1] space-y-12 my-8">
      {timelineMilestones.map((item, index) => {
        const isCurrent = item.current;
        return (
          <div key={index} className="relative group">
            {/* Timeline node marker */}
            <div
              className={cn(
                'absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300',
                isCurrent
                  ? 'bg-avy-red border-white shadow-lg shadow-avy-red/50 scale-125'
                  : 'bg-white dark:bg-avy-black border-slate-400 dark:border-slate-600 group-hover:border-avy-red group-hover:bg-avy-red/20'
              )}
            >
              {isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
            </div>

            {/* Card Content */}
            <div
              className={cn(
                'p-6 sm:p-7 rounded-xl border transition-all duration-200',
                isCurrent
                  ? 'bg-avy-red/5 border-avy-red/30 shadow-xl shadow-avy-red/5'
                  : 'glass-card border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20'
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant={isCurrent ? 'red' : 'outline'} size="sm" dot={isCurrent}>
                    {item.period}
                  </Badge>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">
                    PHASE {index + 1}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                {item.title}
              </h3>
              <div className="text-sm font-medium text-avy-red dark:text-avy-red-light mt-1 mb-3">
                {item.subtitle}
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
