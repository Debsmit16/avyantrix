import { CareerRole } from '@/types';

export const careerOpportunities: CareerRole[] = [
  {
    id: 'embedded-firmware-eng',
    title: 'Embedded Firmware & Systems Engineer',
    category: 'Hardware & Embedded',
    location: 'Hybrid / Kolkata, India',
    type: 'Full-time',
    status: 'Actively Scouting',
    description:
      'Architect and optimize ultra-low-power firmware for BLE-connected biomedical and environmental sensing hardware with real-time DSP filters.',
    responsibilities: [
      'Write deterministic C/C++ firmware for ARM Cortex-M and Nordic/Espressif SoC architectures.',
      'Implement digital signal processing pipelines for multi-sensor physiological and environmental streams.',
      'Design low-power sleep modes, DMA transfers, and robust over-the-air (OTA) firmware upgrade protocols.',
      'Collaborate with hardware designers on PCB bring-up, oscilloscopes, logic analyzers, and EMC validation.',
    ],
    requirements: [
      'Strong proficiency in C/C++, RTOS (FreeRTOS or Zephyr), and embedded debugging tools.',
      'Hands-on experience with I2C, SPI, UART, BLE 5.x, and ADC conversion interfaces.',
      'Familiarity with low-power hardware design constraints and battery management ICs.',
    ],
    technologies: ['C/C++', 'FreeRTOS', 'Zephyr RTOS', 'ARM Cortex-M', 'BLE 5.3', 'Altium / KiCad'],
  },
  {
    id: 'tinyml-research-eng',
    title: 'TinyML & Time-Series Machine Learning Engineer',
    category: 'AI/ML',
    location: 'Hybrid / Remote',
    type: 'Full-time',
    status: 'Actively Scouting',
    description:
      'Design, quantize, and benchmark edge neural network models and anomaly detection pipelines for real-time physiological signal analysis.',
    responsibilities: [
      'Develop lightweight models for physiological waveform classification, baseline drift estimation, and signal quality indexing.',
      'Quantize and optimize deep learning architectures for execution on microcontrollers via TensorFlow Lite for Microcontrollers / Edge Impulse.',
      'Build synthetic validation pipelines and benchmark models against clinical open-access datasets.',
    ],
    requirements: [
      'Demonstrated experience with Python, PyTorch/TensorFlow, and signal processing libraries (SciPy, NumPy).',
      'Understanding of INT8/INT4 model quantization, pruning, and embedded memory constraints.',
      'Background in biological signals (PPG, ECG, spirometry waveforms) or environmental time-series data.',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow Lite for Microcontrollers', 'Signal Processing', 'DSP'],
  },
  {
    id: 'fullstack-cloud-eng',
    title: 'Full-Stack & Cloud Systems Architect',
    category: 'Software',
    location: 'Hybrid / Remote',
    type: 'Full-time',
    status: 'Open Application',
    description:
      'Build end-to-end encrypted telemetry ingestion pipelines, clinician web dashboards, and high-performance mobile APIs.',
    responsibilities: [
      'Develop resilient distributed ingestion backends capable of parsing high-frequency sensor streams.',
      'Build reactive, accessible clinician portals and patient analytics dashboards using Next.js and TypeScript.',
      'Enforce zero-trust security architectures, HIPAA/GDPR-compliant encryption at rest and in transit.',
    ],
    requirements: [
      'Proven expertise in Next.js, TypeScript, Node.js/Go, and modern PostgreSQL/time-series databases.',
      'Experience building authenticated, real-time WebSocket/gRPC and REST microservices.',
      'Knowledge of cloud infrastructure (AWS/GCP), Docker, and infrastructure-as-code.',
    ],
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'Go', 'PostgreSQL', 'TimescaleDB', 'Docker'],
  },
  {
    id: 'biomedical-validation-fellow',
    title: 'Biomedical Engineering & Clinical Validation Fellow',
    category: 'Biomedical & Clinical',
    location: 'Kolkata, India',
    type: 'Fellowship',
    status: 'Open Application',
    description:
      'Lead laboratory validation protocols, calibration test benches, and literature alignment for pulmonary diagnostic parameters.',
    responsibilities: [
      'Design test rigs and calibration benches for spirometric flow rate validation and gas sensor response verification.',
      'Synthesize peer-reviewed respiratory health guidelines (ATS/ERS standards) and translate them into engineering tolerances.',
      'Prepare technical documentation, validation reports, and ethical review compliance frameworks.',
    ],
    requirements: [
      'Degree or active studies in Biomedical Engineering, Biotechnology, Pulmonology, or related discipline.',
      'Hands-on experience with physiological transducers, laboratory calibration rigs, and statistical validation.',
    ],
    technologies: ['Biomedical Instrumentation', 'ATS/ERS Standards', 'MATLAB/Python', 'Clinical Protocols'],
  },
  {
    id: 'product-systems-designer',
    title: 'Product & Human-Centred Systems Designer',
    category: 'Product & Design',
    location: 'Remote',
    type: 'Collaborator',
    status: 'Open Application',
    description:
      'Design intuitive, high-legibility interfaces and physical ergonomics for patients and clinicians navigating complex medical telemetry.',
    responsibilities: [
      'Design mobile and web UX for stress-free patient data comprehension and high-density clinician dashboards.',
      'Collaborate with industrial designers on ergonomics, physical button interactions, and enclosure usability.',
      'Maintain and expand the Avyantrix enterprise design system with strict accessibility standards.',
    ],
    requirements: [
      'Strong portfolio showcasing deep-tech, healthcare, or complex system interface design.',
      'Deep mastery of Figma, design systems, micro-interactions, and accessibility (WCAG 2.1 AA).',
    ],
    technologies: ['Figma', 'Design Systems', 'WCAG AA', 'Design Tokens', 'Prototyping'],
  },
  {
    id: 'research-collaborator',
    title: 'Research & Academic Collaborator',
    category: 'Research',
    location: 'Flexible / Academic',
    type: 'Collaborator',
    status: 'Open Application',
    description:
      'Co-author research publications, participate in joint laboratory experiments, and investigate novel sensing technologies.',
    responsibilities: [
      'Collaborate on joint technical papers, grant proposals, and translational engineering projects.',
      'Bridge university research groups with Avyantrix venture development infrastructure.',
    ],
    requirements: [
      'Affiliation with an academic institution, research laboratory, or independent research collective.',
    ],
    technologies: ['Technical Writing', 'Experimental Design', 'Grant Proposals', 'Peer Review'],
  },
];
