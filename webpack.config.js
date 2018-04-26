const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	module:{
		rules:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins:[
		new UglifyJSPlugin()
	], 
	devServer:{
		contentBase: path.resolve(__dirname, './public'),
		open: true,
		hot: true
	},
	devtool: "eval-source-map"

}


module.exports = config;