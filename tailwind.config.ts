import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        avy: {
          black: '#07080a',
          dark: '#0d0f14',
          surface: '#12151d',
          card: '#161a24',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(239, 35, 60, 0.35)',
          red: {
            DEFAULT: '#ef233c',
            hover: '#d90429',
            light: '#ff4d61',
            glow: 'rgba(239, 35, 60, 0.25)',
            subtle: 'rgba(239, 35, 60, 0.08)',
          },
          muted: '#8e98a8',
          subtle: '#5a6474',
          highlight: '#f4f6fa',
          // Light Mode Brand Surfaces
          light: {
            bg: '#f8fafc',
            surface: '#ffffff',
            card: '#ffffff',
            subtle: '#f1f5f9',
            border: '#e2e8f0',
            text: '#0f172a',
            muted: '#475569',
            subtext: '#64748b',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'red-gradient': 'linear-gradient(135deg, #ef233c 0%, #a0001a 100%)',
        'surface-gradient': 'linear-gradient(180deg, rgba(22, 26, 36, 0.8) 0%, rgba(13, 15, 20, 0.95) 100%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #ef233c 0deg, transparent 60deg, transparent 300deg, #ef233c 360deg)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
