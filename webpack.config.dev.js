const path = require("path");
const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");

const config = {
  mode: "development",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: 8080,
    historyApiFallback: true,
    server: "https",
  },
  devtool: "eval-cheap-source-map",
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.dev.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = merge(commonConfig, {
  ...config,
});
