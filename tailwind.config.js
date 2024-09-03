/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "transparent": "transparent",
        "white": "#ffffd1",
        "black": "#090000",
        "primary": "#500007",
      },
      screens: {
        'sm': '568px',
        'md': '768px',
        'lg': '1068px',
        'xl': '1280px',
        '2xl': '1536px',
     },
     
    },
  },
  plugins: [],
};
