'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Check, Mail } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 1000);
  };

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
        <Check className="w-4 h-4 shrink-0" />
        <span>Subscribed to Avyantrix Engineering Dispatches.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
      <div className="relative flex-1">
        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="email"
          required
          placeholder="engineer@institute.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-avy-dark border border-white/[0.1] rounded-lg pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-avy-red focus:ring-1 focus:ring-avy-red transition-colors"
        />
      </div>
      <Button type="submit" variant="primary" size="sm" className="whitespace-nowrap">
        Subscribe
      </Button>
    </form>
  );
}
