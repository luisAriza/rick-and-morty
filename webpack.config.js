const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: { "theme-color": "#222" },
      title: "Rick and Morty",
      inject: "body",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "stylesheet.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
