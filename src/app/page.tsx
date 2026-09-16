'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import {
  Activity,
  Cpu,
  Layers,
  Users,
  ArrowRight,
  Wind,
  HeartPulse,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Sparkles,
  Zap,
  ArrowUpRight,
} from 'lucide-react';
import { venturesList } from '@/data/ventures';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const featuredVenture = venturesList[0];

  const wrevCapabilities = [
    {
      id: 'spirometry',
      name: 'Differential Pressure Spirometry',
      badge: 'FLUID DYNAMICS',
      tag: 'FLOW SENSING',
      metric: '200 Hz Sampling',
      tolerance: 'Target ±2.5% FEV1 Volume Estimation',
      desc: 'Micro-venturi aerodynamic flow chamber measuring forced expiratory velocity waveforms with sub-millibar differential sensitivity.',
      highlights: ['ATS/ERS Guideline Alignment', 'Dynamic Airway Resistance', 'Ultra-Low Inhalation Drag'],
    },
    {
      id: 'ppg',
      name: 'Dual-Wavelength Optical PPG',
      badge: 'BIOMARKER TELEMETRY',
      tag: 'PULSE & SPO2',
      metric: '660nm / 940nm',
      tolerance: '70–100% SpO2 Range Target',
      desc: 'Reflective photoplethysmography sensor array with real-time motion artifact cancellation and microvascular pulse transit timing.',
      highlights: ['Ambulatory Noise Filtering', 'Low-Perfusion Resilience', 'Circadian Baseline Tracking'],
    },
    {
      id: 'particulate',
      name: 'Laser Particulate Chamber',
      badge: 'ENVIRONMENTAL SENSING',
      tag: 'AQI SCATTERING',
      metric: '0.3μm – 10μm',
      tolerance: 'Active PM2.5 / PM10 Detection',
      desc: 'Miniaturized optical laser scattering chamber sampling airborne aerosol particulates in the user immediate micro-breathing zone.',
      highlights: ['Dynamic Duty-Cycle', 'Ambient Enthalpy Sync', 'Continuous Exposure Scoring'],
    },
    {
      id: 'tinyml',
      name: 'On-Chip TinyML Inference',
      badge: 'EDGE INTELLIGENCE',
      tag: 'ARM CORTEX-M4',
      metric: 'Target <120ms Latency',
      tolerance: '164KB Static SRAM Arena Target',
      desc: 'Deterministic INT8 quantized neural network executing rolling individualized baseline drift anomaly detection directly on edge silicon.',
      highlights: ['Zero Heap Allocation', 'Offline Local Buffer', 'CMSIS-NN Acceleration'],
    },
  ];


  return (
    <div className="relative overflow-hidden">
      <TechGridBackground />

      {/* =========================================================================
          HERO SECTION: High-End Editorial & Systems Overview
          ========================================================================= */}
      <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-slate-200 dark:border-white/[0.08] text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-avy-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-avy-red"></span>
              </span>
              <span className="text-slate-900 dark:text-white font-bold tracking-wider">
                AVYANTRIX RESEARCH & VENTURE LAB
              </span>
              <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">
                KOLKATA, INDIA
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-[11px]">
              <span>SYS_REV: 2026.04</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ALL PILLARS ACTIVE
              </span>
            </div>
          </div>

          {/* Main Hero Typography & Positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-avy-red/10 border border-avy-red/25 text-avy-red dark:text-avy-red-light font-mono text-xs uppercase tracking-wider font-semibold">
                <span>TECHNOLOGY</span>
                <span>•</span>
                <span>INNOVATION</span>
                <span>•</span>
                <span>VENTURES</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.05]">
                Engineering ideas into{' '}
                <span className="text-avy-red dark:text-avy-red-light italic font-serif font-normal">
                  real-world
                </span>{' '}
                impact.
              </h1>

              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Avyantrix is a technology and innovation organisation that unites exceptional multidisciplinary builders, rigorous systems engineering, applied research, and venture incubation to solve critical challenges.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/ventures/wrev" variant="primary" size="lg" icon>
                  Explore WRev Platform
                </Button>
                <Button href="/about" variant="secondary" size="lg">
                  Genesis & Story
                </Button>
                <Button href="/community" variant="outline" size="lg">
                  Join Builder Network
                </Button>
              </div>
            </div>

            {/* Right Architectural Ledger Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel rounded-3xl p-7 border-precision space-y-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      ORGANISATION OVERVIEW
                    </div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      Four Operating Pillars
                    </div>
                  </div>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold">
                    NOMINAL
                  </span>
                </div>

                {/* Pillar Snapshot */}
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono text-avy-red dark:text-avy-red-light font-bold uppercase">
                        PILLAR 01 // VENTURES
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        WRev Health IoT Platform
                      </div>
                    </div>
                    <Link
                      href="/ventures/wrev"
                      className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                      aria-label="View WRev Specs"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                        02 // INNOVATION
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">Applied R&D</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-1">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                        03 // COMMUNITY
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">Selective Intake</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-1">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                      04 // PARTNERSHIPS
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300">
                      Collaborating with university laboratories, clinical investigators, and deep-tech incubators.
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>DISCIPLINED SYSTEMS CRAFT</span>
                  <Link href="/about" className="text-avy-red dark:text-avy-red-light font-semibold hover:underline">
                    Read Model →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: WHO WE ARE (Genesis & Manifesto)
          ========================================================================= */}
      <section className="py-20 lg:py-24 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/70 dark:bg-avy-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-avy-red dark:text-avy-red-light font-bold">
                GENESIS & EVOLUTION
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
                Born in competitive crucibles. Built for permanence.
              </h2>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Avyantrix began as an elite student engineering hackathon squad. Under tight deadlines and extreme resource constraints, we built working prototypes that integrated embedded hardware, physiological transducers, and cloud telemetry.
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Instead of disbanding after victory, we recognized that meaningful societal problems require long-term institutional stamina. Today, Avyantrix operates as a venture studio and applied innovation organisation.
              </p>

              <div className="pt-2">
                <Button href="/about" variant="secondary" size="md">
                  Explore Full Organisational Model →
                </Button>
              </div>
            </div>

            {/* Right Column: High-Density Manifesto Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass-card border-precision space-y-3">
                <div className="text-xs font-mono text-avy-red dark:text-avy-red-light font-bold">
                  01 // GROUNDED CRAFT
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">Execution Over Hype</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We measure progress in calibrated sensor tolerances, deterministic firmware, and empirical bench data rather than inflated marketing claims.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border-precision space-y-3">
                <div className="text-xs font-mono text-avy-red dark:text-avy-red-light font-bold">
                  02 // INTERDISCIPLINARY
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">Cross-Disciplinary Density</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Firmware engineers sit beside biomedical researchers and product architects. We break the disciplinary silos that stall complex physical technology.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border-precision space-y-3">
                <div className="text-xs font-mono text-avy-red dark:text-avy-red-light font-bold">
                  03 // SUSTAINABLE IP
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">Venture Incubation</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  High-potential engineering projects are nurtured through dedicated incubation paths, transitioning from lab prototypes to standalone venture spin-offs.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border-precision space-y-3">
                <div className="text-xs font-mono text-avy-red dark:text-avy-red-light font-bold">
                  04 // LONG HORIZON
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">Enduring Ambition</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We focus on challenging, foundational problems in healthcare telemetry and edge intelligence that demand multi-year technical commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: ASYMMETRICAL 4-PILLAR ECOSYSTEM
          ========================================================================= */}
      <section className="py-24 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-avy-red dark:text-avy-red-light font-bold mb-3">
              ECOSYSTEM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white font-display">
              Four synchronized pillars. One unified mission.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Each pillar operates with distinct technical goals while feeding knowledge, prototypes, and talent into our core venture engine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Large Spotlight Card: VENTURES (Pillar 01) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-card border-precision relative overflow-hidden flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-avy-red/10 text-avy-red dark:text-avy-red-light font-mono text-xs font-bold">
                      PILLAR 01 // VENTURES
                    </span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                      ACTIVE INCUBATION
                    </span>
                  </div>
                  <Activity className="w-6 h-6 text-avy-red" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-2 font-display">
                    Solving Urgent Problems Through Scalable Ventures
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    We originate, engineer, and spin off independent technology products. Our flagship venture, <strong>WRev</strong>, is creating an intelligent respiratory health platform that bridges physiological flow sensing with hyper-local environmental exposure data.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">CURRENT VENTURE</span>
                    <span className="text-slate-900 dark:text-white font-bold">WRev Platform</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">INCUBATION MODEL</span>
                    <span className="text-slate-900 dark:text-white font-bold">Lab to Spin-Off</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <Link
                  href="/ventures"
                  className="font-mono text-xs font-bold text-slate-900 dark:text-white group-hover:text-avy-red transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Ventures Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/ventures/wrev"
                  className="text-xs font-mono text-avy-red dark:text-avy-red-light hover:underline font-semibold"
                >
                  View WRev Specs →
                </Link>
              </div>
            </div>

            {/* Right Split: INNOVATION (Pillar 02) & COMMUNITY (Pillar 03) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {/* Innovation */}
              <div className="p-6 sm:p-7 rounded-3xl glass-card border-precision space-y-4 flex-1 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold">
                      PILLAR 02 // INNOVATION
                    </span>
                    <Cpu className="w-5 h-5 text-slate-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white">
                    Applied R&D & Prototyping
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Bench research, TinyML neural quantization, custom sensor transducers, and technical whitepapers.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                  <Link
                    href="/innovation"
                    className="font-mono text-xs text-slate-900 dark:text-white group-hover:text-avy-red transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>Research Pipeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Community */}
              <div className="p-6 sm:p-7 rounded-3xl glass-card border-precision space-y-4 flex-1 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold">
                      PILLAR 03 // COMMUNITY
                    </span>
                    <Users className="w-5 h-5 text-slate-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white">
                    Selective Builder Network
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    A curated network of exceptional builders across software, hardware, medicine, and human-centred design.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                  <Link
                    href="/community"
                    className="font-mono text-xs text-slate-900 dark:text-white group-hover:text-avy-red transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>Apply to Network</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Span: PARTNERSHIPS (Pillar 04) */}
            <div className="lg:col-span-12 p-6 sm:p-8 rounded-2xl glass-panel border-precision flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">
                    PILLAR 04 // ALLIANCES
                  </span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-500">ACADEMIC • CLINICAL • INDUSTRY</span>
                </div>
                <h4 className="text-xl font-bold text-slate-950 dark:text-white">
                  Institutional, Clinical & Semiconductor Ecosystem
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                  Collaborating with university laboratories, clinical investigators, and deep-tech incubators to stress-test technology against real-world clinical benchmarks.
                </p>
              </div>

              <Button href="/partners" variant="outline" size="sm" className="shrink-0">
                Partner Frameworks →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: BESPOKE WREV HARDWARE & TRANSDUCER ARCHITECTURE
          ========================================================================= */}
      <section className="py-24 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/60 dark:bg-avy-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-avy-red dark:text-avy-red-light font-bold mb-2">
                <span>FLAGSHIP VENTURE SPOTLIGHT</span>
                <span>•</span>
                <span className="text-emerald-600 dark:text-emerald-400">HARDWARE CAD REVISION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-950 dark:text-white font-display">
                WRev: Respiratory Intelligence Architecture
              </h2>
            </div>

            <Button href="/ventures/wrev" variant="primary" size="md" icon>
              Full WRev Platform Specs
            </Button>
          </div>

          {/* Clean Interactive Tabbed Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tabs List */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                Sensing Modalities & Compute Layers
              </div>

              {wrevCapabilities.map((cap, idx) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col space-y-1 ${
                    activeTab === idx
                      ? 'bg-white dark:bg-avy-black border-avy-red shadow-lg shadow-avy-red/10'
                      : 'bg-white/60 dark:bg-white/[0.02] border-slate-200 dark:border-white/[0.06] hover:bg-white dark:hover:bg-white/[0.05] hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-avy-red dark:text-avy-red-light font-bold">
                      {cap.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {cap.badge}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-950 dark:text-white">
                    {cap.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Spec Sheet */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl glass-panel border-precision space-y-6 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                  <div>
                    <div className="text-xs font-mono text-avy-red dark:text-avy-red-light font-bold">
                      MODALITY DETAIL // {wrevCapabilities[activeTab].tag}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white mt-1">
                      {wrevCapabilities[activeTab].name}
                    </h3>
                  </div>

                  <div className="flex gap-2 font-mono text-xs">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                      <span className="text-[10px] text-slate-500 block">FREQUENCY</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {wrevCapabilities[activeTab].metric}
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
                      <span className="text-[10px] text-slate-500 block">TOLERANCE</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {wrevCapabilities[activeTab].tolerance}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {wrevCapabilities[activeTab].desc}
                </p>

                {/* Specific Capabilities */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    Engineered Validation Criteria
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {wrevCapabilities[activeTab].highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-xs font-mono text-slate-800 dark:text-slate-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-avy-red shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>PROTOTYPE PHASE: BENCH CALIBRATED</span>
                  <Link href="/contact?topic=wrev" className="text-avy-red dark:text-avy-red-light hover:underline font-semibold">
                    Request Validation Protocol →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: EXECUTION LIFECYCLE (Engineering Blueprint Flow)
          ========================================================================= */}
      <section className="py-24 border-t border-slate-200 dark:border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono uppercase tracking-widest text-avy-red dark:text-avy-red-light font-bold mb-3">
              METHODOLOGY BLUEPRINT
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white font-display">
              The 7-Stage Execution Lifecycle
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              How ambiguous clinical and physical challenges are systematically converted into robust, deployable technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {[
              { step: '01', title: 'Problem Discovery', tag: 'BOTTLENECK' },
              { step: '02', title: 'Applied Research', tag: 'PHYSICS & LIT' },
              { step: '03', title: 'System Engineering', tag: 'CIRCUITS & DSP' },
              { step: '04', title: 'Rapid Prototype', tag: 'PCB & 3D RIG' },
              { step: '05', title: 'Bench Validation', tag: 'LAB GOLD STD' },
              { step: '06', title: 'Venture Incubation', tag: 'PRODUCTIZATION' },
              { step: '07', title: 'Scalable Impact', tag: 'FIELD DEPLOY' },
            ].map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-2xl glass-card border-precision flex flex-col justify-between hover:border-avy-red/40 transition-all space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">
                      {st.step}
                    </span>
                    <span className="font-mono text-[9px] text-slate-500">
                      {st.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">
                    {st.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: GLOBAL VISION & CTA
          ========================================================================= */}
      <section className="py-24 border-t border-slate-200 dark:border-white/[0.08] bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dense opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-avy-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <Badge variant="red" size="sm" className="mx-auto">
            LONG-TERM HORIZON
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
            Have a problem worth solving? <br />
            <span className="text-avy-red-light">Build with Avyantrix.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are an academic researcher proposing collaborative benchmarking, a clinical department interested in WRev observational studies, or an exceptional builder ready to engineer the future.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact?topic=partnerships" variant="primary" size="lg">
              Partner With Us
            </Button>
            <Button href="/community" variant="secondary" size="lg">
              Apply to Builder Community
            </Button>
            <Button href="/ventures" variant="outline" size="lg">
              Explore All Ventures
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
