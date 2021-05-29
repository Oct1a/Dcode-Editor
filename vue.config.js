const path = require('path')
const fs = require('fs')

function resolve(dir) {
  return path.join(__dirname, dir)
}

let devServer = {
  proxy: { // 代理
    '/': {
      target: 'http://localhost:3333', //设置你调用的接口域名和端口号 别忘了加http
      ws: false, //如果要代理 websockets
      changeOrigin: true, //将主机标头的原点更改为目标URL
      pathRewrite: {},
    }
  }
}

module.exports = {
  devServer: devServer,
  // 输出文件目录
  assetsDir: "static",
  outputDir: './service/public',
  // publicPath: "./service/public",
  publicPath: "./",
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'client/main.js', // 入口
      template: 'public/engine-h5-long.html', // 模板
      filename: 'index.html', // 输出文件
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名,设置全局css变量
        data: fs.readFileSync(path.resolve(__dirname, `./client/common/styles/variables.scss`), 'utf-8') // 公共变量文件注入
      }
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('client'))
      .set('@client', path.resolve('client'))
      .set('@plugins', path.resolve('plugins'))
      .set('@service', path.resolve('service'))
    config.module
      .rule('js')
      .include.add(/engine-template/).end()
      .include.add(/client/).end()
      .include.add(/common/).end()
      .use('babel')
      .loader('babel-loader')

    .tap(options => {
        // 修改它的选项...
        return options
      })
      // 移除 prefetch 插件,当页面太多时，会导致太多无意义的请求
    config.plugins.delete('prefetch')

  }
}