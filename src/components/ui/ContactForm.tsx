'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const topicOptions = [
  { id: 'general', label: 'General Inquiry' },
  { id: 'partnerships', label: 'Partnership / Institutional Collaboration' },
  { id: 'ventures', label: 'Venture Incubation & Proposals' },
  { id: 'wrev', label: 'WRev Product & Clinical Research' },
  { id: 'community', label: 'Selective Builder Community' },
  { id: 'careers', label: 'Careers & Talent Application' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'general',
    message: '',
    honeypot: '', // anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        topic: 'general',
        message: '',
        honeypot: '',
      });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@avyantrix.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel rounded-2xl border-precision p-6 sm:p-8 lg:p-10 relative">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-white/[0.08]">
        <div>
          <Badge variant="red" size="sm">
            DIRECT_DISPATCH
          </Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mt-1">
            Initiate Contact with Avyantrix
          </h3>
        </div>

        <button
          onClick={copyEmail}
          type="button"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
          title="Click to copy official email address"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>hello@avyantrix.com</span>
          {copied && <span className="text-emerald-500 text-[10px]">Copied!</span>}
        </button>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">Transmission Acknowledged</h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Avyantrix. Your message has been routed to our core technical & partnership team. We review all serious inquiries promptly.
          </p>
          <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="website_url_honey"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Full Name <span className="text-avy-red">*</span>
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="e.g. Dr. Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white dark:bg-avy-dark/90 border border-slate-300 dark:border-white/[0.1] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red focus:ring-1 focus:ring-avy-red transition-colors shadow-sm dark:shadow-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Email Address <span className="text-avy-red">*</span>
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="alex@institution.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white dark:bg-avy-dark/90 border border-slate-300 dark:border-white/[0.1] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red focus:ring-1 focus:ring-avy-red transition-colors shadow-sm dark:shadow-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="organization" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Organisation / Affiliation
              </label>
              <input
                id="organization"
                type="text"
                placeholder="University / Enterprise / Lab"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-white dark:bg-avy-dark/90 border border-slate-300 dark:border-white/[0.1] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red focus:ring-1 focus:ring-avy-red transition-colors shadow-sm dark:shadow-none"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Area of Discussion <span className="text-avy-red">*</span>
              </label>
              <select
                id="topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full bg-white dark:bg-avy-dark/90 border border-slate-300 dark:border-white/[0.1] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-avy-red focus:ring-1 focus:ring-avy-red transition-colors shadow-sm dark:shadow-none"
              >
                {topicOptions.map((opt) => (
                  <option key={opt.id} value={opt.id} className="bg-white dark:bg-avy-dark text-slate-900 dark:text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Message / Project Overview <span className="text-avy-red">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Outline your problem statement, collaboration proposal, or technical inquiry with sufficient detail..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white dark:bg-avy-dark/90 border border-slate-300 dark:border-white/[0.1] rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-avy-red focus:ring-1 focus:ring-avy-red transition-colors resize-y shadow-sm dark:shadow-none"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-xs font-medium text-avy-red bg-avy-red/10 p-3 rounded-lg border border-avy-red/20">
              <AlertCircle className="w-4 h-4" />
              <span>Please fill in all mandatory fields before transmitting.</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct dispatches receive acknowledgment within 24–48 hours.
            </p>
            <Button
              type="submit"
              disabled={status === 'submitting'}
              variant="primary"
              size="md"
              className="w-full sm:w-auto min-w-[180px]"
            >
              {status === 'submitting' ? (
                <span>Routing Dispatch...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
