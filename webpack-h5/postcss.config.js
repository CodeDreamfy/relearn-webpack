module.exports = {
  plugins: {
    precss: {
      parser: require("postcss-less")
    },
    "postcss-import": {},
    "postcss-px2rem": {
      remUnit: 100
    },
    autoprefixer: {},
    cssnano: {}
  }
};
