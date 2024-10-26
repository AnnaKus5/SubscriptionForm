/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        marineblue: '#02295a',
        purplishblue: '#473dff',
        pastelblue: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
        coolGray: 'hsl(231, 11%, 63%)',
        lightgray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'sidebar-mobile': "url('./src/assets/images/bg-sidebar-mobile.svg')",
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', '24px'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}

