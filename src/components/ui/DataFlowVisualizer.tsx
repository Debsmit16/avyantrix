'use client';

import React, { useState } from 'react';
import { Activity, Cpu, Cloud, BrainCircuit, Smartphone, Stethoscope, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

interface StageData {
  id: string;
  step: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  specs: {
    protocol: string;
    latency: string;
    payload: string;
  };
  details: string[];
}

const stages: StageData[] = [
  {
    id: 'sensors',
    step: '01',
    name: 'Sensor Transducers',
    icon: Activity,
    tagline: 'Multi-parametric physiological & ambient capture',
    specs: {
      protocol: 'Analog / I2C / SPI',
      latency: '<5ms per sample',
      payload: 'Raw ADC Waveforms (200Hz)',
    },
    details: [
      'Micro-turbine & differential pressure sensor for forced expiratory flow dynamics',
      'Reflective photoplethysmography (PPG) for SpO2 & pulse timing',
      'Optical laser-scattering PM2.5 / PM10 particulate sensor chamber',
      'Low-thermal-drift ambient temperature, humidity, and barometric altimeter',
    ],
  },
  {
    id: 'edge',
    step: '02',
    name: 'Edge Microcontroller',
    icon: Cpu,
    tagline: 'Deterministic signal conditioning & TinyML',
    specs: {
      protocol: 'BLE 5.3 / DMA SPI',
      latency: '<120ms filtering',
      payload: 'Conditioned Waveform Packets',
    },
    details: [
      'Digital bandpass filtering and motion-artifact cancellation',
      'Dynamic power management cycling between surveillance and high-rate breath sampling',
      'Static tensor arena memory allocation preventing heap fragmentation',
      'Local flash storage ledger for 72+ hours of autonomous offline buffering',
    ],
  },
  {
    id: 'cloud',
    step: '03',
    name: 'Encrypted Cloud Ingestion',
    icon: Cloud,
    tagline: 'High-throughput time-series aggregation',
    specs: {
      protocol: 'TLS 1.3 / gRPC',
      latency: '<250ms sync',
      payload: 'Encrypted JSON/Protobuf',
    },
    details: [
      'End-to-end encrypted telemetry stream with zero-knowledge tokenization',
      'TimescaleDB / PostgreSQL time-series storage partitioned by telemetry epoch',
      'Real-time hyper-local air quality indexing and GIS weather overlay synchronization',
      'Audit logging complying with international health data handling standards',
    ],
  },
  {
    id: 'ai',
    step: '04',
    name: 'AI Intelligence Layer',
    icon: BrainCircuit,
    tagline: 'Longitudinal baselining & exposure models',
    specs: {
      protocol: 'Async Microservice',
      latency: 'Continuous evaluation',
      payload: 'Personalized Risk Indices',
    },
    details: [
      'Adaptive rolling 14-day baseline construction for individual diurnal lung capacity',
      'Multivariate exposure-response correlation between PM2.5 spikes and FEV1 drops',
      'Early exacerbation drift scoring detecting subtle multi-day deviations',
      'Context-aware threshold tuning to prevent notification fatigue',
    ],
  },
  {
    id: 'mobile',
    step: '05',
    name: 'Mobile Application',
    icon: Smartphone,
    tagline: 'Patient interface & proactive guidance',
    specs: {
      protocol: 'Local BLE / REST',
      latency: 'Instant UI response',
      payload: 'Visual Trends & Alerts',
    },
    details: [
      'Real-time inhalation/exhalation pacing guide during spirometry maneuvers',
      'Air quality heatmaps with contextual route recommendations',
      'Medication and symptom logging with temporal correlation plots',
      'Emergency SOS trigger with GPS coordinates and acute physiological status summary',
    ],
  },
  {
    id: 'clinician',
    step: '06',
    name: 'Clinician Portal & Insights',
    icon: Stethoscope,
    tagline: 'Longitudinal triage & clinical summary',
    specs: {
      protocol: 'HTTPS Web Portal',
      latency: 'Real-time dashboard',
      payload: 'Structured Clinical Reports',
    },
    details: [
      'ATS/ERS guideline-aligned flow-volume and volume-time curve visualizations',
      'Longitudinal compliance and trigger correlation summaries for appointment reviews',
      'Custom alert thresholds for high-risk stratified patient cohorts',
      'Exportable FHIR/HL7-compatible clinical report summaries',
    ],
  },
];

export function DataFlowVisualizer() {
  const [activeStage, setActiveStage] = useState<string>('sensors');
  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <div className="rounded-2xl glass-panel border-precision p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-avy-red/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="red" size="sm">
              WREV_SYSTEM_TELEMETRY
            </Badge>
            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">ARCH_REV_2.4</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mt-1">
            End-to-End System Data Flow Architecture
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 w-fit">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero-Knowledge Encryption Pipeline</span>
        </div>
      </div>

      {/* Stage Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 my-8">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={cn(
                'flex flex-col items-start p-3.5 rounded-xl border text-left transition-all duration-200 relative group',
                isActive
                  ? 'bg-avy-red/10 dark:bg-avy-red/15 border-avy-red/50 text-slate-950 dark:text-white shadow-md shadow-avy-red/10'
                  : 'bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-white/15'
              )}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {stage.step}
                </span>
                <Icon
                  className={cn(
                    'w-4 h-4 transition-colors',
                    isActive ? 'text-avy-red dark:text-avy-red-light' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                  )}
                />
              </div>
              <div className="font-semibold text-xs text-slate-900 dark:text-white leading-tight">{stage.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Panel */}
      <div className="bg-slate-50 dark:bg-avy-dark/80 rounded-xl border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-avy-red dark:text-avy-red-light font-semibold">
                STAGE {current.step}
              </span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{current.tagline}</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-950 dark:text-white">{current.name}</h4>
          </div>

          {/* Technical Specs Pillbox */}
          <div className="grid grid-cols-3 gap-3 font-mono text-xs">
            <div className="bg-white dark:bg-white/[0.04] p-2.5 rounded-lg border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Protocol</div>
              <div className="text-slate-900 dark:text-slate-200 font-semibold truncate">{current.specs.protocol}</div>
            </div>
            <div className="bg-white dark:bg-white/[0.04] p-2.5 rounded-lg border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Latency</div>
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold truncate">{current.specs.latency}</div>
            </div>
            <div className="bg-white dark:bg-white/[0.04] p-2.5 rounded-lg border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Payload</div>
              <div className="text-slate-900 dark:text-slate-200 font-semibold truncate">{current.specs.payload}</div>
            </div>
          </div>
        </div>

        {/* Detailed Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {current.details.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-lg bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] shadow-sm dark:shadow-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-avy-red mt-2 shrink-0" />
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
