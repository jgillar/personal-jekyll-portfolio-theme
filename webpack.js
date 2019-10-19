//all this is really doing is transpiling ES6 to ES5 with babel and some CSS minification
//setting up webpack to literally only do this is kind of overkill but I need the practice
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		main: path.resolve(__dirname, "assets/scripts/index.js")
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "assets/build")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin() //the deafult JS optimizer
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					babelrc: true,
					extends: path.resolve(__dirname, ".babelrc")
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { sourceMap: true }
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: function() {
								return [
									require("autoprefixer")({
										browsers: ["> 1%", "last 2 versions"]
									})
								];
							}
						}
					},
					{
						loader: "sass-loader",
						options: { sourceMap: true }
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "styles.css"
		})
	]
};
