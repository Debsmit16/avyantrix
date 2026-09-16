'use client';

import React, { useState } from 'react';
import { Sliders, Cpu, BatteryCharging, Zap, Gauge, CheckCircle2, ShieldAlert } from 'lucide-react';

export function TinyMLQuantizerSimulator() {
  const [quantLevel, setQuantLevel] = useState<number>(2); // 0: FP32, 1: FP16, 2: INT8 (Avyantrix Standard), 3: INT4

  const quantModes = [
    {
      level: 0,
      name: 'FP32 Floating Point',
      tag: 'UNOPTIMIZED_CLOUD',
      sram: 1280, // KB
      sramLabel: '1,280 KB (Exceeds MCU)',
      latency: 840, // ms
      energy: 48.2, // mJ
      batteryDays: 0.8,
      accuracy: 99.1,
      status: 'MEMORY OVERFLOW ON CORTEX-M4',
      statusColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
      description: 'Standard 32-bit floating point model. Requires cloud server dispatch or high-power application processor.',
    },
    {
      level: 1,
      name: 'FP16 Half Precision',
      tag: 'PRUNED_INTERMEDIATE',
      sram: 640,
      sramLabel: '640 KB (Tight SRAM)',
      latency: 320,
      energy: 18.5,
      batteryDays: 2.1,
      accuracy: 98.9,
      status: 'MARGINAL FIT // HIGH LATENCY',
      statusColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      description: '16-bit weight representation with structured magnitude pruning. Runs on M4 with heavy memory paging.',
    },
    {
      level: 2,
      name: 'INT8 Symmetric Quantized',
      tag: 'AVYANTRIX_EDGE_STANDARD',
      sram: 164,
      sramLabel: '164 KB (Static Arena)',
      latency: 112,
      energy: 4.2,
      batteryDays: 6.8,
      accuracy: 98.6,
      status: 'OPTIMAL // PRODUCTION CALIBRATED',
      statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      description: 'Per-channel post-training quantization with CMSIS-NN SIMD vector instructions. Fits within 256KB SRAM with zero heap churn.',
    },
    {
      level: 3,
      name: 'INT4 Non-Linear Clustered',
      tag: 'EXPERIMENTAL_MICRO',
      sram: 88,
      sramLabel: '88 KB (Ultra-Light)',
      latency: 68,
      energy: 2.1,
      batteryDays: 14.2,
      accuracy: 96.2,
      status: 'SENSITIVITY LOSS (-2.4% F1)',
      statusColor: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
      description: 'Aggressive 4-bit weight clustering. Sub-millijoule execution with minor degradation in subtle airway drift sensitivity.',
    },
  ];

  const current = quantModes[quantLevel];

  return (
    <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/95 dark:bg-avy-black/95 shadow-xl overflow-hidden font-mono">
      {/* Console Top Header */}
      <div className="p-6 border-b border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-slate-50/80 dark:bg-white/[0.02]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-avy-red dark:text-avy-red-light">
            <Cpu className="w-4 h-4" />
            <span>INTERACTIVE EDGE AI WORKBENCH</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-display">
            TinyML Quantization & Latency Profiler
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded text-xs font-bold border ${current.statusColor}`}>
            {current.status}
          </span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="p-6 sm:p-8 space-y-8">
        {/* Quantization Slider Control */}
        <div className="space-y-4 p-5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="font-bold text-slate-900 dark:text-white">
              PRECISION LEVEL: <span className="text-avy-red dark:text-avy-red-light">{current.name}</span>
            </div>
            <div className="text-slate-500 dark:text-slate-400">
              TARGET: <span className="text-slate-900 dark:text-white font-bold">ARM Cortex-M4 @ 120MHz</span>
            </div>
          </div>

          <div className="relative pt-2">
            <input
              type="range"
              min="0"
              max="3"
              step="1"
              value={quantLevel}
              onChange={(e) => setQuantLevel(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-avy-red"
            />
            <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 font-bold">
              <span className={quantLevel === 0 ? 'text-avy-red' : ''}>FP32 (Cloud)</span>
              <span className={quantLevel === 1 ? 'text-avy-red' : ''}>FP16 (Pruned)</span>
              <span className={quantLevel === 2 ? 'text-avy-red' : ''}>INT8 (Avyantrix Prod)</span>
              <span className={quantLevel === 3 ? 'text-avy-red' : ''}>INT4 (Experimental)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* SRAM Allocation */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
            <div className="text-[10px] text-slate-500 uppercase">SRAM TENSOR ARENA</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {current.sram} KB
            </div>
            {/* Bar meter */}
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  current.sram > 256 ? 'bg-rose-500' : 'bg-emerald-500'
                }`}
                style={{ width: `${Math.min(100, (current.sram / 1280) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-500">MCU SRAM Limit: 256 KB</div>
          </div>

          {/* Inference Latency */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
            <div className="text-[10px] text-slate-500 uppercase">INFERENCE LATENCY</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {current.latency} ms
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-avy-red transition-all duration-300"
                style={{ width: `${Math.min(100, (current.latency / 840) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-500">Real-time budget: &lt;200 ms</div>
          </div>

          {/* Energy per Inference */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
            <div className="text-[10px] text-slate-500 uppercase">ENERGY DRAIN / RUN</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {current.energy} mJ
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-300"
                style={{ width: `${Math.min(100, (current.energy / 48.2) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
              ~{current.batteryDays} Days Continuous Life
            </div>
          </div>

          {/* Anomaly Accuracy */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
            <div className="text-[10px] text-slate-500 uppercase">DETECTION SENSITIVITY</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {current.accuracy}%
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-500 transition-all duration-300"
                style={{ width: `${current.accuracy}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-500">Multi-Center Clinical Benchmark</div>
          </div>
        </div>

        {/* Technical Description Box */}
        <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Architectural Insight:</strong> {current.description}
        </div>
      </div>
    </div>
  );
}
