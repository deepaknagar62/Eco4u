/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        // sm: '640px', (default)
        // md: '768px', (default)
        // lg: '1024px', (default)
        // xl: '1280px', (default)
        '2xl': '1536px',
      },
      colors: {
        // Primary colors
        primary: '#8BCF9C',
        'primary-dark': '#2F5D44',
        'primary-heading': '#2F5D44',
        
        // Text colors
        'body-text': '#5F6F64',
        'supporting-text': '#6F7F75',
        
        // Accent colors
        'accent-line': '#8BCF9C',
        'highlight': '#8BCF9C',
        
        // Background colors
        'card-bg': '#FFFFFF',
        'icon-bg': '#E4F3EA',
        'section-bg': '#F4FAF6',
        'gradient-start': '#FFFFFF',
        'gradient-mid': '#F4FAF6',
        'gradient-end': '#EAF5EE',
        
        // Legacy support
        secondary: '#0a0a0a',
        accent: '#1a1a1a',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-in-out',
        'slideIn': 'slideIn 0.5s ease-out',
        'scroll': 'scroll 20s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '16/10': '16 / 10',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.touch-manipulation': {
          'touch-action': 'manipulation',
        },
        '.safe-area-inset': {
          'padding-left': 'env(safe-area-inset-left)',
          'padding-right': 'env(safe-area-inset-right)',
          'padding-top': 'env(safe-area-inset-top)',
          'padding-bottom': 'env(safe-area-inset-bottom)',
        },
        '.line-clamp-2': {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          'overflow': 'hidden',
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
