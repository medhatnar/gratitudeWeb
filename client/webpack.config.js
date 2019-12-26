const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'dev',
	entry: './client/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: {
			test: /\.js$/,
			use: { loader: 'babel-loader', query: { compact: false } },
		},
	},
	plugins: [new HtmlWebpackPlugin()],
	resolve: {
		alias: {
			Components: path.resolve(__dirname, 'client/components/'),
		},
		extensions: ['.js', '.jsx'],
	},
};
