const path = require("path");

const config = {
  mode: "development",
  entry: {
    myApp: ["./src/css/style.css", "./src/index.js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
};

module.exports = config;
