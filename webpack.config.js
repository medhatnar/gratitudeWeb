const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './client',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: { loader: 'babel-loader', query: { compact: false } },
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: "./client/index.html" })],
	resolve: {
		alias: {
			Components: path.resolve(__dirname, 'client/components/'),
		},
		extensions: ['.js', '.jsx'],
	},
};
