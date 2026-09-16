import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { venturesList } from '@/data/ventures';
import {
  Activity,
  ArrowRight,
  PlusCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Venture Studio & Deep-Tech Portfolio',
  description:
    'Explore the venture portfolio of Avyantrix — engineered deep-tech and healthcare IoT platforms including WRev and future incubation initiatives.',
  alternates: {
    canonical: '/ventures',
  },
  openGraph: {
    title: 'Venture Studio & Deep-Tech Portfolio | Avyantrix',
    description:
      'Originating, engineering, and incubating independent deep-tech ventures and biomedical IoT platforms.',
    url: 'https://www.avyantrix.com/ventures',
    type: 'website',
  },
};

export default function VenturesPage() {
  const featuredVenture = venturesList[0];
  const pipelineVentures = venturesList.slice(1);

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Ventures', url: 'https://www.avyantrix.com/ventures' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Ventures' }]} />

        {/* Hero */}
        <div className="max-w-4xl space-y-6 mb-20">
          <Badge variant="red" size="sm">
            VENTURE STUDIO & INCUBATION
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.1]">
            Avyantrix Ventures:{' '}
            <span className="text-avy-red dark:text-avy-red-light">From Ideas to Enduring Systems.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Avyantrix is structured to repeatedly originate, engineer, and incubate independent technology ventures. We build systems that tackle urgent societal and physiological challenges, translating bench research into resilient, scalable products.
          </p>
        </div>


        {/* =========================================================================
            FEATURED VENTURE: WREV
            ========================================================================= */}
        <section className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-avy-red animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-avy-red dark:text-avy-red-light font-bold">
              FLAGSHIP VENTURE IN DEVELOPMENT
            </span>
          </div>

          <div className="glass-panel border-precision rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden bg-white/95 dark:bg-avy-black/90 shadow-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-avy-red/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="red" size="md">
                    WREV PLATFORM
                  </Badge>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    STAGE: BUILDING / PROTOTYPE
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {featuredVenture.category}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-white font-display">
                  WRev: Respiratory Intelligence for a Changing World
                </h2>

                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {featuredVenture.summary}
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                    <div className="text-xs font-mono text-avy-red uppercase mb-1 font-bold">
                      THE PROBLEM
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {featuredVenture.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                    <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase mb-1 font-bold">
                      THE SOLUTION
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {featuredVenture.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5 uppercase tracking-wider font-semibold">
                    Core Technical Vectors
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredVenture.technology.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button href="/ventures/wrev" variant="primary" size="lg" icon>
                    Explore Complete WRev Specifications
                  </Button>
                  <Button href="/contact?topic=wrev" variant="outline" size="lg">
                    Clinical Collaboration
                  </Button>
                </div>
              </div>

              {/* Specs Column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-avy-dark border border-slate-200 dark:border-white/[0.08] space-y-4 shadow-sm">
                  <div className="font-mono text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-white/[0.08] pb-3">
                    SYSTEM SPECIFICATIONS // ALPHA
                  </div>

                  {featuredVenture.metrics?.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">{m.label}</div>
                      <div className="text-base font-bold text-slate-900 dark:text-white font-mono">{m.value}</div>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    * WRev is actively engineered within the Avyantrix incubation framework. Full hardware revisions and test rigs are in lab operation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FUTURE / UPCOMING VENTURES PIPELINE
            ========================================================================= */}
        <section className="py-16 border-t border-slate-200 dark:border-white/[0.08]" id="incubation">
          <SectionHeader
            badge="VENTURE PIPELINE"
            title="Upcoming & Exploratory Initiatives"
            description="Our structured incubation pipeline where early-stage engineering hypotheses and applied research mature into independent venture architectures."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipelineVentures.map((v) => (
              <div
                key={v.id}
                className="p-6 sm:p-8 rounded-2xl glass-card border-precision flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={v.stage === 'Research' ? 'outline' : 'amber'} size="sm">
                      {v.stage}
                    </Badge>
                    <span className="font-mono text-[10px] text-slate-500 uppercase">
                      PIPELINE_SLOT
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
                    {v.name}
                  </h3>

                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{v.category}</div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {v.summary}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-500 uppercase mb-2">
                      Research Pillars
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {v.technology.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-[10px] font-mono text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-500">
                  <span>STATUS: ACTIVE ARCHITECTURAL SCOPING</span>
                </div>
              </div>
            ))}

            {/* Scalable Placeholder Card for Future Expansion */}
            <div className="p-6 sm:p-8 rounded-2xl border border-dashed border-slate-300 dark:border-white/15 bg-white/[0.01] flex flex-col justify-between items-center text-center py-12">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-400 flex items-center justify-center mb-4">
                <PlusCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-950 dark:text-white">Venture Slot Open</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                  Have a mission-critical deep-tech problem or high-impact engineering concept you want to build?
                </p>
              </div>
              <div className="pt-6">
                <Button href="/contact?topic=ventures" variant="outline" size="sm">
                  Propose a Venture
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
