const path = require('path');

const config = {
  entry: './lib/components/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
