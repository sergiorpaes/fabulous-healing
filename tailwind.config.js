/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#d4af37',
        'spiritual-lavender': '#e9d5ff',
        'soft-violet': '#a78bfa',
        'deep-violet': '#7f009e',
        'rose-pink': '#d169ab',
        'healing-aqua': '#24a9b2',
        'purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'float': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'gradientShift': 'gradientShift 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }
    },
  },
  plugins: [],
}
