const fs = require('fs')
const hash = require('hash-sum')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const GasPlugin = require('gas-webpack-plugin')
const Es3ifyPlugin = require('es3ify-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const tsconfigFile = __dirname + '/script/tsconfig.json'

const cacheIdentifier = hash([
  require('typescript/package.json').version,
  require('ts-loader/package.json').version,
  require('cache-loader/package.json').version,
  require(tsconfigFile),
  fs.readFileSync('./webpack.config.gas.js', 'utf-8'),
  process.env.NODE_ENV
])

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: ['./script/Code.ts'],
  output: {
    path: __dirname + '/dist',
    filename: 'Code.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
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
              cacheIdentifier
            }
          },
          { loader: 'thread-loader' },
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfigFile,
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: tsconfigFile,
      tslint: false,
      formatter: 'codeframe',
      checkSyntacticErrors: true
    }),
    new GasPlugin(),
    new Es3ifyPlugin(),
    // copy appsscript.json to dist dir
    new CopyWebpackPlugin([__dirname + '/script/appsscript.json'])
  ],
  optimization: {
    minimize: false
  }
}
