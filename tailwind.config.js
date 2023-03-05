module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
],
  // darkMode:true,
  theme: {
    screens: {
      smr: {
          'min':'300px', 'max':'579px',
      }
    },
    extend: {
      fontFamily:{
        mulish:"'Mulish', sans-serif"
      },
    },
  },
  plugins: [],
}
