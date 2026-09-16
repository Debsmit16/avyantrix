'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  defaultTrack?: string;
}

export function ApplicationModal({
  isOpen,
  onClose,
  title = 'Selective Builder Community Application',
  defaultTrack = 'Hardware & Embedded Systems',
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    githubOrPortfolio: '',
    track: defaultTrack,
    pastWork: '',
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border-precision p-6 sm:p-8 bg-white dark:bg-avy-black shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Application Logged</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Your profile and engineering artifacts have been recorded in the Avyantrix candidate queue. If your track matches an active project sprint or research initiative, our team will connect directly.
            </p>
            <Button variant="secondary" onClick={handleClose} size="sm">
              Close Window
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <Badge variant="red" size="sm">
                CANDIDATE_APPLICATION
              </Badge>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white mt-1.5">{title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                We review demonstrable technical projects, code repositories, and physical engineering portfolios.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Suman Sen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-avy-dark border border-slate-300 dark:border-white/[0.1] rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="suman@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-avy-dark border border-slate-300 dark:border-white/[0.1] rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    GitHub / Portfolio / Lab Link *
                  </label>
                  <input
                    required
                    type="url"
                    placeholder="https://github.com/username"
                    value={formData.githubOrPortfolio}
                    onChange={(e) =>
                      setFormData({ ...formData, githubOrPortfolio: e.target.value })
                    }
                    className="w-full bg-slate-50 dark:bg-avy-dark border border-slate-300 dark:border-white/[0.1] rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Primary Domain Track *
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-avy-dark border border-slate-300 dark:border-white/[0.1] rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-avy-red"
                  >
                    <option>Hardware & Embedded Systems</option>
                    <option>AI & Edge Intelligence</option>
                    <option>Systems & Full-Stack Engineering</option>
                    <option>Biomedical & Clinical Sciences</option>
                    <option>Product & Human-Centred Design</option>
                    <option>Strategy, Legal & Technology Governance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Most Significant Project or System You Have Engineered *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the architectural challenge, constraints, what you built, and what you learned..."
                  value={formData.pastWork}
                  onChange={(e) => setFormData({ ...formData, pastWork: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-avy-dark border border-slate-300 dark:border-white/[0.1] rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red resize-y"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                  Why Avyantrix? (What problem do you want to solve?) *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Why are you drawn to deep-tech, long-term engineering, or our venture pipeline?"
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-avy-dark border border-slate-300 dark:border-white/[0.1] rounded-lg px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red resize-y"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                <Button type="button" variant="ghost" size="sm" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  <span>Submit Profile</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
