const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './client',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 8080,
		hot: true,
		historyApiFallback: true,
	},
	devtool: 'inline-source-map',
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
		new HtmlWebpackPlugin({ template: './server/templates/index.html'}),
	],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'assets'),
			Components: path.resolve(__dirname, 'client/components'),
			Styles: path.resolve(__dirname, 'client/styles'),
			Utils: path.resolve(__dirname, 'client/utils'),
		},
		extensions: ['.js', '.jsx', '.jpg', '.png'],
	},
};