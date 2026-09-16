'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RefreshCw, Zap, Wind, HeartPulse, Activity, Sliders, ShieldCheck } from 'lucide-react';

type ChannelType = 'spirometry' | 'ppg' | 'particulate' | 'tinyml';

interface TelemetryPoint {
  time: number;
  val: number;
}

export function SignalOscilloscope() {
  const [activeChannel, setActiveChannel] = useState<ChannelType>('spirometry');
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [sweepSpeed, setSweepSpeed] = useState<number>(1);
  const [filterEnabled, setFilterEnabled] = useState<boolean>(true);
  const [anomalyInjected, setAnomalyInjected] = useState<boolean>(false);
  const [activeMetric, setActiveMetric] = useState({
    primary: '3.84 L',
    primaryLabel: 'FEV1 (FORCED EXPIRATORY)',
    secondary: '4.62 L/s',
    secondaryLabel: 'PEAK EXPIRATORY FLOW',
    sampleRate: '200 Hz',
    resolution: '24-Bit ADC',
    status: 'OPTIMAL (94.8% PRED)',
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);
  const dataBufferRef = useRef<number[]>([]);
  const anomalyTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Switch channel handler
  const switchChannel = (chan: ChannelType) => {
    setActiveChannel(chan);
    dataBufferRef.current = [];
    phaseRef.current = 0;

    switch (chan) {
      case 'spirometry':
        setActiveMetric({
          primary: '3.84 L',
          primaryLabel: 'FEV1 (FORCED EXPIRATORY)',
          secondary: '4.62 L/s',
          secondaryLabel: 'PEAK EXPIRATORY FLOW',
          sampleRate: '200 Hz',
          resolution: '24-Bit Differential',
          status: 'ATS/ERS PASS',
        });
        break;
      case 'ppg':
        setActiveMetric({
          primary: '98.6 %',
          primaryLabel: 'SpO2 ARTERIAL SATURATION',
          secondary: '68 BPM',
          secondaryLabel: 'PULSE RATE (RESTING)',
          sampleRate: '100 Hz',
          resolution: 'Dual-Wavelength IR',
          status: 'DICROTIC NOTCH NOMINAL',
        });
        break;
      case 'particulate':
        setActiveMetric({
          primary: '28.4 µg/m³',
          primaryLabel: 'PM2.5 MICRO-ZONE AQI',
          secondary: '0.42 µm',
          secondaryLabel: 'MEDIAN SCATTER DIAMETER',
          sampleRate: '10 Hz',
          resolution: 'Laser Scatter Optical',
          status: 'MODERATE AMBIENT',
        });
        break;
      case 'tinyml':
        setActiveMetric({
          primary: '112 ms',
          primaryLabel: 'ON-CHIP INFERENCE LATENCY',
          secondary: '164 KB',
          secondaryLabel: 'SRAM ARENA FOOTPRINT',
          sampleRate: 'Rolling 14-Day',
          resolution: 'INT8 Quantized Cortex-M4',
          status: 'ANOMALY PROB: 0.04 (NOMINAL)',
        });
        break;
    }
  };

  // Trigger burst action
  const triggerEvent = () => {
    setAnomalyInjected(true);
    if (anomalyTimerRef.current) clearTimeout(anomalyTimerRef.current);
    anomalyTimerRef.current = setTimeout(() => {
      setAnomalyInjected(false);
    }, 3500);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 640);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 240;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      if (isRunning) {
        phaseRef.current += 0.04 * sweepSpeed;

        let sample = 0;
        const p = phaseRef.current;

        if (activeChannel === 'spirometry') {
          // Expiratory curve waveform with steep rise & exponential decay + small noise
          const cycle = p % (Math.PI * 4);
          if (cycle < Math.PI * 1.5) {
            // Peak burst
            sample = Math.sin(cycle * 1.2) * Math.exp(-cycle * 0.4) * 1.6;
          } else {
            // Baseline recovery
            sample = Math.sin(cycle * 0.5) * 0.08;
          }
          if (anomalyInjected) {
            // Bronchoconstriction flow limitation pattern: scoop out mid-expiratory flow
            if (cycle < Math.PI * 1.5) {
              sample *= 0.55 + Math.sin(cycle * 10) * 0.15;
            }
          }
        } else if (activeChannel === 'ppg') {
          // Arterial pulse: systolic peak + dicrotic notch + diastolic decline
          const cycle = p % (Math.PI * 2);
          const systolic = Math.sin(cycle) * Math.exp(-cycle * 0.4);
          const dicrotic = cycle > 1.2 ? Math.sin((cycle - 1.2) * 3) * 0.28 * Math.exp(-(cycle - 1.2) * 1.2) : 0;
          sample = Math.max(0, systolic + dicrotic);
          if (anomalyInjected) {
            // Motion artifact noise injection
            sample += (Math.random() - 0.5) * 0.6;
          }
        } else if (activeChannel === 'particulate') {
          // Laser aerosol scattering random walk with periodic smoke/particulate surges
          const baseAerosol = Math.sin(p * 0.3) * 0.25 + 0.4;
          const laserScatterNoise = (Math.random() - 0.5) * 0.15;
          const burst = anomalyInjected ? Math.sin(p * 2.5) * 0.7 + 0.8 : 0;
          sample = Math.max(0.05, baseAerosol + laserScatterNoise + burst);
        } else if (activeChannel === 'tinyml') {
          // Neural activation confidence & drift index
          const activation = Math.sin(p * 0.8) * 0.3 + 0.5;
          const anomalyScore = anomalyInjected ? 0.88 + Math.random() * 0.1 : 0.04 + Math.random() * 0.03;
          sample = anomalyScore;
        }

        // Low-pass filter application if enabled
        if (filterEnabled && activeChannel === 'ppg' && anomalyInjected) {
          sample = sample * 0.7; // Dampen motion noise
        }

        dataBufferRef.current.push(sample);
        const maxPoints = Math.floor(width / 2);
        if (dataBufferRef.current.length > maxPoints) {
          dataBufferRef.current.shift();
        }
      }

      // Draw Screen Frame
      ctx.fillStyle = '#07080a';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';

      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Center Baseline
      ctx.strokeStyle = 'rgba(239, 35, 60, 0.2)';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7);
      ctx.lineTo(width, height * 0.7);
      ctx.stroke();

      // Draw Waveform
      if (dataBufferRef.current.length > 1) {
        const primaryColor =
          activeChannel === 'spirometry'
            ? '#ef233c'
            : activeChannel === 'ppg'
            ? '#10b981'
            : activeChannel === 'particulate'
            ? '#f59e0b'
            : '#38bdf8';

        // Glow pass
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 8;
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = primaryColor;

        ctx.beginPath();
        const pts = dataBufferRef.current;
        const baselineY = height * 0.72;
        const scaleFactor = height * 0.45;

        for (let i = 0; i < pts.length; i++) {
          const x = (i / pts.length) * width;
          const y = baselineY - pts[i] * scaleFactor;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Area under curve gradient
        ctx.shadowBlur = 0;
        ctx.lineTo(width, baselineY);
        ctx.lineTo(0, baselineY);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, `${primaryColor}22`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fill();

        // Cursor Leading Point
        if (pts.length > 0) {
          const lastX = width - 2;
          const lastY = baselineY - pts[pts.length - 1] * scaleFactor;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(lastX, lastY, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Corner Reticle & Coordinate Markers
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '9px monospace';
      ctx.fillText(`CH_A // ${activeChannel.toUpperCase()}`, 12, 18);
      ctx.fillText(`SWEEP: ${sweepSpeed}x | 200 SPS`, 12, 32);
      ctx.fillText(`STATUS: ${anomalyInjected ? 'EVENT DETECTED' : 'LOCKED'}`, width - 130, 18);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
      if (anomalyTimerRef.current) clearTimeout(anomalyTimerRef.current);
    };
  }, [activeChannel, isRunning, sweepSpeed, filterEnabled, anomalyInjected]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#08090d] text-slate-200 overflow-hidden shadow-2xl relative font-mono">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#0d0f16] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/60 border border-avy-red/40 text-avy-red-light font-bold text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-avy-red animate-ping" />
            <span>LIVE TRANSDUCER TELEMETRY</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">
            DSP_PIPELINE // REV_3.1
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterEnabled(!filterEnabled)}
            className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-colors flex items-center gap-1 ${
              filterEnabled
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                : 'bg-white/5 border-slate-700 text-slate-400'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>KALMAN FILTER: {filterEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1.5 rounded bg-white/5 border border-slate-700 hover:border-slate-500 text-slate-300 transition-colors"
            title={isRunning ? 'Pause Stream' : 'Resume Stream'}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={triggerEvent}
            className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-all flex items-center gap-1 ${
              anomalyInjected
                ? 'bg-avy-red text-white border-avy-red shadow-lg shadow-avy-red/30'
                : 'bg-white/5 border-slate-700 hover:border-avy-red/50 text-slate-300'
            }`}
          >
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>
              {activeChannel === 'spirometry'
                ? 'EXHALATION'
                : activeChannel === 'particulate'
                ? 'AEROSOL SURGE'
                : activeChannel === 'ppg'
                ? 'PULSE SPIKE'
                : 'DRIFT EVENT'}
            </span>
          </button>
        </div>
      </div>

      {/* Channel Selector Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-800 text-xs bg-[#0b0d13]">
        <button
          onClick={() => switchChannel('spirometry')}
          className={`p-3 text-left border-r border-slate-800 transition-colors flex items-center gap-2 ${
            activeChannel === 'spirometry'
              ? 'bg-avy-red/15 text-white border-b-2 border-b-avy-red'
              : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
          }`}
        >
          <Wind className="w-4 h-4 text-avy-red shrink-0" />
          <div className="truncate">
            <div className="font-bold text-[11px] truncate">01. SPIROMETRY</div>
            <div className="text-[9px] text-slate-500 font-sans truncate">Venturi Flow / FEV1</div>
          </div>
        </button>

        <button
          onClick={() => switchChannel('ppg')}
          className={`p-3 text-left border-r border-slate-800 transition-colors flex items-center gap-2 ${
            activeChannel === 'ppg'
              ? 'bg-emerald-500/15 text-white border-b-2 border-b-emerald-400'
              : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
          }`}
        >
          <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0" />
          <div className="truncate">
            <div className="font-bold text-[11px] truncate">02. OPTICAL PPG</div>
            <div className="text-[9px] text-slate-500 font-sans truncate">SpO2 & Pulse Wave</div>
          </div>
        </button>

        <button
          onClick={() => switchChannel('particulate')}
          className={`p-3 text-left border-r border-slate-800 transition-colors flex items-center gap-2 ${
            activeChannel === 'particulate'
              ? 'bg-amber-500/15 text-white border-b-2 border-b-amber-400'
              : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
          }`}
        >
          <Activity className="w-4 h-4 text-amber-400 shrink-0" />
          <div className="truncate">
            <div className="font-bold text-[11px] truncate">03. LASER AQI</div>
            <div className="text-[9px] text-slate-500 font-sans truncate">PM2.5 / PM10 Scatter</div>
          </div>
        </button>

        <button
          onClick={() => switchChannel('tinyml')}
          className={`p-3 text-left transition-colors flex items-center gap-2 ${
            activeChannel === 'tinyml'
              ? 'bg-sky-500/15 text-white border-b-2 border-b-sky-400'
              : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
          }`}
        >
          <Sliders className="w-4 h-4 text-sky-400 shrink-0" />
          <div className="truncate">
            <div className="font-bold text-[11px] truncate">04. EDGE TINYML</div>
            <div className="text-[9px] text-slate-500 font-sans truncate">Anomaly Classifier</div>
          </div>
        </button>
      </div>

      {/* Canvas Oscilloscope Display */}
      <div className="relative w-full h-[240px] bg-black">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Real-Time Telemetry HUD Overlays */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800 flex items-center gap-4 text-xs">
          <div>
            <div className="text-[9px] text-slate-500 uppercase">{activeMetric.primaryLabel}</div>
            <div className="text-base font-bold text-white leading-tight">{activeMetric.primary}</div>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div>
            <div className="text-[9px] text-slate-500 uppercase">{activeMetric.secondaryLabel}</div>
            <div className="text-sm font-bold text-slate-300 leading-tight">{activeMetric.secondary}</div>
          </div>
        </div>

        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-slate-800 text-[10px] space-y-0.5 text-right hidden sm:block">
          <div className="text-slate-400">
            RATE: <span className="text-white font-bold">{activeMetric.sampleRate}</span>
          </div>
          <div className="text-slate-400">
            RESOLUTION: <span className="text-white font-bold">{activeMetric.resolution}</span>
          </div>
          <div className="text-emerald-400 font-bold">{activeMetric.status}</div>
        </div>
      </div>

      {/* Bottom Technical Spec Bar */}
      <div className="px-4 py-2.5 bg-[#090b10] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>REAL-TIME PHYSIOLOGICAL & SENSOR DSP STREAM</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSweepSpeed(sweepSpeed === 1 ? 2 : sweepSpeed === 2 ? 0.5 : 1)}
            className="hover:text-white transition-colors underline"
          >
            SWEEP: {sweepSpeed}X
          </button>
          <span>•</span>
          <span className="text-slate-500">ARM CORTEX-M4 HARDWARE TARGET</span>
        </div>
      </div>
    </div>
  );
}
