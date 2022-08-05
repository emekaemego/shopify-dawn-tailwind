module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    /* fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1.5rem',
      'lg': '2.125rem',
      'xl': '2.152rem',
      '2xl': '2.5rem',
      '3xl': '3.12rem',
      '4xl': '3.25rem',
      '5xl': '3.8rem',
      '6xl': '4.7rem',
      '7xl': '5.5rem',
    }, */
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [],
};
