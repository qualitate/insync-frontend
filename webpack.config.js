var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
     
 module.exports = {

     entry: './js/index.js',

     output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/assets/",
        filename: "bundle.js"
     },

     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             },

              {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
         ]
     },

     plugins: [
        new LiveReloadPlugin()
        ],

    devtool: 'source-map',

    devServer: {
        port: 9000,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
 };