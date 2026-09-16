import React from 'react';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.avyantrix.com/#organization',
    name: 'Avyantrix',
    legalName: 'Avyantrix',
    url: 'https://www.avyantrix.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.avyantrix.com/brand/avyantrix-logo.png',
      width: 800,
      height: 800,
      caption: 'Avyantrix Official Brand Logo',
    },
    description:
      'Avyantrix is a deep-tech and venture innovation organisation that unites multidisciplinary engineering, applied research, and venture development to build transformative solutions.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/avyantrix',
      'https://linkedin.com/company/avyantrix',
    ],
    knowsAbout: [
      'Biomedical Engineering',
      'Respiratory Health Technology',
      'Edge AI & TinyML',
      'Internet of Things (IoT)',
      'Venture Studio & Prototyping',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.avyantrix.com/#website',
    url: 'https://www.avyantrix.com',
    name: 'Avyantrix',
    publisher: {
      '@id': 'https://www.avyantrix.com/#organization',
    },
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  category: string;
  image?: string;
}

export function ProductJsonLd({
  name,
  description,
  url,
  category,
  image = 'https://www.avyantrix.com/brand/avyantrix-logo.png',
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: name,
    description: description,
    url: url,
    image: image,
    category: category,
    brand: {
      '@type': 'Brand',
      name: 'Avyantrix',
    },
    manufacturer: {
      '@id': 'https://www.avyantrix.com/#organization',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
  keywords: string[];
  image?: string;
}

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  authorName,
  keywords,
  image = 'https://www.avyantrix.com/brand/avyantrix-logo.png',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: headline,
    description: description,
    url: url,
    image: image,
    datePublished: new Date(datePublished).toISOString(),
    dateModified: new Date(datePublished).toISOString(),
    author: {
      '@type': 'Organization',
      name: authorName || 'Avyantrix Engineering Group',
      url: 'https://www.avyantrix.com',
    },
    publisher: {
      '@id': 'https://www.avyantrix.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords.join(', '),
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
