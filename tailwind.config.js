/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        yellow: "#F5c32c",
        orange: "#Fca61f",
        black: "#242d49",
        gray: "#788097",
        blueCard: "#DDF8FE",
        purple: "rgb(238 210 255)",
        boxShadow: "0px 19px 60px rgb( 0 0 0 / 8%)",
        orangeCard: "rgba(252 , 166 , 31 , 0.45)",
        smboxShadow: "-79px 51px 60px rgba(0 , 0 , 0 , 0.08)",
      }
    },
  },
  plugins: [],
}
