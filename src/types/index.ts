export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  children?: {
    name: string;
    href: string;
    description?: string;
  }[];
}

export interface Venture {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  stage: 'Building' | 'Concept' | 'Incubating' | 'Research';
  category: string;
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  image?: string;
  specs?: {
    hardware?: string[];
    software?: string[];
    intelligence?: string[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Core Engineering' | 'Research' | 'Advisors';
  bio: string;
  focus: string[];
  image?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Research' | 'Technology' | 'Product' | 'Company' | 'Announcements' | 'Community';
  summary: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
  featured?: boolean;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      quote?: string;
      codeBlock?: {
        language: string;
        code: string;
      };
      diagramNote?: string;
    }[];
  };
}

export interface CareerRole {
  id: string;
  title: string;
  category: 'Software' | 'AI/ML' | 'Hardware & Embedded' | 'Biomedical & Clinical' | 'Product & Design' | 'Research';
  location: string;
  type: 'Full-time' | 'Internship' | 'Fellowship' | 'Collaborator';
  status: 'Open Application' | 'Actively Scouting' | 'Future Expansion';
  description: string;
  responsibilities: string[];
  requirements: string[];
  technologies: string[];
}

export interface PartnerCategory {
  category: string;
  description: string;
  status: string;
  focusAreas: string[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  current?: boolean;
}
