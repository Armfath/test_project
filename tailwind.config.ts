import type { Config } from 'tailwindcss';

import { colors } from './src/constants/styles';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      theme: {
        colors,
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
};
export default config;
