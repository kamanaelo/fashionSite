const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

// const isDev = process.env.Node_ENV === 'development';
// const isProd = !isDev;

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname, './src/index.js'),
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer:{
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            template: './src/test.pug',
            //filename: 'output.html',
            minify: false,
          }),
    ],

    module:{
        rules:[
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(?:png|gif|jpg|svg)$/i,
                // loader: 'file-loader',
                type: 'asset/resource',
                generator:{
                    filename: '.img/[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/i,
                type: 'asset/resource',
                generator:{
                    filename: '.fonts/[hash][ext]'
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        filename: '[name].[ext]',
                        // path: 'scripts',
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}