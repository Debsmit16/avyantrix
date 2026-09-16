import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { Home, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <TechGridBackground />

      <div className="max-w-xl mx-auto text-center relative z-10 glass-panel border-precision p-8 sm:p-12 rounded-2xl bg-white/95 dark:bg-avy-black/90 shadow-2xl">
        <Badge variant="red" size="sm" className="mb-4">
          ERR_404 // NODE_NOT_LOCATED
        </Badge>

        <h1 className="text-6xl sm:text-7xl font-bold font-mono text-slate-950 dark:text-white tracking-tighter mb-2">
          404
        </h1>

        <div className="font-mono text-xs text-avy-red dark:text-avy-red-light uppercase tracking-widest mb-4 font-bold">
          Coordinates unindexed in Avyantrix System Matrix
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          The route or resource you are attempting to address has either moved, undergone architectural restructuring, or does not exist in our system registry.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8 text-left text-xs font-mono">
          <Link
            href="/ventures/wrev"
            className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-avy-red/40 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
          >
            <div className="text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-white flex items-center justify-between">
              <span>WRev Platform</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
          <Link
            href="/innovation"
            className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-avy-red/40 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
          >
            <div className="text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-white flex items-center justify-between">
              <span>R&D Pipeline</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
          <Link
            href="/community"
            className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-avy-red/40 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
          >
            <div className="text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-white flex items-center justify-between">
              <span>Builder Network</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] hover:border-avy-red/40 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
          >
            <div className="text-slate-600 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-white flex items-center justify-between">
              <span>Direct Dispatch</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

        <Button href="/" variant="primary" size="md">
          <Home className="w-4 h-4 mr-2" />
          <span>Return to Homepage</span>
        </Button>
      </div>
    </div>
  );
}
