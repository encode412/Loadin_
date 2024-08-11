/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131a53",
        lightgray: "#5F5F5F",
      },
      backgroundImage: {
        homebg: "url('/homepage/homebg1.jpg')",
        driverbg: "url('/driverpage/driverbg3.jpg')",
        postloadbg: "url('/dashboard/postload3.jpg')",
        loadbgone: "url('/dashboard/loadbg.jpg')",
        loadbgtwo: "url('/dashboard/loadbg5.jpg')",
      },
    },
  },
  plugins: [],
};
