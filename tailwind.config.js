/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          base: 'var(--surface-base)',
          primary: 'var(--surface-primary)',
          elevated: 'var(--surface-elevated)',
          hover: 'var(--surface-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          body: 'var(--text-body)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        accent: {
          blue: 'var(--accent-blue)',
          'blue-soft': 'var(--accent-blue-soft)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
        },
      },
      fontFamily: {
        display: ['var(--font-eloquia-display)', 'Inter', 'system-ui', 'sans-serif'],
        text: ['var(--font-eloquia-text)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'title': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'subhead': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
      maxWidth: {
        'content': '800px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
