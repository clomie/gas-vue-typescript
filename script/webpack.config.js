/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const hash = require('hash-sum')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const GasPlugin = require('gas-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const tsconfigFile = __dirname + '/tsconfig.json'

const cacheIdentifier = hash([
  require('typescript/package.json').version,
  require('ts-loader/package.json').version,
  require('cache-loader/package.json').version,
  require(tsconfigFile),
  fs.readFileSync(__filename, 'utf-8'),
  process.env.NODE_ENV,
])

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: ['./Code.ts'],
  output: {
    path: __dirname + '/../dist',
    filename: 'Code.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: __dirname + '/node_modules/.cache/gas',
              cacheIdentifier,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfigFile,
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: tsconfigFile,
      },
      eslint: {
        files: '.',
      },
    }),
    new GasPlugin(),
    // copy appsscript.json to dist dir
    new CopyWebpackPlugin({
      patterns: [{ from: 'appsscript.json' }],
    }),
  ],
  optimization: {
    minimize: false,
  },
}
