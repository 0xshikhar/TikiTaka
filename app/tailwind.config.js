module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      }

    },
  },
  plugins: [require("daisyui")],
};