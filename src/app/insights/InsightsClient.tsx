'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { insightArticles } from '@/data/insights';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function InsightsClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Technology',
    'Research',
    'Company',
    'Community',
  ];

  const filteredArticles =
    activeCategory === 'All'
      ? insightArticles
      : insightArticles.filter((a) => a.category === activeCategory);

  const featured = insightArticles.find((a) => a.featured) || insightArticles[0];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Editorial Insights' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-16">
          <Badge variant="red" size="sm">
            EDITORIAL & DISPATCHES
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            Engineering dispatches, architecture notes & research.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Direct technical documentation, design decisions, biomedical telemetry notes, and organizational philosophy written by the Avyantrix engineering and research groups.
          </p>
        </div>

        {/* =========================================================================
            FEATURED ARTICLE
            ========================================================================= */}
        {featured && (
          <section className="mb-16">
            <Link
              href={`/insights/${featured.slug}`}
              className="block p-8 sm:p-12 rounded-3xl glass-panel border-precision bg-white/95 dark:bg-avy-black/90 hover:border-avy-red/50 transition-all duration-300 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-avy-red/10 rounded-full blur-3xl pointer-events-none group-hover:bg-avy-red/20 transition-colors" />

              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <Badge variant="red" size="sm" dot>
                    FEATURED DISPATCH
                  </Badge>
                  <span className="text-slate-600 dark:text-slate-400">{featured.category}</span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span className="text-slate-600 dark:text-slate-400">{formatDate(featured.date)}</span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span className="text-slate-600 dark:text-slate-400">{featured.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors font-display">
                  {featured.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {featured.summary}
                </p>

                <div className="pt-2 flex items-center gap-2 font-mono text-xs font-semibold text-slate-900 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
                  <span>Read Full Technical Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* =========================================================================
            FILTERABLE ARTICLE GRID
            ========================================================================= */}
        <section className="py-12 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-display">
              All Publications & Notes
            </h3>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-avy-red text-white font-bold shadow-md shadow-avy-red/20'
                      : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="p-6 sm:p-8 rounded-2xl glass-card border-precision flex flex-col justify-between space-y-6 group hover:border-avy-red/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <Badge variant="outline" size="sm">
                      {article.category}
                    </Badge>
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span>{formatDate(article.date)}</span>
                  <span className="text-slate-700 dark:text-slate-300 group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors flex items-center gap-1 font-semibold">
                    Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
