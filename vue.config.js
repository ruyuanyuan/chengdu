module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: {
      '/websit': {
        // target: 'http://192.168.0.105:8081',   //代理接口
        // target: 'http://192.168.5.19:8081',   //代理接口
        target: 'http://scyqcloud.amazingday.cn/',   //代理接口
        changeOrigin: true,
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true
      }
    },
    before: (app) => {
    },
  },
  css: {
    loaderOptions: {
      // 提供全局变量访问
      sass: {
        data: '@import "~@/assets/css/variable.scss";',
      },
    },
  },
};
