const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  // output: {
	// path: path.join(__dirname, '/dist'),
	// filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  devtool: 'cheap-module-source-map'
}
