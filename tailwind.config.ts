import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#ffffff', // background
      'brown': {
        1: '#C3ACAC', // text
        2: '#7A6468', // icon, border. text and text input dark
        3: '#332626', // background dark
        4: '#302020', // background and text input dark
        5: '#251919', // background chat ballon dark
      },
      'pink': {
        1: '#F6EBEB', // background input and lines
        2: '#EFD4D9', // chat ballon
        3: '#F8B1BF', // border input and pill background
        4: '#DC8192', // background button
        5: '#DC85C9', // text
        6: '#A81C89', // background deslike button, text and background pill dark
        7: '#6A1056', // background deslike button dark
      },
      'red': {
        'light': '#C55454', // background button
        'dark': '#420410', // background button dark
      },
      'purple': '#0F0235', // background button dark
      'green': {
        'light': '#0F9867',
        'dark': '#003321',
      },
      'grey': '#515050',
    },
  },
  plugins: [],
}
export default config
