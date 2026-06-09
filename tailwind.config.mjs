/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Blue-White Industrial Design Tokens
        ink: {
          50: '#F7F8FA',
          100: '#EEF1F5',
          200: '#E2E6EC',
          300: '#C9D0DA',
          400: '#9AA4B2',
          500: '#6B7280',
          600: '#4B5563',
          700: '#2A3344',
          800: '#1A2030',
          900: '#0E1320',
          950: '#070A14',
        },
        cobalt: {
          50: '#EFF4FF',
          100: '#DBE6FE',
          200: '#BFD3FE',
          300: '#93B4FD',
          400: '#608AFA',
          500: '#3B66F5',
          600: '#1E5EFF',
          700: '#1947D6',
          800: '#163AAB',
          900: '#172E78',
          950: '#0A2540',
        },
        line: {
          DEFAULT: '#E5E7EB',
          dark: '#1F2937',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
        serif: [
          'Source Han Serif SC',
          'Noto Serif SC',
          'ui-serif',
          'Georgia',
          'serif',
        ],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider: '0.08em',
        widest: '0.18em',
      },
      boxShadow: {
        hairline: '0 0 0 1px rgba(14, 19, 32, 0.06)',
        soft: '0 1px 2px rgba(14, 19, 32, 0.04), 0 8px 24px rgba(14, 19, 32, 0.06)',
        crisp: '0 2px 4px rgba(10, 37, 64, 0.08), 0 16px 40px rgba(10, 37, 64, 0.12)',
        glow: '0 0 0 1px rgba(30, 94, 255, 0.18), 0 12px 32px rgba(30, 94, 255, 0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.5s ease both',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 30s linear infinite',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.700'),
            '--tw-prose-headings': theme('colors.ink.900'),
            '--tw-prose-links': theme('colors.cobalt.600'),
            '--tw-prose-bold': theme('colors.ink.900'),
            '--tw-prose-quotes': theme('colors.ink.700'),
            '--tw-prose-code': theme('colors.cobalt.700'),
            '--tw-prose-pre-bg': theme('colors.ink.900'),
            maxWidth: '72ch',
          },
        },
      }),
    },
  },
  plugins: [],
};
