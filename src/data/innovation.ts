export interface InnovationDomain {
  id: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  currentExploration: string;
}

export const innovationDisciplines: InnovationDomain[] = [
  {
    id: 'edge-intelligence',
    title: 'Edge AI & Micro-Neural Inference',
    category: 'Intelligence Layer',
    summary:
      'Developing quantized, deterministic machine learning architectures tailored for microcontrollers with constrained power and memory footprints.',
    capabilities: [
      'INT8 / INT4 Quantization and Pruning',
      'Non-Linear Time-Series Anomaly Detection',
      'Deterministic Flash Memory Placement',
      'Real-Time Signal Quality Indexing (SQI)',
    ],
    currentExploration:
      'Benchmarking 1D convolutional residual networks on ARM Cortex-M4 for millisecond-level wheeze and crackle acoustics classification.',
  },
  {
    id: 'physiological-sensing',
    title: 'Physiological Instrumentation & Transducers',
    category: 'Biomedical Engineering',
    summary:
      'Engineering non-invasive, high-fidelity transducers for ambulatory cardiovascular, respiratory, and neuromuscular telemetry.',
    capabilities: [
      'Micro-Turbine & Differential Pressure Dynamics',
      'Dual-Wavelength PPG Signal Reconstruction',
      'Motion-Artifact Cancellation Algorithms',
      'Low-Noise Analog Front-End (AFE) Design',
    ],
    currentExploration:
      'Optimizing venturi-effect flow chamber geometry to minimize exhalation resistance while maintaining sub-millibar pressure differential sensitivity.',
  },
  {
    id: 'environmental-iot',
    title: 'Hyper-Local Environmental Exposure Sensing',
    category: 'Hardware & Systems',
    summary:
      'Integrating micro-particulate, chemical gas, and micro-climatic sensors into compact wearable and stationary form factors.',
    capabilities: [
      'Laser Scattering PM2.5 / PM10 Measurement',
      'MOX Multi-Gas VOC / NOx Profiling',
      'Barometric & Ambient Enthalpy Tracking',
      'Dynamic Duty-Cycle Power Management',
    ],
    currentExploration:
      'Dynamic power-gating heuristics that adjust particulate sensor heating cycles based on user movement and ambient ventilation shifts.',
  },
  {
    id: 'distributed-telemetry',
    title: 'Encrypted Distributed Telemetry & Systems',
    category: 'Software Architecture',
    summary:
      'Architecting fault-tolerant, low-latency communication protocols between edge sensing nodes, mobile gateways, and analytical clouds.',
    capabilities: [
      'BLE 5.3 Low-Power Stream Protocol',
      'Offline-First Local SQLite Ledger',
      'Zero-Knowledge End-to-End Encryption',
      'Longitudinal Time-Series Aggregation',
    ],
    currentExploration:
      'Testing delta-compression algorithms on physiological waveform packets to reduce BLE transmission energy by 42%.',
  },
];

export const innovationPipelineSteps = [
  {
    step: '01',
    title: 'Problem Identification',
    desc: 'Uncompromising discovery of high-friction societal, clinical, or physical bottlenecks.',
  },
  {
    step: '02',
    title: 'Deep Literature & Research',
    desc: 'Rigorous analysis of academic literature, prior art, patents, and thermodynamic/clinical limits.',
  },
  {
    step: '03',
    title: 'Theoretical Hypothesis',
    desc: 'Mathematical and algorithmic formulation of the solution mechanism before touching silicon.',
  },
  {
    step: '04',
    title: 'Rapid Bench Prototype',
    desc: 'Breadboard, optical, and mechanical rapid prototyping for tangible physical verification.',
  },
  {
    step: '05',
    title: 'Empirical Experimentation',
    desc: 'Structured stress testing, noise characterization, and signal-to-noise ratio optimization.',
  },
  {
    step: '06',
    title: 'Validation & Benchmarking',
    desc: 'Comparative evaluation against gold-standard laboratory instruments and peer scrutiny.',
  },
  {
    step: '07',
    title: 'Product & Venture Spin-Off',
    desc: 'Maturation into a dedicated, scalable Avyantrix venture with full engineering and deployment support.',
  },
];

export const technicalReports = [
  {
    title: 'WRev Technical Architecture & Calibration Benchmark Report',
    code: 'AVY-TR-2025-01',
    category: 'Biomedical IoT',
    date: '2025',
    status: 'Internal Whitepaper / Incubation Archive',
    summary:
      'Comprehensive system specification covering differential pressure flow sensing calibration curves, optical SpO2 motion filtering, and power budget analysis.',
  },
  {
    title: 'Deterministic Edge Inference on Resource-Constrained Silicon',
    code: 'AVY-TR-2025-02',
    category: 'Edge AI',
    date: '2025',
    status: 'Research Working Paper',
    summary:
      'Exploration of memory footprint optimization, static tensor arena layouts, and INT8 quantization for real-time physiological time-series processing.',
  },
  {
    title: 'Longitudinal Exposure-Response Baselines in Urban Respiratory Telemetry',
    code: 'AVY-TR-2026-01',
    category: 'Clinical Systems',
    date: '2026',
    status: 'In Peer Review Preparation',
    summary:
      'Study protocol and mathematical framework for calculating composite vulnerability indices from synchronized PM2.5 and forced expiratory volume telemetry.',
  },
];
