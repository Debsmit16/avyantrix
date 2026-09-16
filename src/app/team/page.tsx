import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { teamMembers, contributorsList } from '@/data/team';
import { Github, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership & Engineering Collective',
  description:
    'The multidisciplinary leadership, core engineering, research, and advisory group driving Avyantrix ventures and applied technology.',
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Leadership & Engineering Collective | Avyantrix',
    description:
      'The multidisciplinary engineering, biomedical research, and systems collective driving Avyantrix.',
    url: 'https://www.avyantrix.com/team',
    type: 'website',
  },
};

export default function TeamPage() {
  const leadership = teamMembers.filter((m) => m.category === 'Leadership');
  const coreEngineering = teamMembers.filter(
    (m) => m.category === 'Core Engineering' || m.category === 'Research'
  );
  const advisors = teamMembers.filter((m) => m.category === 'Advisors');

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Team', url: 'https://www.avyantrix.com/team' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Team & Governance' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-20">
          <Badge variant="red" size="sm">
            PEOPLE & GOVERNANCE
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            Avyantrix Team:{' '}
            <span className="text-avy-red dark:text-avy-red-light">United by Uncompromising Engineering.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Avyantrix is built by multidisciplinary engineers, researchers, and designers. We operate with an open, meritocratic structure where technical competence, intellectual honesty, and tangible contributions define leadership.
          </p>
        </div>


        {/* =========================================================================
            SECTION: LEADERSHIP & CORE TEAM
            ========================================================================= */}
        <section className="py-12 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            eyebrow="SYSTEM LEADERSHIP"
            title="Founding & Core Technical Group"
            description="The engineers and architects directing systems design, firmware development, biomedical instrumentation, and venture operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...leadership, ...coreEngineering].map((member) => (
              <div
                key={member.id}
                className="p-6 sm:p-7 rounded-2xl glass-card border-precision flex flex-col justify-between space-y-6 group hover:border-avy-red/40 transition-all"
              >
                <div className="space-y-4">
                  {/* Avatar / Monogram Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-xl bg-slate-100 dark:bg-avy-dark border border-slate-200 dark:border-white/[0.12] flex items-center justify-center text-lg font-mono font-bold text-slate-900 dark:text-white group-hover:border-avy-red/60 group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors shadow-inner">
                      {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>

                    <Badge variant="outline" size="sm">
                      {member.category}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.focus.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-[10px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Socials */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">AVYANTRIX // CORE</span>
                  <div className="flex items-center space-x-2">
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: ADVISORY & RESEARCH MENTORS
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            badge="GOVERNANCE & ADVISORY"
            title="Technical & Clinical Advisory Board"
            description="Institutional advisors and clinical domain experts providing guidance on validation methodology, regulatory compliance, and venture governance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="p-8 rounded-2xl glass-card border-precision space-y-4"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="outline" size="sm">
                    {advisor.category}
                  </Badge>
                  <span className="font-mono text-xs text-slate-500">ADVISORY SEAT</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{advisor.name}</h3>
                <div className="text-xs font-mono text-avy-red dark:text-avy-red-light font-bold">
                  {advisor.role}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{advisor.bio}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {advisor.focus.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION: CONTRIBUTORS & ALUMNI REGISTRY
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]">
          <SectionHeader
            eyebrow="CONTRIBUTOR REGISTRY"
            title="Contributors & Alumni"
            description="Recognizing engineers, designers, and researchers who have contributed to Avyantrix prototypes, hackathons, and technical reports."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contributorsList.map((c, idx) => (
              <div key={idx} className="p-6 rounded-xl glass-card border-precision space-y-2">
                <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-bold">{c.track}</div>
                <h4 className="text-base font-bold text-slate-950 dark:text-white">{c.role}</h4>
                <div className="text-[11px] font-mono text-slate-500">{c.tenure}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">{c.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join the Team CTA */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08] text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            Want to build with our core engineering team?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            We are actively scouting systems engineers, TinyML specialists, and clinical researchers for active venture developments.
          </p>
          <Button href="/careers" variant="primary" size="lg">
            View Career Pathways & Roles
          </Button>
        </section>
      </div>
    </div>
  );
}
