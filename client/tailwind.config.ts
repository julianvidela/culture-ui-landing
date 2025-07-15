import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'justify-start', 'justify-center', 'justify-end',
    'sm:justify-start', 'sm:justify-center', 'sm:justify-end',
    'md:justify-start', 'md:justify-center', 'md:justify-end',
    'lg:justify-start', 'lg:justify-center', 'lg:justify-end',
    'xl:justify-start', 'xl:justify-center', 'xl:justify-end',

    'text-left', 'text-center', 'text-right',
    'sm:text-left', 'sm:text-center', 'sm:text-right',
    'md:text-left', 'md:text-center', 'md:text-right',
    'lg:text-left', 'lg:text-center', 'lg:text-right',
    'xl:text-left', 'xl:text-center', 'xl:text-right',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        text: {
          primary: '#808080',
          secondary: '#ffffff',
        },
        primary: {
          base: '#2196F3',
          light: '#90CBF9',
          dark: '#0A2D49',
        },
        secondary: {
          base: '#50BB9B',
          light: '#B2FDE6',
          dark: '#429A7F',
        },
        grayscale: {
          base: '#FEFEFE',
          shade1: '#F5F5F5',
          shade2: '#E2E2E2',
          shade3: '#595D62',
          shade4: '#1A1A1A',
        },
        border: {
          primary: '#ffffff15',
        },
      },
      fontSize: {
        small: '16px',
        normal: '20px',
        medium: '24px',
        large: '32px',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
