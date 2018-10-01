var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");
var SERVER_DIR = path.resolve(__dirname, "server");

var config = {
	entry: {
		main: SRC_DIR + '/app/index.js',
	},
    output: {
        path: DIST_DIR + '/bundle',
        filename: 'bundle.js',
        // publicPath: "/public/bundle"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ejs)$/,
                include: [SRC_DIR, SERVER_DIR],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                	presets: ["env","react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [
                    {loader: 'url-loader'}
                ]
            }   
        ]
    },
    plugins: [
    ],
    devServer: {
        contentBase: DIST_DIR,
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
        port: 3000,
        progress: true,
        proxy: {
          '/api': 'http://localhost:3001',
          pathRewrite: {'^/api' : ''}
        }
    },

};

module.exports = config;