/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ai: {
          bg: '#1F1817',      // Deeper Premium Espresso
          surface: '#2D2322', // Richer Medium Brown
          card: '#382B2A',    // Richer Lighter Brown
          blue: '#D32F2F',    // Bright Red
          violet: '#E53935',  // Brighter Red
          accent: '#FF3B30',  // Vibrant Red Accent
          glow: '#FF453A',    // Glow Red
          text: '#FDF6E3',    // Cream / Off-white text
          subtext: '#CBBBAA'  // Muted Cream
        }
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(to right, rgba(253, 246, 227, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(253, 246, 227, 0.05) 1px, transparent 1px)',
        'grid-blue': 'linear-gradient(to right, rgba(211, 47, 47, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(211, 47, 47, 0.1) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(211, 47, 47, 0.2), transparent 60%)',
        'radial-glow-violet': 'radial-gradient(circle at 50% 50%, rgba(229, 57, 53, 0.15), transparent 60%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(211, 47, 47, 0.4)',
        'glow': '0 0 25px rgba(211, 47, 47, 0.5)',
        'glow-lg': '0 0 35px rgba(229, 57, 53, 0.6)',
        'glow-premium': '0 0 40px rgba(229, 57, 53, 0.4), inset 0 0 20px rgba(211, 47, 47, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse-slow': 'spinReverse 10s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}