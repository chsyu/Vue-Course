const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    polyfill: "babel-polyfill",
    bundle: "./assets/js/app.js"
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].[chunkhash].js"
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000,
              outputPath: "./images"
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        })
        // loader: ExtractTextPlugin.extract('css-loader', 'postcss-loader')
        // use: ExtractTextPlugin.extract({
        //       use: [
        //          'css-loader',
        //          'postcss-loader'
        //       ]
        // })
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/style.[hash].css"),
    new HtmlWebpackPlugin({
      template: "assets/index.html"
    })
  ],
  devServer: {
    contentBase: "dist"
  }
};
