module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '65ch',         // For optimal reading width
        '8xl': '88rem',          // 1408px
        '9xl': '96rem',          // 1536px
        '10xl': '104rem',        // 1664px
      },
      colors: {
        primaryHeading: '#261F55',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}