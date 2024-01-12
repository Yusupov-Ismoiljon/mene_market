const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'star-bg': "url('/public/img/star-space.gif')",
        'tort-bg': "url('/public/img/HTML-404-Error-Page.gif')",

      }
    },
  },
  plugins: [],
});

