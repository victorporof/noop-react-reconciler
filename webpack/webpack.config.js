// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import path from 'path';
import fs from 'fs-extra';
import nodeExternals from 'webpack-node-externals';

const ENTRY = path.join(__dirname, '..', 'src', 'index.js');
const OUTPUT = path.join(__dirname, '..', 'dist');
const NODE_EXTERNALS = nodeExternals();

export default () => ({
  entry: [ENTRY],
  output: {
    path: OUTPUT,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          ...fs.readJsonSync('.babelrc'),
        },
      }],
    }],
  },
  plugins: [],
  target: 'node',
  externals: [NODE_EXTERNALS],
});
