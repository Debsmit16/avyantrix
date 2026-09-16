import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerNavigation } from '@/data/navigation';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { Github, Linkedin, MapPin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-avy-black border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden text-slate-400">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid-dense opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-avy-red/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-white/[0.08] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-white/20 bg-black p-1 shadow-lg group-hover:border-avy-red/60 transition-colors">
                <Image
                  src="/brand/avyantrix-logo.png"
                  alt="Avyantrix"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-wider text-white">
                  AVYANTRIX
                </span>
                <div className="font-mono text-[10px] tracking-[0.25em] text-avy-red-light uppercase">
                  ENGINEERING • INNOVATION • VENTURES
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Building meaningful technology through disciplined engineering, applied research, and selective venture incubation. From initial prototype to real-world impact.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-avy-red" />
                <span>Kolkata, India</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>avyantrix.com</span>
              </span>
            </div>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-6 space-y-3 lg:pl-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-avy-red" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                Technical Dispatches & Research Updates
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to periodic research notes, hardware telemetry updates, and venture milestones from the Avyantrix engineering group.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Multi-Column Sitemap Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4 pb-1 border-b border-white/[0.08]">
              Organisation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4 pb-1 border-b border-white/[0.08]">
              Ventures
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.ventures.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Innovation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4 pb-1 border-b border-white/[0.08]">
              Innovation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.innovation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4 pb-1 border-b border-white/[0.08]">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.community.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4 pb-1 border-b border-white/[0.08]">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.ecosystem.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4 pb-1 border-b border-white/[0.08]">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates & Copyright */}
      <div className="bg-black/90 border-t border-white/[0.06] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-slate-300">© 2026 Avyantrix. All rights reserved.</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-avy-red-light font-semibold">Built by Avyantrix.</span>
            </div>

            {/* Status light */}
            <div className="flex items-center gap-2 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 text-[11px]">
                SYSTEMS_NOMINAL // NODE: KOLKATA, INDIA
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/avyantrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Avyantrix GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/avyantrix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Avyantrix LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
