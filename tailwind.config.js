/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        heading: ["Teko", "sans-serif"],
        heading2: ["Anton", "sans-serif"],
        heading3: ["Kalam", "cursive"],
      },
      colors: {
        creme: "#ede6dc",
        occur: "#6d5444",
        pinkish: "#c6b19d",
        ocshadow: "#896e57",
      },
      scale: {
        200: "2.00",
      },
    },
  },
  plugins: [],
};
