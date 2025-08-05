/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.ts',
    './resources/**/*.tsx',     
  ],
  theme: {
    extend: {
      colors: {
        'deep-orange': {
          DEFAULT: '#FF5722',
          '50': '#FFF3F0',
          '100': '#FFE6DD',
          '200': '#FFD9C8',
          '300': '#FFCCB3',
          '400': '#FFBFA9',
          '500': '#FFB299',
          '600': '#FFA58E',
          '700': '#FF9983',
          '800': '#FF8C78',
          '900': '#FF7F6D'          
        },
        'golden': '#FFD700',
        'deep-red': '#8B0000',
        'deep-green': '#006400',
        'very-dark-gray': '#2D2F36', // Darker gray for footer
        // 'text-deep-orange': '#FF5722',
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