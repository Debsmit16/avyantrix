import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avyantrix.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Avyantrix | Technology, Innovation & Ventures',
    template: '%s | Avyantrix',
  },
  description:
    'Avyantrix is a deep-tech and venture innovation organisation that unites multidisciplinary engineering, applied research, and venture incubation to create meaningful real-world solutions.',
  keywords: [
    'Avyantrix',
    'Deep Tech',
    'WRev',
    'Healthcare IoT',
    'Respiratory Intelligence',
    'Edge AI',
    'TinyML',
    'Hardware Engineering',
    'Innovation Studio',
    'Biomedical Systems',
  ],
  authors: [{ name: 'Avyantrix Engineering Group' }],
  creator: 'Avyantrix',
  publisher: 'Avyantrix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/brand/avyantrix-logo.png',
    shortcut: '/brand/avyantrix-logo.png',
    apple: '/brand/avyantrix-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.avyantrix.com',
    siteName: 'Avyantrix',
    title: 'Avyantrix | Technology, Innovation & Ventures',
    description:
      'Engineering ideas into real-world impact. A deep-tech organisation pioneering integrated biomedical IoT, edge intelligence, and scalable ventures.',
    images: [
      {
        url: '/brand/avyantrix-logo.png',
        width: 800,
        height: 800,
        alt: 'Avyantrix Official Brand Identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avyantrix | Technology, Innovation & Ventures',
    description:
      'Engineering ideas into real-world impact. A deep-tech organisation pioneering integrated biomedical IoT, edge intelligence, and scalable ventures.',
    images: ['/brand/avyantrix-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-avy-black text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-avy-red selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

