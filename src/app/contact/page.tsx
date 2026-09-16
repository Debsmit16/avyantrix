import React from 'react';
import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { ContactForm } from '@/components/ui/ContactForm';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Direct Dispatch',
  description:
    'Initiate contact with the Avyantrix engineering, venture, and institutional partnership groups. Official inquiries and collaboration proposals.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Direct Dispatch | Avyantrix',
    description:
      'Initiate direct communication with Avyantrix engineering and leadership.',
    url: 'https://www.avyantrix.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Contact', url: 'https://www.avyantrix.com/contact' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact & Dispatch' }]} />


        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-16">
          <Badge variant="red" size="sm">
            DIRECT COMMUNICATIONS
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            Connect with Avyantrix.
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Whether you are proposing an institutional research alliance, discussing clinical validation for WRev, or applying to our selective builder network, our leadership and technical teams review all serious dispatches directly.
          </p>
        </div>

        {/* Grid: Left Contact Info / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Credentials & Protocol */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl glass-card border-precision space-y-6 shadow-md dark:shadow-none">
              <div className="font-mono text-xs text-avy-red dark:text-avy-red-light uppercase tracking-wider font-bold">
                OFFICIAL SYSTEM CHANNELS
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-avy-red/10 text-avy-red dark:text-avy-red-light border border-avy-red/20 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Primary Dispatch</div>
                    <div className="text-base font-bold text-slate-950 dark:text-white font-mono">
                      hello@avyantrix.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Engineering Node</div>
                    <div className="text-sm font-semibold text-slate-950 dark:text-white">
                      Kolkata, India
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      Coordinates: 22.5726° N, 88.3639° E
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Response SLA</div>
                    <div className="text-sm font-semibold text-slate-950 dark:text-white">
                      24 to 48 Hours
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Inquiries undergo technical triage prior to routing.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-500 dark:text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Confidentiality & IP Safeguards</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  All shared proprietary technical details, clinical trial protocols, and venture concepts are treated with strict confidentiality.
                </p>
              </div>
            </div>

            {/* Quick Routing Guidelines */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] space-y-3 font-mono text-xs">
              <div className="text-slate-500 dark:text-slate-400 uppercase text-[10px] font-semibold">ROUTING MATRIX</div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                <li>• <strong>Partnerships:</strong> Routed to Executive & Systems Group</li>
                <li>• <strong>WRev Clinical:</strong> Routed to Biomedical & Regulatory Leads</li>
                <li>• <strong>Community:</strong> Routed to Builder Network Review Board</li>
                <li>• <strong>Careers:</strong> Routed to Technical Hiring Leads</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
