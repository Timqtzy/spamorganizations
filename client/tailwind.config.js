import flowbite from "flowbite-react/tailwind";
import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    keyframes: {
      "fade-in-up": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    fontFamily: { poppins: ["Poppins", "sans-serif"] },
    animation: {
      "fade-in-up": "fade-in-up 0.3s ease-out",
    },
    extend: {
      colors: {
        customRed: "#ff2d2d",
        customRedHover: "#d62926",
        customYellow: "#f8f2db",
        customNavCol: "#fdeaea",
        customLightYellow: "rgba(248,242,219,1)", // Light yellow
        customYellow2: " rgba(242,232,192,1)", // Yellow
      },
      screens: {
        s: "0px",
        sx: "320px",
        ssx: "375px",
        xsm: "414px",
        ssm: "448px",
        sm: "640px",
        md: "768px",
        msd: "782px",
        smd: "944px",
        lg: "1024px",
        slg: "1260px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    flowbitePlugin({
      datatables: true,
    }),
  ],
};
