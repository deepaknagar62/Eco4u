/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}
