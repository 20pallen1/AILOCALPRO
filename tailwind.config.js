/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'bg-1': 'var(--bg-1)',
        'bg-2': 'var(--bg-2)',
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
      },
    },
  },
  plugins: [],
} 