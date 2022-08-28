const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProduction
      ? '/wheel/'
      : '/',
    filename: isProduction
      ? 'public/[name].[chunkhash].js'
      : 'public/[name].js',
    assetModuleFilename: isProduction
      ? 'public/[hash][ext]'
      : 'public/[name].[hash][ext]',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: isProduction
            ? []
            : ['react-refresh/babel'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: isProduction
          ? [
            MiniCssExtractPlugin.loader, {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ]
          : [
            'style-loader', {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
          ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg)$/,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({ verbose: false }),
    new HtmlPlugin({
      template: './src/index.html',
    }),
    ...isProduction
      ? [new MiniCssExtractPlugin({ filename: 'public/[name].[contenthash].css' })]
      : [new ReactRefreshPlugin()],
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      stats: 'errors-only',
    },
    client: {
      logging: 'warn',
    },
  },
};
