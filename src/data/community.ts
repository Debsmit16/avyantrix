export interface CommunityTrack {
  id: string;
  title: string;
  focus: string;
  skills: string[];
  contribution: string;
}

export const communityTracks: CommunityTrack[] = [
  {
    id: 'embedded-hardware',
    title: 'Hardware & Embedded Systems',
    focus: 'Microcontroller architecture, circuit design, sensor interfaces, and PCB bring-up.',
    skills: ['C/C++', 'KiCad / Altium', 'ARM Cortex', 'Oscilloscopes', 'I2C/SPI/BLE'],
    contribution: 'Design physical test fixtures, sensor breakout boards, and firmware drivers.',
  },
  {
    id: 'ai-edge-ml',
    title: 'AI & Edge Intelligence',
    focus: 'Time-series modeling, TinyML quantization, anomaly detection, and signal processing.',
    skills: ['PyTorch', 'TinyML', 'DSP', 'NumPy/SciPy', 'C++ Inference'],
    contribution: 'Build signal filtering pipelines and test lightweight neural architectures on edge boards.',
  },
  {
    id: 'software-cloud',
    title: 'Systems & Full-Stack Engineering',
    focus: 'Low-latency telemetry backends, clinician dashboards, mobile synchronization, and API design.',
    skills: ['TypeScript', 'Next.js', 'Go / Rust', 'PostgreSQL', 'WebSockets / gRPC'],
    contribution: 'Build robust data bridges, analytics visualizations, and secure distributed infrastructure.',
  },
  {
    id: 'biomedical-medicine',
    title: 'Biomedical & Clinical Sciences',
    focus: 'Physiology, clinical literature, validation protocols, pulmonary health, and diagnostic standards.',
    skills: ['Physiology', 'Clinical Protocols', 'ATS/ERS Standards', 'Literature Synthesis'],
    contribution: 'Benchmark sensor data against clinical standards and design rigorous experimental validation plans.',
  },
  {
    id: 'design-human-factors',
    title: 'Product & Human-Centred Design',
    focus: 'Ergonomic hardware design, accessible interfaces, data legibility, and clinical UX.',
    skills: ['Figma', 'Design Systems', '3D CAD / Prototyping', 'Accessibility (WCAG)'],
    contribution: 'Craft intuitive physical enclosure prototypes and high-clarity data dashboards.',
  },
  {
    id: 'ip-strategy-business',
    title: 'Strategy, Legal & Technology Governance',
    focus: 'Patent research, deep-tech business models, regulatory landscapes, and institutional grants.',
    skills: ['Prior Art Search', 'Grant Writing', 'Deep-Tech Economics', 'Tech Policy'],
    contribution: 'Map regulatory clearance pathways, analyze competitive patents, and prepare institutional applications.',
  },
];

export const selectionPrinciples = [
  {
    title: 'Proven Bias for Action',
    desc: 'We prioritize individuals who have built, broken, tested, and shipped real things over those who merely talk about theory.',
  },
  {
    title: 'Intellectual Rigor & Honesty',
    desc: 'Deep engineering requires acknowledging what does not work, questioning flawed assumptions, and pursuing root causes.',
  },
  {
    title: 'Interdisciplinary Empathy',
    desc: 'Great builders respect disciplines outside their own and actively seek to understand the constraints faced by teammates.',
  },
  {
    title: 'Long-Horizon Stamina',
    desc: 'Hard technical problems are not solved in 24-hour sprints alone. We look for individuals with the patience to build enduring solutions.',
  },
];
