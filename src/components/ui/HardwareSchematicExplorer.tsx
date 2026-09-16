'use client';

import React, { useState } from 'react';
import { Layers, Cpu, Radio, Shield, Zap, Sliders, ChevronRight, Activity, Terminal } from 'lucide-react';

interface SchematicNode {
  id: string;
  stageNum: string;
  name: string;
  subname: string;
  category: string;
  specs: { label: string; value: string }[];
  description: string;
  firmwareStack: string;
  tolerance: string;
  pinout: string[];
}

export function HardwareSchematicExplorer() {
  const nodes: SchematicNode[] = [
    {
      id: 'venturi',
      stageNum: '01',
      name: 'Micro-Venturi Flow Chamber',
      subname: 'Differential Pressure Transducer',
      category: 'FLUIDIC SENSING',
      specs: [
        { label: 'Sensing Range', value: '0.05 to 14.0 L/s' },
        { label: 'Sampling Rate', value: '200 Hz (Nyquist Overclocked)' },
        { label: 'Pressure Sensitivity', value: '<0.1 Pa Differential' },
        { label: 'Dynamic Deadspace', value: '<18 mL Chamber Vol' },
      ],
      description:
        'Custom aerodynamic constriction geometry generating a calibrated Bernoulli pressure drop across precision piezoresistive silicon membranes with zero moving parts.',
      firmwareStack: 'Discrete ATS/ERS Curve Integration & Flow Resistance Auto-Zeroing',
      tolerance: '±2.5% FEV1 / FVC Gold-Standard Volumetric Accuracy',
      pinout: ['I2C_SDA (PB7)', 'I2C_SCL (PB6)', 'VCC_3V3_CLEAN', 'GND_ANALOG_ISOLATED'],
    },
    {
      id: 'laser_aqi',
      stageNum: '02',
      name: 'Laser Aerosol Scattering Cavity',
      subname: 'Particulate Photometer Engine',
      category: 'ENVIRONMENTAL SENSING',
      specs: [
        { label: 'Particle Sizing', value: '0.3 µm to 10.0 µm (PM1, PM2.5, PM10)' },
        { label: 'Light Source', value: '650 nm Solid-State Laser Diode' },
        { label: 'Chamber Throughput', value: '0.1 L/min Micro-Fan Flow' },
        { label: 'Aerosol Range', value: '0 – 1,000 µg/m³' },
      ],
      description:
        'High-speed optical laser scattering chamber that quantifies real-time airborne particulate density within the subject immediate breathing column.',
      firmwareStack: 'Mie-Scattering Pulse Height Analysis & Baseline Humidity Compensation',
      tolerance: '±10% Mass Concentration Calibration vs Beta-Attenuation Standard',
      pinout: ['UART2_TX (PA2)', 'UART2_RX (PA3)', 'FAN_PWM_CTRL (PB1)', 'LASER_EN (PB0)'],
    },
    {
      id: 'afe_adc',
      stageNum: '03',
      name: 'Low-Noise Analog Front-End',
      subname: '24-Bit Delta-Sigma Converter',
      category: 'SIGNAL DIGITIZATION',
      specs: [
        { label: 'ADC Resolution', value: '24-Bit True ENOB 21.4' },
        { label: 'PGA Gain', value: '1x to 128x Programmable' },
        { label: 'CMRR', value: '>115 dB @ 50/60 Hz' },
        { label: 'Input Noise', value: '45 nV RMS' },
      ],
      description:
        'Medical-grade low-noise biopotential and bridge amplifier isolating micro-volt transducer shifts from ambient electromagnetic noise and motor artifacts.',
      firmwareStack: 'Synchronous SPI DMA Ring Buffering & Sinc4 Anti-Aliasing Decimation',
      tolerance: 'Ultra-low temperature drift (<5 ppm/°C)',
      pinout: ['SPI1_SCK (PA5)', 'SPI1_MISO (PA6)', 'SPI1_MOSI (PA7)', 'ADC_DRDY_INT (PC4)'],
    },
    {
      id: 'edge_tinyml',
      stageNum: '04',
      name: 'ARM Cortex-M4 Microcontroller',
      subname: 'Quantized Edge AI Engine',
      category: 'EDGE COMPUTING',
      specs: [
        { label: 'Clock Speed', value: '120 MHz (Dynamic Frequency Scaling)' },
        { label: 'Tensor Arena', value: '164 KB Static SRAM Allocation' },
        { label: 'Inference Latency', value: '112 ms Deterministic' },
        { label: 'Quantization', value: 'INT8 Symmetric Per-Channel' },
      ],
      description:
        'Zero-heap edge compute core executing individualized baseline drift classification and acute respiratory restriction detection locally without cloud round-trips.',
      firmwareStack: 'Bare-Metal FreeRTOS + TensorFlow Lite Micro Runtime with CMSIS-NN Kernels',
      tolerance: '98.6% Anomaly Sensitivity against Multi-Center Clinical Dataset',
      pinout: ['SWD_CLK', 'SWD_DIO', 'RESET_N', 'VBAT_MONITOR (PC1)'],
    },
    {
      id: 'telemetry_ble',
      stageNum: '05',
      name: 'BLE 5.3 & Secure Local Ledger',
      subname: 'Encrypted Transceiver Ring',
      category: 'COMMUNICATIONS & STORAGE',
      specs: [
        { label: 'RF Sensitivity', value: '-97 dBm Long-Range Coded PHY' },
        { label: 'Local Storage', value: '32 MB Encrypted Flash Buffer (14-Day)' },
        { label: 'Security', value: 'AES-CCM 256-Bit Hardware Cryptography' },
        { label: 'Power Draw', value: '3.8 mA Rx / 4.6 mA Tx @ 0 dBm' },
      ],
      description:
        'Continuous offline-first sync engine. Preserves clinical time-series integrity during zero-connectivity field missions, auto-negotiating encrypted bulk transfers.',
      firmwareStack: 'Custom GATT Health Device Profile + Chunked Resumable Transport Layer',
      tolerance: 'Zero Data-Loss Guaranteed via Flash Write Journaling',
      pinout: ['ANT_50_OHM', 'BLE_INT (PB4)', 'FLASH_CS (PA4)', 'LED_STATUS_RED (PB12)'],
    },
  ];

  const [activeNodeId, setActiveNodeId] = useState<string>('venturi');
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="rounded-3xl border border-slate-300 dark:border-white/10 bg-white/95 dark:bg-avy-black/95 shadow-xl overflow-hidden font-mono">
      {/* Top Header */}
      <div className="p-6 border-b border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4 bg-slate-50/80 dark:bg-white/[0.02]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-avy-red dark:text-avy-red-light">
            <Layers className="w-4 h-4" />
            <span>INTERACTIVE SIGNAL CHAIN & SILICON TOPOLOGY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-display">
            WRev Physical Hardware Architecture
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="px-2 py-1 rounded bg-slate-200 dark:bg-white/[0.06] font-semibold text-slate-800 dark:text-slate-200">
            REV_2.4 SCHEMATIC
          </span>
          <span>•</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ALL BUSES VERIFIED</span>
        </div>
      </div>

      {/* Schematic Node Stepper Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-100/60 dark:bg-white/[0.01]">
        {nodes.map((node) => {
          const isActive = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`p-4 text-left border-r border-b sm:border-b-0 border-slate-200 dark:border-white/[0.08] transition-all relative ${
                isActive
                  ? 'bg-white dark:bg-avy-card text-slate-950 dark:text-white shadow-inner'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-white/60 dark:hover:bg-white/[0.03]'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-avy-red" />
              )}
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-avy-red dark:text-avy-red-light">
                  STAGE {node.stageNum}
                </span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500">
                  {node.category.split(' ')[0]}
                </span>
              </div>
              <div className="text-xs font-bold truncate text-slate-900 dark:text-white">
                {node.name.split(' ')[0]} {node.name.split(' ')[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Stage */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Deep Specs & Pinouts */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-avy-red dark:text-avy-red-light font-bold">
              <span>{activeNode.category}</span>
              <span>//</span>
              <span>STAGE {activeNode.stageNum}</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-950 dark:text-white font-display">
              {activeNode.name}
            </h4>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {activeNode.subname}
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed pt-2">
              {activeNode.description}
            </p>
          </div>

          {/* Key Engineering Specs Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {activeNode.specs.map((sp, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-0.5"
              >
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">
                  {sp.label}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {sp.value}
                </div>
              </div>
            ))}
          </div>

          {/* Validation & Clinical Benchmark */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] space-y-1">
            <div className="text-[10px] uppercase text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <Shield className="w-3 h-3" />
              <span>CALIBRATION & VALIDATION CRITERIA</span>
            </div>
            <div className="text-xs text-slate-800 dark:text-slate-200 font-sans">
              {activeNode.tolerance}
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Firmware Stack & Pinout Bus */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-avy-red-light font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>FIRMWARE & DRIVER LAYER</span>
              </div>
              <span className="text-[10px] text-slate-500">C99 / RTOS</span>
            </div>

            <div className="text-xs text-slate-300 font-sans leading-relaxed">
              {activeNode.firmwareStack}
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                ACTIVE BUS & GPIO ROUTING
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {activeNode.pinout.map((pin, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-1.5 rounded bg-white/[0.04] border border-slate-800 text-[10px] text-slate-300 text-center font-mono"
                  >
                    {pin}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-avy-red/5 border border-avy-red/20 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span className="text-[11px] font-mono">Want raw Gerber / CAD schematics?</span>
            <a
              href="/contact?topic=wrev_cad"
              className="text-avy-red dark:text-avy-red-light font-bold hover:underline shrink-0"
            >
              Request Specs →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
