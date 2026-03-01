import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B3D91',
          blueSoft: '#2563EB',
          yellow: '#FBBF24',
          orange: '#F59E0B',
          dark: '#111827',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F5F7FB',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;