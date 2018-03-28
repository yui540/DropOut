require('dotenv').config()
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

const MODE = process.env.MODE || 'development'
const enabledSourceMap = (MODE === 'development')

const js = {
  mode: MODE,
  entry: `${ __dirname }/src/scripts/app.js`,
  output: {
    path: `${ __dirname }/public/scripts`,
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'riot-tag-loader',
            options: {
              type: 'es6',
              hot: true
            }
          }
        ]
      },
      {
        test: /(\.js|\.json)/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
  
const css = {
  mode: MODE,
  entry: `${ __dirname }/src/scss/style.scss`,
  output: {
    path: `${ __dirname }/public/stylesheets`,
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: enabledSourceMap,
                minimize: !enabledSourceMap,
                importLoaders: 2
              }
            },
            {
              loader: 'sass-loader',
              options: {
                importer: globImporter(),
                sourceMap: enabledSourceMap
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = [js, css]
