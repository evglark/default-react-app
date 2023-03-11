const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const supportedLocales = ['en-US', 'ru'];

const isMocksMode = process.env.MOCKS_MODE || false;
const isDevMode = process.env.NODE_ENV === 'development';

const apiPath = '';

/* Basic configuration */
const config = {
  target: ['web', 'es5'],
  mode: isDevMode ? 'development' : 'production',
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
    publicPath: '/',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDevMode ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
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
              '@babel/preset-typescript',
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
    new DefinePlugin({
      API_PATH: `'${apiPath}'`,
      PUBLIC_PATH: '\'\'',
      MOCKS_MODE: isMocksMode,
      IS_DEV: isDevMode,
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ].filter(Boolean),
};

module.exports = config;
