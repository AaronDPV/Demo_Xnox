/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xnox-red': {
          DEFAULT: '#D81E34',
          bright: '#E6283F',
          dark: '#8A0C1B',
          glow: 'rgba(216, 30, 52, 0.22)',
        },
        'hotel-gold': {
          DEFAULT: '#C5A059',
          light: '#E4C88A',
          dark: '#9E7D38',
        },
        'hotel-ivory': {
          50: '#FDFBF7',
          100: '#FBF9F5',
          200: '#F5F2EC',
          300: '#ECE7DE',
        },
        'hotel-obsidian': {
          DEFAULT: '#141518',
          card: '#1B1D22',
          deep: '#0E1015',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        subheading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatGlow 8s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marqueeScroll 28s linear infinite',
      },
      keyframes: {
        floatGlow: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(25px, -20px) scale(1.08)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
