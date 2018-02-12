const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

// minification/uglification  and tree-shaking happens due to webpack -p flag in the build command

module.exports = merge(common, {
  output: {
    publicPath: 'localhost:8000'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('autoprefixer')({
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(), uncomment to analyze bundle size
    new webpack.DefinePlugin({
      'process.env': {
        //add more env vars here
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0
    }),
    
  ],
  devtool: 'source-map'
})