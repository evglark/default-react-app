const path = require('path');
const dotenv = require('dotenv');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const supportedLocales = ['en-US', 'ru'];

const MODE = process.env.NODE_ENV || 'development';
const isDevMode = MODE === 'development';
const PORT = process.env.PORT || 3000;
const apiUri = process.env.API_URL || '';

/* Basic configuration */
const config = {
  mode: isDevMode ? 'development' : 'production',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
    publicPath: '/',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDevMode ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { ie: 11 },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-classes',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
        include: [
          path.resolve('src'),
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|gif|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css',
    }),
    new ContextReplacementPlugin(
      /date-fns[/\\]/,
      new RegExp(`[/\\\\](${supportedLocales.join('|')})[/\\\\]index.js$`),
    ),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new DefinePlugin({
      apiUri,
    }),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin('./public/favicon.ico'),
  ].filter(Boolean),
};

module.exports = config;
