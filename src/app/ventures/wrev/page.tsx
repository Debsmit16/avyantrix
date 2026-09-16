import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { DataFlowVisualizer } from '@/components/ui/DataFlowVisualizer';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { venturesList } from '@/data/ventures';
import {
  Smartphone,
  Stethoscope,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WRev | Intelligent Respiratory Health & Exposure Monitoring Platform',
  description:
    'WRev is an integrated healthcare IoT and predictive AI platform developed by Avyantrix, uniting portable differential micro-flow spirometry, SpO2 telemetry, hyper-local particulate tracking, and TinyML baseline drift modeling.',
  keywords: [
    'WRev',
    'Avyantrix WRev',
    'respiratory health technology',
    'respiratory monitoring IoT',
    'portable spirometry',
    'environmental particulate monitoring',
    'edge TinyML healthcare',
    'ambient air quality health IoT',
  ],
  alternates: {
    canonical: '/ventures/wrev',
  },
  openGraph: {
    title: 'WRev | Intelligent Respiratory Health & Exposure Monitoring Platform',
    description:
      'Continuous, context-aware respiratory telemetry uniting physiological airflow dynamics with hyper-local environmental exposure data.',
    url: 'https://www.avyantrix.com/ventures/wrev',
    type: 'website',
  },
};

