const path = require("path");
const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");

const config = {
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
    server: "https",
  },
  devtool: "eval-cheap-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "[name].dev.js",
  },
};

module.exports = merge(commonConfig, {
  ...config,
});
