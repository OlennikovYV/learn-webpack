const path = require("path");
const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "[name].[contenthash:8].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};

module.exports = merge(commonConfig, {
  ...config,
});
