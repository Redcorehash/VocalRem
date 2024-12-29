/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all relevant file types
    './public/index.html', // Include your HTML file
  ],
  theme: {
    extend: {
      // Customize colors
      colors: {
        primary: '#3498db', // Blue
        secondary: '#2ecc71', // Green
        accent: '#e74c3c', // Red
        background: '#f5f5f5', // Light gray
        text: '#2c3e50', // Dark gray
      },
      // Customize fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default sans-serif font
        mono: ['Fira Code', 'monospace'], // Use Fira Code for monospace
      },
      // Customize spacing
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      // Customize breakpoints
      screens: {
        xs: '480px', // Extra small screens
        '3xl': '1920px', // Extra large screens
      },
      // Customize animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Add Tailwind Forms plugin
    require('@tailwindcss/typography'), // Add Tailwind Typography plugin
    require('tailwindcss-animate'), // Add Tailwind Animate plugin
  ],
};
