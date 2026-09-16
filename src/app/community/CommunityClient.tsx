'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { ApplicationModal } from '@/components/ui/ApplicationModal';
import { communityTracks, selectionPrinciples } from '@/data/community';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CommunityClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('Hardware & Embedded Systems');

  const handleApply = (trackTitle?: string) => {
    if (trackTitle) setSelectedTrack(trackTitle);
    setModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Selective Builder Community' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-20">
          <Badge variant="red" size="sm" dot>
            SELECTIVE BUILDER NETWORK
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.08]">
            Avyantrix Builder Community:{' '}
            <span className="text-avy-red dark:text-avy-red-light">Engineered for Ambitious Minds.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Avyantrix cultivates a high-density, selective network of ambitious builders across hardware, artificial intelligence, biomedical engineering, systems software, and human-centred design. We build real deep technology together.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => handleApply()}
              variant="primary"
              size="lg"
            >
              Apply to Avyantrix
            </Button>
            <Button href="#tracks" variant="outline" size="lg">
              Explore Builder Tracks
            </Button>
            <Link
              href="/insights/selective-builder-ecosystem"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-avy-red dark:hover:text-avy-red-light transition-colors ml-2"
            >
              <span>Read Our Community Thesis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            SECTION: SELECTION PHILOSOPHY
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]" id="criteria">
          <SectionHeader
            badge="INTAKE PHILOSOPHY"
            title="What We Look For in Avyantrix Builders"
            description="We select individuals based on demonstrable craft, intellectual rigor, and an uncompromising drive to build enduring systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl glass-card border-precision space-y-3"
              >
                <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">
                  CRITERION 0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-950 dark:text-white">{principle.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: BUILDER TRACKS
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]" id="tracks">
          <SectionHeader
            eyebrow="CROSS-DISCIPLINARY COHORTS"
            title="Core Builder Domains & Contribution Tracks"
            description="Our network spans the full spectrum required to turn deep engineering concepts into physical reality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityTracks.map((track) => (
              <div
                key={track.id}
                className="p-6 sm:p-8 rounded-2xl glass-card border-precision flex flex-col justify-between space-y-6 group hover:border-avy-red/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold uppercase">
                    TRACK // {track.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {track.focus}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Core Toolchains & Knowledge
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {track.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-[10px] font-mono text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04]">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1 font-semibold">
                      Contribution Vector
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{track.contribution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                  <Button
                    onClick={() => handleApply(track.title)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Apply for {track.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: HOW PARTICIPATION WORKS & TRUTHFUL FRAMING
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="glass-panel border-precision rounded-3xl p-8 sm:p-12 lg:p-14 bg-white/95 dark:bg-avy-black/95 shadow-xl">
            <div className="max-w-3xl space-y-6">
              <Badge variant="red" size="sm">
                HOW PARTICIPATION OPERATES
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white font-display">
                Building through project sprints, peer review, and venture pathways.
              </h2>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Avyantrix community members collaborate on targeted engineering sprints, test prototype firmware, conduct literature benchmarks, and contribute to active venture architectures like WRev.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-avy-red shrink-0 mt-0.5" />
                  <span>Direct involvement in real deep-tech hardware & software projects</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-avy-red shrink-0 mt-0.5" />
                  <span>Rigorous technical code and schematic peer reviews</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-avy-red shrink-0 mt-0.5" />
                  <span>Fast-track pathways to venture founding roles and full-time hiring</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-avy-red shrink-0 mt-0.5" />
                  <span>Co-authorship opportunities on technical reports and whitepapers</span>
                </div>
              </div>

              <div className="pt-6">
                <Button onClick={() => handleApply()} variant="primary" size="lg">
                  Submit Candidate Profile
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTrack={selectedTrack}
      />
    </div>
  );
}
