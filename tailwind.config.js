module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        myPic: "url(/src/components/assets/my_pic.jpeg)",
        home: "url(/src/components/assets/me.svg)",
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
