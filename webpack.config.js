const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      template: path.resolve(__dirname, "src/templates/"),
      page: path.resolve(__dirname, "src/pages/"),
      route: path.resolve(__dirname, "src/routes/"),
      util: path.resolve(__dirname, "src/utils/"),
      style: path.resolve(__dirname, "src/styles/"),
      public: path.resolve(__dirname, "public/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js.?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
