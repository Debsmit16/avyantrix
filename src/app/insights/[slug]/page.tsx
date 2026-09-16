import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insightArticles } from '@/data/insights';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TechGridBackground } from '@/components/ui/TechGridBackground';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Quote, Compass } from 'lucide-react';

interface InsightArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: InsightArticlePageProps) {
  const article = insightArticles.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found | Insights',
    };
  }

  return {
    title: `${article.title} | Insights`,
    description: article.summary,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://www.avyantrix.com/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: '/brand/avyantrix-logo.png',
          width: 800,
          height: 800,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: ['/brand/avyantrix-logo.png'],
    },
  };
}

export default function InsightArticlePage({ params }: InsightArticlePageProps) {
  const article = insightArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <TechGridBackground />

      <ArticleJsonLd
        headline={article.title}
        description={article.summary}
        url={`https://www.avyantrix.com/insights/${article.slug}`}
        datePublished={article.date}
        authorName={article.author.name}
        keywords={article.tags}
      />

      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Insights', url: 'https://www.avyantrix.com/insights' },
          { name: article.category, url: `https://www.avyantrix.com/insights?cat=${article.category}` },
          { name: article.title, url: `https://www.avyantrix.com/insights/${article.slug}` },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Insights', href: '/insights' },
            { label: article.category, href: `/insights?cat=${article.category}` },
            { label: article.title },
          ]}
        />

        {/* Article Hero */}
        <header className="space-y-6 pt-4 pb-12 border-b border-slate-200 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <Badge variant="red" size="sm">
              {article.category}
            </Badge>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(article.date)}
            </span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white font-display leading-[1.15]">
            {article.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-avy-dark border border-slate-200 dark:border-white/[0.1] flex items-center justify-center font-mono text-xs font-bold text-avy-red dark:text-avy-red-light">
              AVY
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{article.author.name}</div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{article.author.role}</div>
            </div>
          </div>
        </header>

        {/* Lead Summary Callout */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl glass-card border-precision bg-white dark:bg-white/[0.02]">
          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-normal italic">
            &ldquo;{article.content.lead}&rdquo;
          </p>
        </div>

        {/* Body Content Sections */}
        <div className="space-y-12 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          {article.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white font-display tracking-tight">
                {section.heading}
              </h2>

              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.quote && (
                <div className="my-6 pl-5 border-l-2 border-avy-red py-2 italic text-slate-800 dark:text-slate-200 bg-avy-red/5 rounded-r-xl p-4 text-sm sm:text-base">
                  <Quote className="w-5 h-5 text-avy-red mb-2 not-italic" />
                  {section.quote}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* In-Content Relevant Pillar Anchor */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border-precision border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-xs uppercase tracking-wider text-avy-red dark:text-avy-red-light font-bold">
              RELATED AVYANTRIX ARCHITECTURE
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {article.id === 'art-1' && 'Explore the full WRev Flagship Healthcare IoT & Respiratory Platform.'}
              {article.id === 'art-2' && 'Read the complete Avyantrix Genesis, Philosophy & 4-Pillar Model.'}
              {article.id === 'art-3' && 'Discover our Applied R&D Labs, Signal Processing & TinyML Pipelines.'}
              {article.id === 'art-4' && 'Learn about our Selective Builder Network and Application Tracks.'}
            </p>
          </div>
          <Link
            href={
              article.id === 'art-1'
                ? '/ventures/wrev'
                : article.id === 'art-2'
                ? '/about'
                : article.id === 'art-3'
                ? '/innovation'
                : '/community'
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold hover:bg-avy-red dark:hover:bg-avy-red dark:hover:text-white transition-all shrink-0"
          >
            <span>
              {article.id === 'art-1' && 'View WRev Platform'}
              {article.id === 'art-2' && 'View About Avyantrix'}
              {article.id === 'art-3' && 'View Innovation Labs'}
              {article.id === 'art-4' && 'View Builder Network'}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tags */}
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-400 dark:text-slate-500 mr-2" />
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Link */}
        <div className="pt-8">
          <Button href="/insights" variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Return to All Dispatches</span>
          </Button>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-16 mt-16 border-t border-slate-200 dark:border-white/[0.08]">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-6 font-display">
              Related Engineering Dispatches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/insights/${rel.slug}`}
                  className="p-6 rounded-2xl glass-card border-precision hover:border-avy-red/40 transition-colors group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="font-mono text-xs text-avy-red dark:text-avy-red-light font-semibold">{rel.category}</div>
                    <h4 className="text-base font-bold text-slate-950 dark:text-white group-hover:text-avy-red dark:group-hover:text-avy-red-light transition-colors">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-4 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white flex items-center gap-1 font-semibold">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
