var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        },
        {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
        },
        {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};
