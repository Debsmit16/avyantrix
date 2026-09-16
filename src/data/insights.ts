import { InsightArticle } from '@/types';

export const insightArticles: InsightArticle[] = [
  {
    id: 'art-1',
    slug: 'engineering-respiratory-intelligence-wrev',
    title: 'Architecting WRev: Synchronizing Physiological Flow & Environmental Telemetry at the Edge',
    category: 'Technology',
    summary:
      'A deep dive into how multi-modal sensor fusion, micro-turbine differential sensing, and local baseline drift algorithms operate under strict edge power budgets.',
    date: '2026-08-15',
    readTime: '7 min read',
    featured: true,
    author: {
      name: 'Avyantrix Engineering Team',
      role: 'Systems & Embedded Group',
    },
    tags: ['IoT', 'Biomedical Engineering', 'Edge Computing', 'WRev', 'Sensor Fusion'],
    content: {
      lead:
        'Traditional respiratory health monitoring suffers from a fundamental dichotomy: hospital-grade spirometers provide precise snapshot measurements but zero contextual awareness, while consumer smart wearables monitor generic pulse rates without respiratory airflow dynamics or particulate exposure tracking.',
      sections: [
        {
          heading: 'The Challenge of Multi-Modal Edge Sensing',
          body: [
            'When conceptualizing WRev, our goal was not to simply assemble another microcontroller with generic breakout boards. We needed to achieve micro-second synchronization between forced expiratory airflow dynamics and ambient air quality factors (PM2.5, VOCs, ambient barometric shifts).',
            'Airflow measurement requires high sampling frequencies (200Hz+) to capture the steep slope of forced expiratory volume in one second (FEV1) and peak expiratory flow (PEF). Concurrently, optical particulate sensors require active heating resistors and fan chambers that consume substantial milliwatts if left unthrottled.',
          ],
        },
        {
          heading: 'Dual-Stage Power & Signal Pipeline',
          body: [
            'To resolve this tension, WRev implements a dual-stage execution loop. Under resting conditions, the device operates in an ambient surveillance state, pulsing low-power environmental sensors at intermittent duty cycles.',
            'Upon active breath maneuver engagement, hardware interrupts trigger burst sampling on the differential pressure transducer, logging transient flow waveforms into local high-speed circular buffers before executing on-chip baseline compensation.',
          ],
          quote:
            'Continuous health telemetry is only as valuable as the context surrounding it. A drop in peak flow during high PM2.5 exposure carries vastly different clinical meaning than an isolated drop in clean air.',
        },
        {
          heading: 'Longitudinal Baselines vs. Rigid Averages',
          body: [
            'Every human airway responds differently to environmental stress. Rather than evaluating telemetry against rigid population-wide standard deviations, WRev builds an individualized dynamic baseline over 14-day rolling intervals.',
            'This allows the intelligence engine to differentiate between predictable diurnal variations and statistically significant baseline drifts that precede acute exacerbations.',
          ],
        },
      ],
    },
  },
  {
    id: 'art-2',
    slug: 'from-hackathon-to-institution',
    title: 'From Hackathon Prototypes to a Long-Term Innovation Organisation',
    category: 'Company',
    summary:
      'The foundational principles behind evolving from a rapid sprint team into an institution designed for repeatable engineering, deep research, and venture development.',
    date: '2026-07-28',
    readTime: '5 min read',
    featured: false,
    author: {
      name: 'Avyantrix Core Group',
      role: 'Founding & Strategy',
    },
    tags: ['Organisation', 'Philosophy', 'Engineering Culture', 'Ventures'],
    content: {
      lead:
        'Hackathons are exceptional environments for validating speed, technical resourcefulness, and initial proof-of-concepts. However, real-world problems require institutional stamina, rigorous validation, and sustained systems thinking.',
      sections: [
        {
          heading: 'The Limitation of One-Off Projects',
          body: [
            'Most high-potential student and early-career engineering projects die within three months of winning a hackathon or symposium. The incentives disappear, the code repository gathers dust, and the team fractures back into disparate academic or corporate tracks.',
            'Avyantrix was structured specifically to break this cycle. We recognized that the talent, passion, and engineering velocity forged during intense hackathon sprints could be preserved and channeled into permanent venture infrastructure.',
          ],
        },
        {
          heading: 'The 4-Pillar Model',
          body: [
            'Rather than structuring ourselves as a single-product startup that lives or dies on one hypothesis, or a generic services agency that builds other peoples ideas for hourly fees, Avyantrix operates across four synchronized pillars:',
            '1. Ventures: Independent, scalable products solving concrete societal challenges.\n2. Innovation: Applied research and experimental engineering pipeline.\n3. Community: A selective, high-density network of cross-disciplinary builders.\n4. Partnerships: Institutional, clinical, and industrial alliances.',
          ],
        },
        {
          heading: 'Long-Term Thinking Over Hype',
          body: [
            'We prioritize execution fidelity over premature marketing. Deep technology requires patient bench testing, rigorous hardware revisions, and candid peer review. That discipline forms the core of our ethos.',
          ],
        },
      ],
    },
  },
  {
    id: 'art-3',
    slug: 'tinyml-physiological-edge-inference',
    title: 'Deploying Deterministic TinyML on Constrained Physiological Silicon',
    category: 'Research',
    summary:
      'How quantization, structured pruning, and deterministic memory allocation enable real-time anomaly detection on microcontrollers with less than 256KB of SRAM.',
    date: '2026-06-19',
    readTime: '8 min read',
    featured: false,
    author: {
      name: 'Avyantrix Research Lab',
      role: 'Embedded Intelligence',
    },
    tags: ['TinyML', 'Machine Learning', 'Signal Processing', 'Embedded Systems'],
    content: {
      lead:
        'Running machine learning models on cloud servers is trivial; executing low-latency temporal inference on a battery-powered ARM Cortex-M4 microcontroller without overflowing strict heap allocations is a rigorous engineering challenge.',
      sections: [
        {
          heading: 'Memory Budgeting in Biomedical Edge Nodes',
          body: [
            'In wearable biomedical instrumentation, memory fragmentation is catastrophic. A hard fault due to an unhandled heap allocation during an active patient event invalidates the entire safety envelope.',
            'Our edge architecture employs 8-bit integer quantization (INT8) combined with static tensor arena allocation. By compiling model weights directly into flash memory and pre-allocating deterministic buffer pools, we guarantee constant execution time and zero heap churn.',
          ],
        },
        {
          heading: 'Feature Extraction vs. Raw Waveform Ingestion',
          body: [
            'Rather than feeding raw high-frequency waveforms directly into heavy convolutional backbones, we execute domain-informed feature extraction in digital signal processing (DSP) hardware blocks prior to inference.',
            'Extracted frequency-domain energy bands, waveform skewness, and derivative zero-crossing rates reduce input dimensionality by over 90% while retaining critical diagnostic features.',
          ],
        },
      ],
    },
  },
  {
    id: 'art-4',
    slug: 'selective-builder-ecosystem',
    title: 'Why We Cultivate a Selective, Multi-Disciplinary Builder Network',
    category: 'Community',
    summary:
      'Meaningful technology cannot be engineered in mono-disciplinary isolation. The Avyantrix community thesis connects hardware engineers, software developers, clinical researchers, and systems designers.',
    date: '2026-05-10',
    readTime: '4 min read',
    featured: false,
    author: {
      name: 'Avyantrix Community Lead',
      role: 'Ecosystem & Talent',
    },
    tags: ['Community', 'Talent', 'Interdisciplinary', 'Culture'],
    content: {
      lead:
        'The most stubborn engineering problems do not sit neatly within the boundaries of computer science or mechanical design. They exist at the intersections.',
      sections: [
        {
          heading: 'The Anti-Silo Philosophy',
          body: [
            'When building an intelligent health device like WRev, software engineers cannot write algorithms without understanding sensor drift, hardware engineers cannot design enclosures without understanding clinical pulmonary protocols, and product leads cannot design workflows without understanding doctor-patient interaction dynamics.',
            'Our builder network is deliberately curated for interdisciplinary depth. We do not judge candidates merely by resume pedigree, but by their demonstrable track record of building and their eagerness to collaborate outside their comfort zone.',
          ],
        },
      ],
    },
  },
];
