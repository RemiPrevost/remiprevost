const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = (env = {}) => merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        'GA_ID': JSON.stringify(env.GA_ID),
        'PRODUCTION': true,
      },
    }),
    new webpack.DefinePlugin({
      GA_ID: JSON.stringify(env.GA_ID)
    })
  ]
});
