var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: {
		main: SRC_DIR + "/app/index.js",
	},
    output: {
        path: DIST_DIR + '/bundle/',
        filename: 'bundle.js',
        // publicPath: "/bundle/"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                	presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
    ],

    devServer: {
        contentBase: DIST_DIR,
        // colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 3000,
        progress: true,
    },

};

module.exports = config;