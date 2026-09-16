import { Venture } from '@/types';

export const venturesList: Venture[] = [
  {
    id: 'wrev',
    slug: 'wrev',
    name: 'WRev',
    tagline: 'Intelligent Respiratory Health & Exposure Monitoring',
    stage: 'Building',
    category: 'Healthcare Technology • IoT • Predictive AI',
    featured: true,
    summary:
      'An integrated physiological and environmental respiratory intelligence system combining portable edge sensing, particulate exposure analysis, and adaptive machine learning baselining.',
    problem:
      'Over 300 million individuals globally manage chronic respiratory conditions such as asthma, COPD, and allergic bronchitis with fragmented, episodic feedback. Critical environmental triggers and gradual baseline deteriorations often go unnoticed until an acute emergency occurs.',
    solution:
      'WRev provides continuous context-aware respiratory monitoring. By synchronizing high-frequency physiological parameters (flow velocity, SpO2, heart rate) with hyper-local environmental data (PM2.5, VOCs, ambient climate), WRev detects adverse trends before they escalate.',
    technology: [
      'Micro-Turbine & Differential Pressure Flow Sensing',
      'Dual-Wavelength Photoplethysmography (PPG)',
      'Hyper-Local Environmental Exposure Array (PM2.5/PM10/VOC)',
      'Low-Power Edge Microcontroller Firmware',
      'Time-Series Anomaly Detection & Baseline Drift Models',
      'Encrypted Real-Time Telemetry & Mobile Sync',
    ],
    metrics: [
      { label: 'Sensing Modalities', value: '7 Physical Vectors' },
      { label: 'Edge Latency', value: '<120ms Signal Processing' },
      { label: 'Current Phase', value: 'Prototype & Lab Validation' },
      { label: 'Platform Scope', value: 'Patient + Clinician Portal' },
    ],
    specs: {
      hardware: [
        'Differential Pressure & Flow Transducer for forced expiratory volume estimation',
        'Optical SpO2 and pulse sensor calibrated for ambulatory movement resilience',
        'Environmental chamber housing optical particulate matter (PM2.5 / PM10) sensor',
        'Ambient barometric pressure, relative humidity, and temperature sensors',
        'High-density Li-Po power management with ultra-low-power sleep modes',
        'BLE 5.3 SoC with hardware cryptographic acceleration',
      ],
      software: [
        'Native cross-platform mobile companion application (iOS & Android)',
        'Local SQLite edge cache for offline operation in low-connectivity zones',
        'Secure End-to-End TLS 1.3 telemetry pipeline',
        'Clinician longitudinal dashboard with exportable clinical summary reports',
        'Configurable patient alert engine with contextual weather integration',
      ],
      intelligence: [
        'Longitudinal baseline modeling: Learns personal diurnal variations',
        'Environmental exposure-response correlation: Identifies individualized trigger thresholds',
        'Exacerbation risk scoring: Early trend detection based on composite biomarkers',
        'Active non-invasive user feedback loop to minimize alert fatigue',
      ],
    },
  },
  {
    id: 'venture-alpha',
    slug: 'future-edge-platform',
    name: 'Venture Pipeline: Initiative II',
    tagline: 'Autonomous Industrial Sensor & Edge Diagnostics',
    stage: 'Research',
    category: 'Industrial IoT • Predictive Maintenance',
    featured: false,
    summary:
      'Exploratory technical investigation into distributed acoustic anomaly detection and high-temperature vibration monitoring for heavy mechanical infrastructure.',
    problem:
      'Legacy industrial operations experience unexpected downtime due to lack of non-invasive, high-frequency physical telemetry.',
    solution:
      'Self-contained, energy-harvesting acoustic sensor nodes coupled with low-parameter transformer models deployed directly on microcontroller silicon.',
    technology: [
      'TinyML Micro-Neural Networks',
      'Acoustic Waveform Analysis',
      'Vibration Spectrometry',
      'Energy Harvesting Harvesters',
    ],
  },
  {
    id: 'venture-beta',
    slug: 'adaptive-systems',
    name: 'Venture Pipeline: Initiative III',
    tagline: 'Human-Centred Assistive Interface Systems',
    stage: 'Concept',
    category: 'Biomedical Systems • Human-Centred Computing',
    featured: false,
    summary:
      'Early-stage architectural scoping for non-invasive neuro-muscular intent recognition systems designed for accessible physical computing interfaces.',
    problem:
      'Standard accessibility interfaces offer rigid, high-latency inputs that do not adapt to individual motor degradation or unique physiology.',
    solution:
      'Adaptive surface electromyography (sEMG) arrays paired with real-time signal classification to enable high-fidelity intuitive digital interaction.',
    technology: [
      'Multi-Channel sEMG Signal Processing',
      'Adaptive Spatial Filtering',
      'Ultra-Low Latency Edge Inference',
      'Universal Accessibility Protocols',
    ],
  },
];
