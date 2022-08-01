// const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const cdnDev = require("./src/js/cdn/cdn.dev");
const cdnProd = require("./src/js/cdn/cdn.prod");

const env = process.env.NODE_ENV;
const isAnalyze = !!process.env.ANALYZE;
const analyzeMode = isAnalyze ? "server" : "disabled";
const cdn = env === "dev" ? cdnDev : cdnProd;

const config = {
  entry: {
    myApp: ["./src/css/style.css", "./src/index.js"],
  },
  externals: {
    lodash: "_",
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
      cdn,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      template: "./src/html/index.html",
      title: "Webpack configuration",
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: isAnalyze,
      analyzeMode: analyzeMode,
    }),
  ],
};

module.exports = config;
