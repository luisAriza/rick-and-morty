const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/[hash].[ext]",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
      watch: true,
    },
    compress: true,
    port: 8080,
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
      asset: path.resolve(__dirname, "src/assets/"),
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
      {
        test: /\.(png|svg|jpg|jpeg)/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: { "theme-color": "#2d2d2d" },
      favicon: "./public/favicon.ico",
      filename: "./index.html",
      template: "./public/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
