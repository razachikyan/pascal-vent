const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;

const optimization = () => {
  const config = {}
  if(isProd) [
    config.minimizer = [
      new CssMinimizerPlugin(),
    ]
  ]
}

const babelOps = (preset) => {
  const ops = {
    presets: [
      ["@babel/preset-env", { targets: "defaults" }]
    ],
    plugins: ["@babel/plugin-proposal-class-properties"]
  }
  if(preset) {
    ops.presets.push(...preset)
  }
}

module.exports = {
    mode: "development",
    entry: {
      main: ["@babel/polyfill", "./src/index.tsx"],
    },
    optimization: optimization(),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: isDev ? "[name].js" : "[name].[contenthash].js",
    },
    resolve: {
    extensions: [".js", ".json", ".png", ".ts", ".tsx", ".jsx"],
    // performance: {
    //   hints: false,
    //   maxEntrypointSize: 512000,
    //   maxAssetSize: 512000
    // },
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "src/assets/images")
      }
    },
    optimization: {

    },
    devtool: isDev ? "eval-source-map" : "source-map",
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
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: babelOps(),
            }
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: babelOps(["@babel/preset-typescript"]),
            }
        },
        {
          test: /\.m?[jt]sx$/,
          exclude: /node_modules/,
          use: {
             loader: "babel-loader",
             options: {
                presets: [
                   "@babel/preset-env",
                   "@babel/preset-typescript",
                   "@babel/preset-react"
                ]
             }
          }
        },
        {
          test: /\.(png|PNG|JPG|jpg|svg)$/,
          type: "asset/resource",
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)$/,
          type: 'asset/resource'
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: "css-loader",
                options: {
                    modules: {
                      mode: "local",
                      localIdentName: "[name]_[local]--[hash:base64:5]"
                    }
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
        { test: /\.ts$/, use: "ts-loader" },
    ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ 
          template: "./src/index.html", 
          favicon: "./src/assets/images/favicon.png",
          minify: {
            collapseWhitespace: isProd
          }
         }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css",
          })
    ],
}