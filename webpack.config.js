module.exports = {
  mode: 'development',
  module: {
    rules: [
      // fntファイルを文字列としてインポート
      {
        test: /\.fnt$/i,
        use: 'raw-loader',
      },

      // xml-loaderはjsonにパースしてしまうのでNG
      // {
      //   test: /\.fnt$/i,
      //   use: 'xml-loader',
      // },

      // 画像をdataURI化する、もしくはモジュール解決後のパスを取得
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};