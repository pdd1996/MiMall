module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn', // 具体地址
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}