export default function WRevProductPage() {
  const wrev = venturesList[0];

  const sensingModalities = [
    {
      title: 'Micro-Flow Spirometry',
      spec: 'Differential Pressure Transducer',
      desc: 'High-frequency forced expiratory volume (FEV1, FVC, PEF) waveform sampling with dynamic flow resistance compensation.',
    },
    {
      title: 'Ambulatory Pulse Oximetry',
      spec: 'Dual-Wavelength Optical PPG',
      desc: 'Real-time blood oxygen saturation (SpO2) and heart rate tracking with ambient noise filtering.',
    },
    {
      title: 'Particulate Matter Telemetry',
      spec: 'Laser Scattering PM2.5 / PM10',
      desc: 'Active optical chamber monitoring hazardous airborne particulate densities in the patient immediate breathing zone.',
    },
    {
      title: 'Volatile Organic Compounds',
      spec: 'Metal-Oxide (MOX) Multi-Gas Sensor',
      desc: 'Detection of chemical irritants, smoke precursors, and localized aerosol pollution spikes.',
    },
    {
      title: 'Micro-Climatic Parameters',
      spec: 'Temperature, Humidity & Barometer',
      desc: 'Synchronized ambient enthalpy and barometric pressure tracking to detect weather-induced airway constriction.',
    },
    {
      title: 'Emergency Context & GPS',
      spec: 'Mobile Edge Integration',
      desc: 'Immediate dispatch capability with localized GPS coordinates and physiological status telemetry during acute distress.',
    },
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Sensor Benchmarking & Micro-Turbine Prototyping',
      status: 'Completed (2024)',
      desc: 'Custom PCB bring-up, flow chamber calibration, and initial differential pressure validation against standard volume syringes.',
    },
    {
      phase: 'Phase 2',
      title: 'Integrated Enclosure & Edge TinyML Firmware',
      status: 'Current Phase (2025 - 2026)',
      desc: 'Dual-stage power optimization, on-chip baseline drift algorithms, and mobile companion app BLE telemetry synchronization.',
    },
    {
      phase: 'Phase 3',
      title: 'Clinical Observational Pilot & Calibration Trials',
      status: 'Scoping & Alignment',
      desc: 'Structuring non-invasive comparative validation studies with pulmonology researchers and hospital ethics review boards.',
    },
    {
      phase: 'Phase 4',
      title: 'Institutional Deployment & Clinical Ecosystem',
      status: 'Long-Horizon',
      desc: 'Full clinician longitudinal web dashboard rollouts, FHIR healthcare EHR integrations, and multi-centre field trials.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <ProductJsonLd
        name="WRev"
        description="An integrated physiological and environmental respiratory intelligence system combining micro-turbine differential airflow sensing, ambulatory SpO2, hyper-local particulate exposure tracking, and edge TinyML baselines."
        url="https://www.avyantrix.com/ventures/wrev"
        category="Healthcare IoT & Respiratory Monitoring Device"
      />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Ventures', url: 'https://www.avyantrix.com/ventures' },
          { name: 'WRev', url: 'https://www.avyantrix.com/ventures/wrev' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'Ventures', href: '/ventures' },
            { label: 'WRev Health Platform' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="red" size="sm" dot>
              FLAGSHIP VENTURE
            </Badge>
            <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-semibold">
              BUILDING // EARLY STAGE PROTOTYPE
            </span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
              HEALTHCARE IOT • EDGE AI • SENSING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.04]">
            WRev: Respiratory intelligence for a changing world.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            An integrated physiological and environmental respiratory intelligence system combining portable differential airflow dynamics, SpO2 telemetry, hyper-local particulate exposure tracking, and adaptive machine learning baselines.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button href="#architecture" variant="primary" size="lg">
              Explore Data Architecture
            </Button>
            <Button href="/contact?topic=wrev" variant="outline" size="lg">
              Partner With WRev
            </Button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1 & 2: THE PROBLEM & WREV CONCEPT
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 border-t border-slate-200 dark:border-white/[0.08]">
          {/* The Problem */}
          <div className="p-8 sm:p-10 rounded-2xl glass-card border-precision space-y-4">
            <div className="w-12 h-12 rounded-xl bg-avy-red/10 border border-avy-red/25 text-avy-red dark:text-avy-red-light flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-avy-red dark:text-avy-red-light uppercase tracking-widest font-bold">
              THE HEALTHCARE GAP
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              The Chronic Respiratory Monitoring Vacuum
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Hundreds of millions of patients worldwide manage conditions like asthma, COPD, and environmental airway hyper-reactivity. Current clinical workflows rely almost exclusively on infrequent hospital visits, subjective memory, and isolated spirometry tests taken inside air-conditioned clinics.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              When patients suffer sudden exacerbations triggered by localized air pollution (PM2.5, VOCs) or weather shifts, neither the patient nor the pulmonologist has access to the continuous contextual timeline that caused the deterioration.
            </p>
          </div>

          {/* The WRev Concept */}
          <div className="p-8 sm:p-10 rounded-2xl glass-card border-precision space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">
              THE WREV PARADIGM
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Continuous, Context-Aware Respiratory Telemetry
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              WRev bridges this divide by uniting portable physiological flow measurement with environmental exposure telemetry. By analyzing how individual lung dynamics fluctuate in response to real-world air pollution, humidity, and physical exertion, WRev constructs a personalized respiratory baseline.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              The platform is engineered to identify subtle multi-day deviations in baseline airflow and ambient environmental exposure, equipping clinicians with longitudinal, ATS/ERS-aligned data summaries for research.
            </p>
          </div>
        </section>

        {/* =========================================================================
            TECHNICAL WHITE PAPER CONTEXTUAL LINK
            ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl glass-panel border-precision border-avy-red/30 bg-white/80 dark:bg-avy-black/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-avy-red/10 border border-avy-red/20 text-avy-red dark:text-avy-red-light">
              <FileText className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-wider text-avy-red dark:text-avy-red-light font-bold">
                ENGINEERING DEEP DIVE & ARCHITECTURE
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                Architecting WRev: Synchronizing Physiological Flow & Environmental Telemetry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Read our in-depth technical analysis on micro-turbine differential sensing, multi-modal sensor fusion, and TinyML baseline algorithms.
              </p>
            </div>
          </div>
          <Link
            href="/insights/engineering-respiratory-intelligence-wrev"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-avy-red text-white text-xs font-semibold hover:bg-avy-red-dark transition-all shrink-0 shadow-md"
          >
            <span>Read Architecture Note</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* =========================================================================
            SECTION 3: SENSING MODALITIES
            ========================================================================= */}
        <section className="py-10 border-t border-slate-200 dark:border-white/[0.08] space-y-8">
          <SectionHeader
            eyebrow="HARDWARE & TRANSDUCERS"
            title="Multi-Parametric IoT Sensing Layer"
            description="Engineered around precision transducers and low-power microcontroller silicon. All hardware is actively tested under lab conditions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sensingModalities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl glass-card border-precision space-y-3 group hover:border-avy-red/40 transition-all"
              >
                <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-semibold">
                  VECTOR 0{idx + 1} // {item.spec}
                </div>
                <h4 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-avy-red" />
            <span>
              NON-DIAGNOSTIC NOTICE: WRev is an investigational research prototype undergoing laboratory validation. It does not replace certified clinical emergency medical devices.
            </span>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: DATA ARCHITECTURE (Interactive Flowchart)
            ========================================================================= */}
        <section className="py-10 border-t border-slate-200 dark:border-white/[0.08]" id="architecture">
          <SectionHeader
            badge="SYSTEM ARCHITECTURE"
            title="Six-Stage Data Architecture"
            description="From raw transducer physics to encrypted cloud processing and actionable clinical intelligence."
          />

          <DataFlowVisualizer />
        </section>

        {/* =========================================================================
            SECTION 5: PATIENT & CLINICIAN PORTALS
            ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-slate-200 dark:border-white/[0.08]">
          {/* Patient */}
          <div className="p-8 rounded-2xl glass-card border-precision space-y-4">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.06] text-slate-900 dark:text-white w-fit">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Patient Companion Experience</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Designed for effortless, non-intrusive daily engagement. The mobile companion provides guided inhalation/exhalation pacing, live air quality alerts, environmental heatmaps, and instant emergency SOS dispatch with pre-filled physiological telemetry summaries.
            </p>
          </div>

          {/* Clinician */}
          <div className="p-8 rounded-2xl glass-card border-precision space-y-4">
            <div className="p-3 rounded-xl bg-avy-red/10 text-avy-red dark:text-avy-red-light border border-avy-red/20 w-fit">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Doctor & Clinical Portal</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Equips pulmonologists with longitudinal compliance trends, trigger-response correlation graphs, and ATS/ERS-aligned flow-volume loops. Helps reduce recall bias during consultations by providing clinicians with objective, date-stamped telemetry logs.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: DEVELOPMENT ROADMAP
            ========================================================================= */}
        <section className="py-10 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            badge="PRODUCT ROADMAP"
            title="WRev Engineering & Clinical Progression"
            description="A realistic, milestone-based overview of our development trajectory."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border-precision flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">
                      {phase.phase}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">{phase.status}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-950 dark:text-white mb-2">{phase.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: COLLABORATION & RESEARCH CTA
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08] text-center space-y-6 bg-slate-50/70 dark:bg-avy-dark/60 rounded-3xl p-8 sm:p-12">
          <Badge variant="red" size="sm" className="mx-auto">
            COLLABORATION & PILOTS
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
            Partner with WRev on Clinical Validation & Research
          </h2>

          <p className="text-base text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are actively engaging with academic departments, respiratory researchers, and clinical institutions to conduct observational studies, sensor benchmarking, and usability trials.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact?topic=wrev" variant="primary" size="lg">
              Explore Clinical Collaboration
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About Avyantrix
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
