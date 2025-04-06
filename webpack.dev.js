/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-dev.js",
  },
  devServer: {
    host: "0.0.0.0", // Accept all IPs
    port: process.env.PORT || 8080, // Allow Render's dynamic port
    allowedHosts: "all", // This line fixes the "Invalid Host header" error
    hot: true,
    historyApiFallback: true,
  },
});
