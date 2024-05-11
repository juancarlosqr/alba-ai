import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          '50': '#f2f7f4',
          '100': '#e0ebe3',
          '200': '#c4d6ca',
          '300': '#9cb9a8',
          '400': '#709780',
          '500': '#5a896f',
          '600': '#3c5f4c',
          '700': '#304c3e',
          '800': '#283d32',
          '900': '#21332a',
          '950': '#121c18',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
