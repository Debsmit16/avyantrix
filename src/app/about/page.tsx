import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { InteractiveTimeline } from '@/components/ui/InteractiveTimeline';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import {
  Compass,
  Target,
  ArrowRight,
} from 'lucide-react';


export const metadata: Metadata = {
  title: 'About Organisation, Origin & Philosophy',
  description:
    'The story, engineering philosophy, and organizational model of Avyantrix — evolving from a student hackathon team into a long-term deep-tech innovation institution.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Organisation, Origin & Philosophy | Avyantrix',
    description:
      'The story, engineering philosophy, and organizational model of Avyantrix — evolving from competitive hackathon crucibles into a long-term deep-tech innovation institution.',
    url: 'https://www.avyantrix.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const beliefs = [
    {
      number: '01',
      title: 'Ambitious Engineering',
      desc: 'We do not shy away from complex physical constraints, real-time sensor processing, or hardware-software integration. Hard problems are the only ones worth dedicating careers to.',
    },
    {
      number: '02',
      title: 'Interdisciplinary Collaboration',
      desc: 'Breakthroughs occur at the interfaces of disciplines. We cultivate density across biomedical science, firmware, machine learning, systems architecture, and product design.',
    },
    {
      number: '03',
      title: 'Meaningful Societal Problems',
      desc: 'We deliberately reject trivial vanity projects. Our focus is anchored in quantifiable societal challenges: human health, respiratory vulnerability, and physical intelligence.',
    },
    {
      number: '04',
      title: 'Execution Over Hype',
      desc: 'We measure our progress through working bench prototypes, calibrated sensor accuracy, and verifiable test telemetry rather than premature marketing or ungrounded claims.',
    },
    {
      number: '05',
      title: 'Long-Horizon Thinking',
      desc: 'Building enduring technology institutions requires patience, rigorous governance, and iterative refinement across years, not quarterly speculation.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'About', url: 'https://www.avyantrix.com/about' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Avyantrix' }]} />

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-20">
          <Badge variant="red" size="sm">
            ABOUT THE ORGANISATION
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            From competitive crucibles to an enduring innovation institution.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Avyantrix is a technology and venture creation organisation that brings together exceptional multidisciplinary builders, rigorous engineering methodologies, and applied research to solve critical real-world challenges.
          </p>
        </div>

        {/* =========================================================================
            ORIGIN & EVOLUTION
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="ORIGIN & GENESIS"
              title="Forged in the Hackathon Crucible"
              className="mb-4"
            />
            <p className="text-xs font-mono text-slate-500">
              ORIGIN_CHRONOLOGY // 2023 - PRESENT
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            <p>
              Avyantrix did not begin in a corporate boardroom. It was ignited in the high-pressure environment of competitive collegiate and national hackathons. A multidisciplinary group of student engineers—uniting backgrounds in computer science, electronics, biomedical engineering, and software—came together to test their technical limits against urgent problem statements.
            </p>
            <p>
              While most competitive teams disperse once the sprint concludes, our team realized something fundamental: the velocity, creative friction, and holistic engineering intuition developed in those crucibles could be channeled into building serious, long-term deep technology.
            </p>
            <p>
              Our work on the{' '}
              <Link
                href="/ventures/wrev"
                className="font-semibold text-slate-900 dark:text-white underline decoration-avy-red hover:text-avy-red transition-colors"
              >
                WRev intelligent respiratory platform
              </Link>{' '}
              served as the catalyst for this transformation. As we moved from breadboard sensors to custom PCBs, real-time firmware, and machine learning models, the need for an enduring organizational structure became unmistakable.
            </p>
            <div className="pt-2">
              <Link
                href="/insights/from-hackathon-to-institution"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-avy-red dark:text-avy-red-light font-semibold hover:underline"
              >
                <span>Read our founding essay: From Hackathon Prototypes to an Innovation Organisation</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>


        {/* =========================================================================
            MISSION & VISION
            ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-slate-200 dark:border-white/[0.08]">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-2xl glass-card border-precision relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-xl bg-avy-red/10 border border-avy-red/20 text-avy-red dark:text-avy-red-light flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-avy-red dark:text-avy-red-light uppercase tracking-widest font-bold">
              OUR MISSION
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              To engineer transformative solutions for pressing real-world bottlenecks.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We bring multidisciplinary talent, disciplined systems engineering, and applied scientific research together to develop accessible, high-precision technologies that measurably improve human health, physical infrastructure, and human potential.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-2xl glass-card border-precision relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-200 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">
              OUR VISION
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              A premier repeatable engine for deep-tech innovation and ventures.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We envision Avyantrix as a world-class technology institution recognized for translating foundational scientific and engineering insights into resilient, commercially viable, and socially impactful products and venture spin-offs.
            </p>
          </div>
        </section>

        {/* =========================================================================
            WHAT AVYANTRIX BELIEVES
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            eyebrow="CORE VALUES & ETHOS"
            title="What Avyantrix Believes"
            description="The foundational operating principles that govern every line of firmware, every PCB layout, and every organizational decision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief) => (
              <div
                key={belief.number}
                className="p-6 sm:p-8 rounded-xl glass-card border-precision relative group hover:border-avy-red/40 transition-colors"
              >
                <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold mb-3">
                  {belief.number} // PRINCIPLE
                </div>
                <h4 className="text-xl font-bold text-slate-950 dark:text-white mb-2">{belief.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            ORGANISATIONAL MODEL (Tree Structure)
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            badge="ECOSYSTEM TOPOLOGY"
            title="The Avyantrix Organisational Architecture"
            description="How our four pillars interact synergistically to support venture creation, talent growth, and applied research."
          />

          <div className="p-8 sm:p-12 rounded-2xl glass-panel border-precision bg-white/95 dark:bg-avy-black/90 shadow-xl">
            {/* Tree Diagram Visualizer */}
            <div className="text-center pb-8 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-avy-red/10 border border-avy-red/30">
                <span className="h-2 w-2 rounded-full bg-avy-red animate-pulse" />
                <span className="font-display font-bold text-lg text-slate-950 dark:text-white tracking-wider">
                  AVYANTRIX ORGANISATION
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 font-mono text-xs">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
                <div className="text-avy-red dark:text-avy-red-light font-bold text-sm">├── VENTURES</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed">
                  Standalone product spin-offs with dedicated clinical and market validation paths (e.g. WRev).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
                <div className="text-slate-900 dark:text-white font-bold text-sm">├── INNOVATION</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed">
                  Applied bench research, TinyML optimization, sensor physics, and experimental prototyping labs.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
                <div className="text-slate-900 dark:text-white font-bold text-sm">├── COMMUNITY</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed">
                  A curated network of exceptional builders across software, electronics, design, and medicine.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
                <div className="text-slate-900 dark:text-white font-bold text-sm">└── PARTNERSHIPS</div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed">
                  Strategic collaboration with university labs, clinical departments, and deep-tech incubators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            TIMELINE SECTION
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            badge="CHRONOLOGY"
            title="Our Evolution & Trajectory"
            description="Key phases from our hackathon origin to incubator validation and venture scaling."
          />

          <InteractiveTimeline />
        </section>

        {/* =========================================================================
            BRAND & IP NOTICE
            ========================================================================= */}
        <section id="brand" className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="p-8 rounded-2xl glass-card border-precision grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative h-28 w-28 rounded-2xl overflow-hidden border border-slate-300 dark:border-white/20 bg-black p-2 shadow-2xl">
                <Image
                  src="/brand/avyantrix-logo.png"
                  alt="Avyantrix Official Logo"
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="lg:col-span-9 space-y-3" id="ip">
              <div className="font-mono text-xs text-avy-red dark:text-avy-red-light uppercase tracking-wider font-bold">
                BRAND IDENTITY & ATTRIBUTION NOTICE
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Preserving the Avyantrix Identity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The official Avyantrix logotype embodies our technical heritage and Bengali-inspired typographic root, synthesized with mechanical gear symbolism and sharp red/white/black precision. All intellectual property, trademarks, project specifications, and architectural documentation remain the exclusive property of Avyantrix.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
