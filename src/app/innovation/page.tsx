import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import {
  innovationDisciplines,
  innovationPipelineSteps,
  technicalReports,
} from '@/data/innovation';
import { FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Applied R&D, TinyML & Deep-Tech Engineering Labs',
  description:
    'Explore the applied research, edge TinyML neural inference, physiological transducer engineering, and 7-stage innovation lifecycle of Avyantrix.',
  keywords: [
    'Deep Tech R&D',
    'Applied Research India',
    'TinyML Edge Inference',
    'Physiological Sensing Transducers',
    'Environmental IoT Engineering',
    'Biomedical Instrumentation',
    'Avyantrix Innovation',
  ],
  alternates: {
    canonical: '/innovation',
  },
  openGraph: {
    title: 'Applied R&D, TinyML & Deep-Tech Engineering Labs | Avyantrix',
    description:
      'Translating complex physical bottlenecks into deterministic edge intelligence and calibrated biomedical hardware.',
    url: 'https://www.avyantrix.com/innovation',
    type: 'website',
  },
};

export default function InnovationPage() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Innovation', url: 'https://www.avyantrix.com/innovation' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumbs items={[{ label: 'Innovation & R&D' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6">
          <Badge variant="red" size="sm">
            APPLIED R&D & EXPERIMENTATION
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            Applied research driven by real-world engineering constraints.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            At Avyantrix, innovation is not speculative theory. We conduct disciplined bench research, develop deterministic edge machine learning architectures, engineer custom hardware transducers, and validate our findings against empirical physics.
          </p>
        </div>

        {/* =========================================================================
            SECTION: INNOVATION PIPELINE
            ========================================================================= */}
        <section className="py-12 border-t border-slate-200 dark:border-white/[0.08]" id="pipeline">
          <SectionHeader
            badge="SYSTEMATIC METHODOLOGY"
            title="The 7-Stage Innovation Pipeline"
            description="Our structured translation pathway converting foundational problems into deployable technology systems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 my-8">
            {innovationPipelineSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-xl glass-card border-precision flex flex-col justify-between hover:border-avy-red/40 transition-all"
              >
                <div>
                  <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold mb-2 block">
                    STAGE {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: RESEARCH DISCIPLINES
            ========================================================================= */}
        <section className="py-12 border-t border-slate-200 dark:border-white/[0.08]" id="disciplines">
          <SectionHeader
            eyebrow="CORE DISCIPLINES"
            title="Applied Research & Engineering Domains"
            description="Our primary areas of technical investigation powering WRev and future venture spin-offs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationDisciplines.map((domain) => (
              <div
                key={domain.id}
                className="p-8 rounded-2xl glass-card border-precision space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold uppercase">
                      {domain.category}
                    </span>
                    <Badge variant="outline" size="sm">
                      ACTIVE_RESEARCH
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{domain.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{domain.summary}</p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Technical Capabilities & Toolchains
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {domain.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-avy-red shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-xs font-mono space-y-1">
                    <div className="text-slate-500 dark:text-slate-400 uppercase text-[10px]">CURRENT EXPLORATION</div>
                    <div className="text-slate-800 dark:text-slate-200 font-sans text-xs leading-relaxed">
                      {domain.currentExploration}
                    </div>
                  </div>

                  {domain.id === 'edge-intelligence' && (
                    <Link
                      href="/insights/tinyml-physiological-edge-inference"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-avy-red dark:text-avy-red-light hover:underline pt-1"
                    >
                      <span>Read TinyML Edge Inference Whitepaper</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: TECHNICAL PUBLICATIONS & ARCHIVES
            ========================================================================= */}
        <section className="py-12 border-t border-slate-200 dark:border-white/[0.08]" id="publications">
          <SectionHeader
            badge="PUBLICATIONS & WORKING PAPERS"
            title="Technical Reports & Whitepapers"
            description="Documentation of system architectures, calibration methodology, and research benchmarks authored by the Avyantrix group."
          />

          <div className="space-y-4">
            {technicalReports.map((report) => (
              <div
                key={report.code}
                className="p-6 sm:p-8 rounded-xl glass-card border-precision flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-avy-red dark:text-avy-red-light font-bold">{report.code}</span>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="text-slate-600 dark:text-slate-400">{report.category}</span>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="text-slate-600 dark:text-slate-400">{report.date}</span>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px]">
                      {report.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-950 dark:text-white">{report.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {report.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <Button
                    href="/contact?topic=partnerships"
                    variant="secondary"
                    size="sm"
                    className="w-full md:w-auto"
                  >
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    <span>Request Report Access</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Callout */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08] text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            Interested in joint research or laboratory collaboration?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            We actively partner with university laboratories, clinical investigators, and independent researchers to co-author papers and test experimental hardware.
          </p>
          <Button href="/contact?topic=partnerships" variant="primary" size="lg">
            Initiate Research Collaboration
          </Button>
        </section>
      </div>
    </div>
  );
}
