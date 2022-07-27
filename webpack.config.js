const path = require("path");

const config = {
  mode: "development",
  entry: {
    myApp: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
};

module.exports = config;
