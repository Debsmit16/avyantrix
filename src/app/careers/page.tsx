import React from 'react';
import { Metadata } from 'next';
import CareersClient from './CareersClient';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Careers & Engineering Pathways | Build Deep Technology',
  description:
    'Join the Avyantrix engineering collective. Explore open technical tracks and fellowships across embedded hardware, biomedical instrumentation, edge AI/ML, and systems software in Kolkata, India.',
  keywords: [
    'Avyantrix Careers',
    'Hardware Engineering Jobs India',
    'Embedded Systems Jobs Kolkata',
    'TinyML Research Roles',
    'Biomedical Engineering Jobs',
    'Deep Tech Careers',
  ],
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers & Engineering Pathways | Avyantrix',
    description:
      'Join our multidisciplinary engineering group building physical IoT hardware, edge intelligence, and biomedical systems.',
    url: 'https://www.avyantrix.com/careers',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.avyantrix.com' },
          { name: 'Careers', url: 'https://www.avyantrix.com/careers' },
        ]}
      />
      <CareersClient />
    </>
  );
}
