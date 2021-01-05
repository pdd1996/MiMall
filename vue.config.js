module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com', // 具体地址
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}