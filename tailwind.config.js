/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0a0a0a',
        panel: '#121212',
        accent: '#67e8f9',
      },
      boxShadow: {
        glow: '0 10px 40px rgba(103, 232, 249, 0.12)',
      },
    },
  },
  plugins: [],
};
