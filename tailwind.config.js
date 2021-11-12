module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          // DEFAULT: '#3F4763',
          light: '#F0F6FA'
        },
        brown: {
          DEFAULT: '#443620',
          light: '#E8D4B3',
          lighter: '#EAEAEA',
        },
        gray: {
          dark: '#616161',
          border: '#C6C6C6',
        }
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
        xl: '48px',
      },
      borderRadius: {
        DEFAULT: '5px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
