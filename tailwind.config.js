/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'deep-orange': '#FF5722',
        'golden': '#FFD700',
        'deep-red': '#8B0000',
        'deep-green': '#006400',
        'very-dark-gray': '#2D2F36', // Darker gray for footer
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'devanagari': ['Noto Sans Devanagari', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 87, 34, 0.2)' },
          '100%': { boxShadow: '0 0 0 10px rgba(255, 87, 34, 0)' },
        },
      },
    },
  },
  plugins: [],
};