const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;
const cssLoaders =
  env === "prod"
    ? [MiniCSSExtractPlugin.loader, "css-loader"]
    : ["style-loader", "css-loader"];

const config = {
  entry: {
    myApp: ["./src/css/style.css", "./src/index.js"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      template: "./src/html/index.html",
      title: "Webpack configuration",
    }),
    new MiniCSSExtractPlugin({
      filename: "style.css",
    }),
  ],
};

module.exports = config;
