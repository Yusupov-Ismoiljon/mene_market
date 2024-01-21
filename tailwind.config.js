import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'star-bg': "url('/public/img/star-space.gif')",
        'not-page': "url('/public/img/Error-Page.gif')",
      },
    },
  },
  plugins: [],
});

