import React from 'react';
import { Metadata } from 'next';
import InsightsClient from './InsightsClient';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Engineering Dispatches, Architecture & Research Insights',
  description:
    'Technical whitepapers, embedded engineering notes, and biomedical IoT research dispatches published by the Avyantrix technical group.',
  keywords: [
    'Avyantrix Insights',
    'Deep Tech Research Notes',
    'Biomedical Engineering Whitepapers',
    'TinyML IoT Articles',
    'Edge Computing Healthcare',
    'Engineering Culture India',
  ],
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    title: 'Engineering Dispatches, Architecture & Research Insights | Avyantrix',
    description:
      'Direct technical documentation, biomedical sensor telemetry, and systems architecture from the Avyantrix engineering group.',
    url: 'https://www.avyantrix.com/insights',
    type: 'website',
  },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Insights', url: 'https://www.avyantrix.com/insights' },
        ]}
      />
      <InsightsClient />
    </>
  );
}
