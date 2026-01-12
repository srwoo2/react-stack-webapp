require('dotenv').config();
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './front/src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    port: 4002,
    host: '0.0.0.0',
    historyApiFallback: true,
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync(path.resolve(__dirname, 'cert/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'cert/cert.pem')),
      },
    },
    static: {
      directory: path.join(__dirname, 'front/public'),
    },
    proxy: {
      '/api': {
        target: 'https://localhost:4000',
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|svg|ico)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'front/src'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
      'process.env.GA_MEASUREMENT_ID': JSON.stringify(process.env.GA_MEASUREMENT_ID),
    }),
    new HtmlWebpackPlugin({
      title: 'React Stack WebApp',
      template: './front/public/index.html',
      favicon: './front/public/favicon.ico',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
