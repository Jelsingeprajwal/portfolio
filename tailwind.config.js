/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#184AFF",
        secondaryBlue: "rgba(22, 30, 61, 0.98)",
        secondaryText: "#7C7474",
        dimWhite: "#D9D9D9",
        dimBlue: "rgba(24, 75, 255, 0.06)",
      },
      fontFamily: {
        GeneralSans: ["General Sans"],
        Hind: ["Hind"],
      },
      backgroundColor: {
        primaryDark: "#291C1C",
      },
      fontSize: {
        small: "14px",
        normal: "16px",
        medium: "20px",
      },
    },
  },
  plugins: [],
};
