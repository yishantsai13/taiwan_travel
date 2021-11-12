module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          // DEFAULT: '#3F4763',
          light: '#F0F2FA;'
        },
        brown: {
          DEFAULT: '#443620',
          light: '#E8D4B3',
          yellow: '#DBA342'
        },
        gray: {
          DEFAULT: '#A7A7A7',
          dark: '#616161',
          border: '#C6C6C6',
          lighter: '#EAEAEA',
        },
        secondary: {
          DEFAULT: '#656565'
        },
        content: {
          DEFAULT: '#252525'
        },
      },
      height: {
        '76px': '76px',
        'fit-content': 'fit-content'
      },
      fontSize: {
        ss: ['12px', '17px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '36px',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
