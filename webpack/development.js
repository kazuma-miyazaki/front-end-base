import path from 'path'
import { makeDir } from './tools/dir'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import InterpolateHtmlPlugin from'interpolate-html-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const devMode = process.env.NODE_ENV !== 'production'

const makeDevelopment = dirname => {
  const dir = makeDir(dirname)

  return {
    mode: 'development',
    entry: {
      // key: ディエクトリ
      'app'       : dir.join(dir.src.js, 'app.jsx'),
      'pages/form': dir.join(dir.src.js, 'pages/form.js')
    },

    output: {
      path    : dir.dist.base,
      filename: '[name].bundle.js',
    },

    // https://webpack.js.org/configuration/dev-server/#devserver
    devServer: {
      inline          : false,
      contentBase     : 'dist',
      watchContentBase: true,
      index           : '/index.html',
      port            : 8080,
      // public: 'myapp.test:8080',
      staticOptions   : {
        redirect: false
      },
      writeToDisk     : true,
      hot             : true
    },

    plugins: [
      // clear directory
      new CleanWebpackPlugin(['dist']),

      // compile and export setting
      // https://github.com/jantimon/html-webpack-plugins
      new HtmlWebpackPlugin({
        // 指定した自作htmlに適用する、指定がなければ勝手にhtmlを生成
        template: dir.join(dir.src.base, '/index.html'),
        // 出力ファイル名
        filename: 'indx.hteml',
        // すべてのアセットを指定されたものに挿入
        // inject: true
      }),
  　
      // 複数ファイルの指定も可能
      new HtmlWebpackPlugin({
        title   : 'Form HTML',
        filename: "form.html",
        meta: {
          'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
          // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
          // Which equals to the following http header: `Content-Security-Policy: default-src https:`
          'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
          // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
          // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
        },
        template: dir.join(dir.src.base, 'form.html'),
      }),

      new HtmlWebpackPlugin({
        template: dir.join(dir.src.base, 'template.ejs'),
        filename: 'template.html',
      }),

      new MiniCssExtractPlugin({
        filename     : devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css'   : '[id].[hash].css',
      }),

      // KeyでHTML内の"%指定した文字列%"をValueに置き換える
      new InterpolateHtmlPlugin({
        bootstrap_css_cdn: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'
      })
    ],

    module: {
      rules: [
        {
          test : /\.ejs$/,
          use: [
            'html-loader',
            'ejs-html-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(s[a|c]ss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: '../test'

                publicPath: '/assets/',
              }
            },
            'css-loader',
            // https://github.com/postcss/postcss-loader
            // http://stech.machiiro.jp/entry/2017/03/27/142326
            // 'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              // https://github.com/webpack-contrib/file-loader
              loader: 'file-loader',
              options: {
                name: () => {
                  return devMode ? '[name].[hash].[ext]' : '[name].[ext]';
                },
                // 出力ファイルパス
                outputPath: (resource, resourcePath) => {
                  return path.join(resourcePath.replace(dir.src.base + '/', ''))
                },
                // アクセスファイルパス
                publicPath: (resource, resourcePath) => {
                  return path.join(path.relative(dir.src.style, dir.src.assets), resourcePath.replace(dir.src.base + '/', ''))
                }
              },
            }
          ],
        },
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      alias     : {
        '@js'     : dir.src.js,
        '@style'  : dir.src.style,
        '@images' : dir.src.images,
      }
    },
  }
}

module.exports = {
  makeDevelopment
}

