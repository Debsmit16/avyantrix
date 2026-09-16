'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-avy-black/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08] shadow-md dark:shadow-2xl dark:shadow-black/60 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Logo Brand Container */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-lg overflow-hidden border border-slate-300 dark:border-white/[0.12] bg-black p-0.5 group-hover:border-avy-red/60 transition-colors shadow-md">
              <Image
                src="/brand/avyantrix-logo.png"
                alt="Avyantrix Official Logo"
                width={44}
                height={44}
                priority
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-slate-900 dark:text-white group-hover:text-avy-red transition-colors">
                AVYANTRIX
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase -mt-1">
                INNOVATION • VENTURES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5',
                        isActive
                          ? 'text-slate-900 dark:text-white bg-slate-200/70 dark:bg-white/[0.08] font-semibold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-transform" />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1.5 w-64 rounded-xl glass-panel border-precision p-2 bg-white/95 dark:bg-avy-black/95 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors group"
                          >
                            <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-avy-red transition-colors">
                              {child.name}
                            </div>
                            {child.description && (
                              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative flex items-center gap-1.5',
                    isActive
                      ? 'text-slate-900 dark:text-white bg-slate-200/70 dark:bg-white/[0.08] font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04]'
                  )}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-avy-red/15 text-avy-red dark:text-avy-red-light border border-avy-red/25 font-semibold">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-avy-red rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Build With Us
            </Button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors border border-slate-300 dark:border-white/[0.08]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-avy-black/98 border-b border-slate-200 dark:border-white/[0.1] px-4 pt-4 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="space-y-1">
                <Link
                  href={item.href}
                  className={cn(
                    'block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-avy-red/10 dark:bg-avy-red/15 text-avy-red dark:text-avy-red-light font-bold border border-avy-red/25'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-avy-red/15 text-avy-red dark:text-avy-red-light font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>

                {item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-1.5 rounded-md text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/[0.08] flex flex-col gap-2">
            <Button href="/contact" variant="primary" size="md" className="w-full">
              Build With Us
            </Button>
            <Button href="/community" variant="secondary" size="md" className="w-full">
              Apply to Community
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
