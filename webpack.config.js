const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
var path = require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: [
                    {
                        loader:"babel-loader",
                        options: { 
                            presets: ['es2015', 'react'],  
                        }
                    }
                ]    
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './template.html'})
    ],
    devtool: "source-map"
};