import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { partnerCategories } from '@/data/partners';

export const metadata: Metadata = {
  title: 'Institutional, Clinical & Technology Alliances',
  description:
    'Avyantrix collaborates with university research laboratories, pulmonology clinicians, semiconductor toolchains, and deep-tech incubators.',
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Institutional, Clinical & Technology Alliances | Avyantrix',
    description:
      'Targeted alliances with academic laboratories, clinical researchers, and deep-tech incubators to validate systems against real-world criteria.',
    url: 'https://www.avyantrix.com/partners',
    type: 'website',
  },
};

export default function PartnersPage() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Partners', url: 'https://www.avyantrix.com/partners' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Partners' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-20">
          <Badge variant="red" size="sm">
            INSTITUTIONAL & CLINICAL ECOSYSTEM
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            Avyantrix Ecosystem:{' '}
            <span className="text-avy-red dark:text-avy-red-light">Rigorous, Interdisciplinary Alliances.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Deep technology cannot be engineered in isolation. Avyantrix forms targeted alliances with academic laboratories, clinical researchers, semiconductor toolchains, and deep-tech incubation programs to validate systems against real-world criteria.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button href="/contact?topic=partnerships" variant="primary" size="lg">
              Partner with Avyantrix
            </Button>
            <Button href="#categories" variant="outline" size="lg">
              Explore Alliance Models
            </Button>
          </div>
        </div>

        {/* =========================================================================
            SECTION: GROWING OUR ECOSYSTEM (Authentic, Non-Fabricated Framing)
            ========================================================================= */}
        <section className="py-12 border-t border-slate-200 dark:border-white/[0.08]" id="categories">
          <SectionHeader
            badge="COLLABORATION CATEGORIES"
            title="Institutional Alliance Frameworks"
            description="We engage with partners across five structured modalities, focusing on tangible technical deliverables and ethical validation."
          />

          <div className="space-y-8">
            {partnerCategories.map((partner, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl glass-card border-precision grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">
                      CATEGORY 0{idx + 1}
                    </span>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      {partner.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{partner.category}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Key Collaboration Vectors
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {partner.focusAreas.map((area, areaIdx) => (
                      <div
                        key={areaIdx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-avy-red shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: HOW WE ENGAGE & CTA
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="glass-panel border-precision rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 bg-white/95 dark:bg-avy-black/95 shadow-xl">
            <Badge variant="red" size="sm" className="mx-auto">
              INITIATE COLLABORATION
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
              Ready to collaborate on transformative technology?
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We welcome discussions with clinical departments interested in pulmonary studies, university labs seeking hardware translation partners, and industry toolchain providers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button href="/contact?topic=partnerships" variant="primary" size="lg">
                Submit Partnership Proposal
              </Button>
              <Button href="/ventures/wrev" variant="secondary" size="lg">
                Review WRev Technical Specs
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
