var path = require("path")
var webpack = require("webpack")
var config = require("./config/index")


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    "./src/main.js"
  ],
  output: {
    publicPath: '',
    path:  path.resolve(__dirname + '/dist/'),
    filename: "build.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
      extensions: ['.js', '.vue', '.jsx'], //后缀名自动补全
      modules : [path.resolve(__dirname, "src"), 'node_modules'],
  },
  module:{
    rules: [
      {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: ["vue-loader"]
      },
      {
          test: /\.js(x)*$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      },
      {
        test: /\.less$/,
        use:[ 'style-loader','css-loader','less-loader']
      },
    ]
  }
}
