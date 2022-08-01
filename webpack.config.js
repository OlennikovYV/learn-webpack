const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const cdn = require("./src/js/cdn/cdn");

const env = process.env.NODE_ENV;
const cssLoaders =
  env === "prod"
    ? [MiniCSSExtractPlugin.loader, "css-loader"]
    : ["style-loader", "css-loader"];

const config = {
  entry: {
    myApp: ["./src/css/style.css", "./src/index.js"],
  },
  externals: {
    lodash: "_",
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
    filename: "[contenthash:8].js",
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzeMode: "static",
      reportFilename: "development_report.html",
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
    new HtmlWebpackPlugin({
      inject: "body",
      cdn,
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
