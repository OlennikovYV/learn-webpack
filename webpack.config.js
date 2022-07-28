const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;
const cssLoaders =
  env === "prod"
    ? [MiniCSSExtractPlugin.loader, "css-loader"]
    : ["style-loader", "css-loader"];

const config = {
  mode: "development",
  entry: {
    myApp: ["./src/css/style.css", "./src/index.js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders,
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "",
        },
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
};

module.exports = config;
