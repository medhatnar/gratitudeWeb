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
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: { loader: 'babel-loader', query: { compact: false } },
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './server/landing/templates/index.html',
		}),
	],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'assets'),
			Components: path.resolve(__dirname, 'client/components/'),
			Styles: path.resolve(__dirname, 'client/styles'),
		},
		extensions: ['.js', '.jsx', '.jpg', '.png'],
	},
};
