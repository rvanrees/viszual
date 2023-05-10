/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pacific: "#00b8ff",
        indigo: "#6736e4",
        marine: "#001D3D",
        asphalt: "#000814",
        danger: "#e74c3c",
        success: "#1DBC60",
      },
    },
  },
  plugins: [],
};
