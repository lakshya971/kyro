/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'canvas-card': '#191919',
        'canvas-soft': '#1a1c20',
        'canvas-mid': '#363a3f',
        surface: '#131313',
        'surface-dim': '#131313',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'surface-bright': '#3a3939',
        'body-text': '#dadbdf',
        'body-mid': '#7d8187',
        ink: '#ffffff',
        primary: '#ffffff',
        'on-primary': '#2f3131',
        'breeze-blue': '#a0c3ec',
        'sunset-orange': '#ff7a17',
        'dusk-purple': '#7c3aed',
        hairline: '#212327',
        'pill-border': 'rgba(255, 255, 255, 0.25)',
        'pill-border-hover': 'rgba(255, 255, 255, 0.6)'
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px'
      },
      spacing: {
        'space-2xl': '4rem',
        'space-3xl': '6rem',
        margin: '3rem',
        'space-sm': '0.5rem',
        'margin-mobile': '1.25rem',
        gutter: '1.5rem',
        'space-lg': '1.5rem',
        'space-md': '1rem',
        'space-xs': '0.25rem',
        'space-xl': '2.5rem',
        'gutter-mobile': '1rem'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        eyebrow: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        eyebrow: ['12px', { lineHeight: '16px', letterSpacing: '1.4px', fontWeight: '500' }]
      }
    }
  },
  plugins: []
};
