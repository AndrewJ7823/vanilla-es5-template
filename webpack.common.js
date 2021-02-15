const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/',
        filename: 'bundle.js',
        environment:{
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/app.html',
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins:[
                            ["@babel/plugin-proposal-decorators",{"decoratorsBeforeExport":true}],
                            ["@babel/plugin-proposal-class-properties"],
                            ["@babel/transform-runtime"]
                        ]
                    }
                }
            },
            {
                test: /\.(scss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};