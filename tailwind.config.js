/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/src/**/*.{html,twig,js,ts,jsx,tsx,vue}',
    './.storybook/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // DHB Brand Colors
        'dhb-navy': '#1a1a2e',
        'dhb-white': '#ffffff',
        'dhb-yellow': '#feca57',
        'dhb-red': '#ff4757',
        'dhb-gray': {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529'
        }
      },
      fontFamily: {
        'brand': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // DHB Typography Scale
        'brand-xs': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'brand-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'brand-md': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'brand-lg': ['5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'brand-xl': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-lg': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'heading-md': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0' }],
      },
      fontWeight: {
        'brand': '900',
        'display': '700',
        'heading': '600',
        'body': '400',
        'body-bold': '500'
      },
      animation: {
        'brand-pulse': 'brand-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'brand-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}