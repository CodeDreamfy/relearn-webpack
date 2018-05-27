module.exports = {
  log(...args) {
    if (process.env.NODE_ENV === "development" && console && console.log) {
      console.log.call(console, ...args);
    }
  }
};
