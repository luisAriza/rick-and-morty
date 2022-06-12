const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFilenameHelpers } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dis/"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js.?$/,
        exclude: /node_modules/,
        use: {
          loader: "loader-babel",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      favicon: "./public/favicon.svg",
      filename: "./index.html",
    }),
  ],
};
