import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Founding Engineer / Leadership',
    role: 'Systems Architecture & Technical Lead',
    category: 'Leadership',
    bio: 'Leads cross-disciplinary technical engineering and research initiatives across embedded hardware, IoT edge processing, and systems design at Avyantrix.',
    focus: ['Embedded Systems', 'IoT Hardware', 'Signal Processing'],
    socials: {
      github: 'https://github.com/avyantrix',
      linkedin: 'https://linkedin.com/company/avyantrix',
    },
  },
  {
    id: 'team-2',
    name: 'Core Engineer / AI & Firmware',
    role: 'Machine Learning & Edge Intelligence',
    category: 'Core Engineering',
    bio: 'Specializes in low-latency time-series analysis, TinyML firmware optimization, and sensor calibration algorithms for WRev and exploratory ventures.',
    focus: ['TinyML', 'Edge Firmware', 'Time-Series Models'],
    socials: {
      github: 'https://github.com/avyantrix',
      linkedin: 'https://linkedin.com/company/avyantrix',
    },
  },
  {
    id: 'team-3',
    name: 'Biomedical & Hardware Researcher',
    role: 'Physiological Instrumentation & Testing',
    category: 'Research',
    bio: 'Conducts benchmark studies on non-invasive physiological sensors, differential pressure flow calibration, and clinical literature alignment.',
    focus: ['Biomedical Sensors', 'Experimental Validation', 'Regulatory Standards'],
    socials: {
      linkedin: 'https://linkedin.com/company/avyantrix',
    },
  },
  {
    id: 'team-4',
    name: 'Software & Cloud Architect',
    role: 'Distributed Systems & Mobile Architecture',
    category: 'Core Engineering',
    bio: 'Architects end-to-end data pipelines, real-time telemetry protocols, and high-reliability clinician & patient application interfaces.',
    focus: ['Cloud Architecture', 'Mobile Systems', 'Data Security'],
    socials: {
      github: 'https://github.com/avyantrix',
      linkedin: 'https://linkedin.com/company/avyantrix',
    },
  },
  {
    id: 'advisor-1',
    name: 'Technical Advisory Board (Seat Open)',
    role: 'Academic & Industry Advisor',
    category: 'Advisors',
    bio: 'Advises on scaling embedded hardware validation, institutional research grants, and deep-tech incubation governance.',
    focus: ['Deep-Tech Incubation', 'Institutional Strategy', 'Translational Engineering'],
  },
  {
    id: 'advisor-2',
    name: 'Clinical Research Advisor (Seat Open)',
    role: 'Pulmonology & Health Systems Advisor',
    category: 'Advisors',
    bio: 'Provides guidance on respiratory physiology benchmarks, validation protocols, and hospital system workflows.',
    focus: ['Pulmonology', 'Clinical Trials Methodology', 'Digital Health'],
  },
];

export const contributorsList = [
  {
    role: 'Hardware Prototyping Contributor',
    track: 'Hardware & 3D Prototyping',
    tenure: '2024 - Present',
    note: 'Contributed to early mechanical enclosures and fluid dynamics chamber for spirometry testing.',
  },
  {
    role: 'Mobile Systems Contributor',
    track: 'Cross-Platform App Development',
    tenure: '2024 - Present',
    note: 'Assisted in BLE stream synchronization and offline SQLite cache implementations.',
  },
  {
    role: 'Biomedical Literature Fellow',
    track: 'Translational Research',
    tenure: '2024 - Present',
    note: 'Conducted comparative evaluations of forced expiratory volume algorithms against open clinical datasets.',
  },
];
