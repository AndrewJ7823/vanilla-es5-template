const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host:"0.0.0.0",
        contentBase: './dist',
        inline:true,
        hot: true
    }
});