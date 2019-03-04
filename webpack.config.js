const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
      }]
    },
    devServer: {
        inline: true,
        port: 8888,
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin([
          {from: './src/assets', to: './assets' }
        ]),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'head'
      })
    ],        
}