const path = require("path");
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
    bundle: ["./index.js"],
  },
  externals: {
    lodash: "_",
  },
  context: path.resolve(__dirname, "src"),
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "../public",
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
      template: "./html/index.html",
      title: "Webpack configuration",
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: isAnalyze,
      analyzeMode: analyzeMode,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/assets/data/"),
    },
  },
};

module.exports = config;
