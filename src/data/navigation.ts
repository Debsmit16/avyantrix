import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { name: 'About', href: '/about' },
  {
    name: 'Ventures',
    href: '/ventures',
    children: [
      { name: 'Overview', href: '/ventures', description: 'Our venture studio and problem-solving thesis' },
      { name: 'WRev (Featured)', href: '/ventures/wrev', description: 'Intelligent respiratory health IoT & AI platform' },
    ],
  },
  { name: 'Innovation', href: '/innovation' },
  { name: 'Community', href: '/community', badge: 'Selective' },
  { name: 'Team', href: '/team' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  company: [
    { name: 'About Avyantrix', href: '/about' },
    { name: 'Leadership & Team', href: '/team' },
    { name: 'Career Pathways', href: '/careers' },
    { name: 'Direct Contact', href: '/contact' },
  ],
  ventures: [
    { name: 'WRev Health Platform', href: '/ventures/wrev' },
    { name: 'Ventures Portfolio', href: '/ventures' },
    { name: 'Incubation Model', href: '/ventures#incubation' },
    { name: 'Propose a Venture', href: '/contact?topic=ventures' },
  ],
  innovation: [
    { name: 'R&D Pipeline', href: '/innovation#pipeline' },
    { name: 'Embedded & Edge AI', href: '/innovation#disciplines' },
    { name: 'Physiological Sensing', href: '/innovation#disciplines' },
    { name: 'Publications & Reports', href: '/innovation#publications' },
  ],
  community: [
    { name: 'Selective Builder Network', href: '/community' },
    { name: 'Builder Tracks', href: '/community#tracks' },
    { name: 'Selection Criteria', href: '/community#criteria' },
    { name: 'Apply to Join', href: '/community#apply' },
  ],
  ecosystem: [
    { name: 'Partnership Overview', href: '/partners' },
    { name: 'Academic Collaboration', href: '/partners#academic' },
    { name: 'Clinical & Health Alliances', href: '/partners#clinical' },
    { name: 'Institutional Incubators', href: '/partners#incubators' },
  ],
  resources: [
    { name: 'Editorial Insights', href: '/insights' },
    { name: 'Engineering Updates', href: '/insights?cat=Technology' },
    { name: 'Research Dispatches', href: '/insights?cat=Research' },
    { name: 'Brand & Media Kit', href: '/about#brand' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/contact#privacy' },
    { name: 'Terms of Use', href: '/contact#terms' },
    { name: 'IP & Attribution Notice', href: '/about#ip' },
  ],
};
