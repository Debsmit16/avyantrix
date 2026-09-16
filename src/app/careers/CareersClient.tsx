'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { ApplicationModal } from '@/components/ui/ApplicationModal';
import { careerOpportunities } from '@/data/careers';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CareersClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeRoleTitle, setActiveRoleTitle] = useState('General Engineering Talent');

  const categories = [
    'All',
    'Hardware & Embedded',
    'AI/ML',
    'Software',
    'Biomedical & Clinical',
    'Product & Design',
    'Research',
  ];

  const filteredRoles =
    selectedCategory === 'All'
      ? careerOpportunities
      : careerOpportunities.filter((r) => r.category === selectedCategory);

  const handleOpenApplication = (title?: string) => {
    if (title) setActiveRoleTitle(title);
    setModalOpen(true);
  };

  const culturePoints = [
    {
      title: 'First-Principles Thinking',
      desc: 'We do not copy standard patterns. We derive engineering constraints from physical realities, sensor dynamics, and patient safety requirements.',
    },
    {
      title: 'Speed with Engineering Rigor',
      desc: 'We iterate with high technical velocity, maintaining the disciplined validation standards required for medical IoT.',
    },
    {
      title: 'Deep Multi-Disciplinary Exposure',
      desc: 'You will not be confined to a narrow silo. Firmware engineers understand biomedical physiology; software developers learn microcontroller interrupts.',
    },
    {
      title: 'Direct Ownership & Impact',
      desc: 'Every team member works directly on systems that touch real hardware and real human health telemetry.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers & Talent' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-20">
          <Badge variant="red" size="sm">
            CAREERS & FELLOWSHIPS
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.08]">
            Careers at Avyantrix:{' '}
            <span className="text-avy-red dark:text-avy-red-light">Build Systems That Matter.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            We are looking for engineers, researchers, and builders who are energized by difficult physical constraints, real-time telemetry, and high-impact biomedical challenges.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button onClick={() => handleOpenApplication()} variant="primary" size="lg">
              Send Your Profile
            </Button>
            <Button href="#roles" variant="outline" size="lg">
              Explore Open Roles
            </Button>
          </div>
        </div>

        {/* =========================================================================
            SECTION: HOW WE WORK & CULTURE
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            badge="ENGINEERING CULTURE"
            title="How We Build at Avyantrix"
            description="Our core operational standards for anyone designing circuits, writing firmware, or architecting systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl glass-card border-precision space-y-3"
              >
                <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">
                  STANDARD 0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-950 dark:text-white">{point.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: OPEN OPPORTUNITIES
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]" id="roles">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-avy-red dark:text-avy-red-light font-bold mb-2">
                ACTIVE SCOUTING & TALENT CHANNELS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
                Current Areas of Opportunity
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-avy-red text-white font-bold shadow-md shadow-avy-red/20'
                      : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="p-6 sm:p-8 rounded-2xl glass-card border-precision space-y-6 group hover:border-avy-red/40 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.06]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5 font-mono text-xs">
                      <Badge variant="red" size="sm">
                        {role.category}
                      </Badge>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {role.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
                      {role.title}
                    </h3>
                  </div>

                  <Button
                    onClick={() => handleOpenApplication(role.title)}
                    variant="primary"
                    size="sm"
                    className="shrink-0"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{role.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Core Responsibilities
                    </div>
                    <ul className="space-y-1.5">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-avy-red mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Key Competencies
                    </div>
                    <ul className="space-y-1.5">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 mt-1.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">Toolchains:</span>
                  {role.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-[10px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Application Banner */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border-precision bg-white/95 dark:bg-avy-black/95 text-center space-y-6 shadow-xl">
            <Badge variant="outline" size="sm" className="mx-auto">
              OPEN INITIATIVE TALENT
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Do not see an exact match for your specialty?
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              We frequently create bespoke roles and fellowships for exceptional builders, student researchers, and technical specialists who demonstrate extraordinary capability.
            </p>

            <Button onClick={() => handleOpenApplication()} variant="primary" size="lg">
              Send Your General Profile
            </Button>
          </div>
        </section>
      </div>

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Apply: ${activeRoleTitle}`}
      />
    </div>
  );
}
