const path = require("path");
const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");

const config = {
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: 8080,
    historyApiFallback: true,
    server: "https",
  },
  devtool: "eval-cheap-source-map",
  mode: "development",
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
    filename: "bundle.dev.js",
  },
};

module.exports = merge(commonConfig, {
  ...config,
});
