const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new VueLoaderPlugin()
  ],
  // devServer: {
  //   contentBase: path.resolve(__dirname, './dist'),
  //   historyApiFallback: true,
  //   noInfo: true,
  //   overlay: true
  // },
  // devtool: 'cheap-module-source-map'
}
