const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
    extensions: [".js", ".json", ".png"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "src/assets/images")
    }
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 5000,
      },
    module: {
        rules:[
        {
            loader: "babel-loader",
            test: /\.js$|jsx/,
            exclude: /node_modules/
        },
        {
          test: /\.(png|PNG|JPG|jpg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2)$/,
          use: "file-loader"
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // hmr: true,
                    // reloadAll: true
                }
              },
              {
                loader: "css-loader",
                options: {
                    modules: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  // Prefer `dart-sass`
                  implementation: require("sass"),
                },
              },
            ],
          },
        { test: /\.ts$/, use: 'ts-loader' },
    ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html', favicon: "./src/assets/images/favicon.png", title: "Cubax" }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
          })
    ],
}