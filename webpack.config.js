const webpack      = require('webpack');
const path         = require('path');

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: {
      index: path.join(__dirname, 'src', 'index.ts'),
    },

    output: {
      path: path.join(__dirname, 'www'),
      filename: "test_npm.js",
      library: "test_npm.js",
      libraryTarget: 'umd'
    },

    // typescript transpiling files
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            { loader: 'ts-loader' }
          ]
        }
      ]
    },

    // binding files
    // resolve: {
    //   extensions: ['.js', '.ts'],
    //   modules: [
    //     path.resolve(__dirname, 'src'),
    //     "node_modules"
    //   ]
    // },
    //
    // node: {
    //   fs: 'empty'
    // },
    //
    // devtool: 'source-map',
    //
    // optimization: {
    //   minimizer: [
    //     // クラス名で比較している箇所を機能させる
    //     new TerserPlugin({
    //       sourceMap: !isProduction,
    //       terserOptions: {
    //         keep_classnames: true,
    //         keep_fnames: true
    //       }
    //     })
    //   ]
    // },
    //
    // plugins: [
    //   new webpack.optimize.OccurrenceOrderPlugin(),
    //   new webpack.optimize.AggressiveMergingPlugin()
    // ],
    //
    devServer: {
      contentBase: path.join(__dirname, 'www'),
      compress: true,
      port: 8080
    }
  }
};
