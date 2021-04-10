const path = require("path");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: "production",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "production",
	plugins: [
		new MiniCssExtractPlugin({ filename: "skywalker.min.css" }),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimizer: [new OptimizeCssAssetsWebpackPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},
};
