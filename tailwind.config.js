const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          DEFAULT: '#6366F1',
          50: '#FFFFFF',
          100: '#F9F9FE',
          200: '#D3D4FB',
          300: '#AEAFF8',
          400: '#888BF4',
          500: '#6366F1',
          600: '#3034EC',
          700: '#1317D1',
          800: '#0E119E',
          900: '#0A0C6A'
        },
        'secondary': {
          DEFAULT: '#EC4899',
          50: '#FDEEF6',
          100: '#FBDCEB',
          200: '#F8B7D7',
          300: '#F492C2',
          400: '#F06DAE',
          500: '#EC4899',
          600: '#E4187D',
          700: '#B11261',
          800: '#7F0D45',
          900: '#4C0829'
        },
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
