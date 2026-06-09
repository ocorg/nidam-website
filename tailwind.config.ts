import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Used for FR and EN: <body className="font-sans">
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Used for AR: <body className="font-arabic">
        arabic: ['var(--font-cairo)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;