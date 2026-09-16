import React from 'react';
import { Metadata } from 'next';
import CommunityClient from './CommunityClient';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Selective Builder Community & Deep-Tech Talent Network',
  description:
    'A curated network of exceptional builders, hardware engineers, firmware developers, and researchers collaborating on real-world deep technology and venture pathways at Avyantrix.',
  keywords: [
    'Avyantrix Community',
    'Deep Tech Builder Network',
    'Hardware Engineering Network',
    'Biomedical Engineering Fellowship',
    'Kolkata Tech Community',
    'Embedded Systems Builders',
  ],
  alternates: {
    canonical: '/community',
  },
  openGraph: {
    title: 'Selective Builder Community & Deep-Tech Talent Network | Avyantrix',
    description:
      'Connecting exceptional minds across hardware, AI, biomedical systems, and design to engineer real-world solutions.',
    url: 'https://www.avyantrix.com/community',
    type: 'website',
  },
};

export default function CommunityPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Community', url: 'https://www.avyantrix.com/community' },
        ]}
      />
      <CommunityClient />
    </>
  );
}
