// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import path from 'path';
import fs from 'fs-extra';

const ENTRY = path.join(__dirname, '..', 'src', 'index.js');
const OUTPUT = path.join(__dirname, '..', 'dist');

export default () => ({
  entry: [ENTRY],
  output: {
    path: OUTPUT,
    filename: 'custom-react-dom.js',
    library: 'ReactDOM',
    libraryTarget: 'window',
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
});
