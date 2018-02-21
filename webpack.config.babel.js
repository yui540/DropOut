import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import globImpoter from 'node-sass-glob-importer'

const js = {
  entry: `${ __dirname }/src/scripts/app.js`,
  output: {
    path: `${ __dirname }/public/scripts`,
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.json)/,
        use: ['babel-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]
}

const css = {
  entry: `${ __dirname }/src/scss/style.scss`,
  output: {
    path: `${ __dirname }/public/stylesheets`,
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: globImpoter()
            }
          }
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = [js, css]
