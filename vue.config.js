module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    // host: '192.168.0.105',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: {
      '/website': {
        target: 'http://192.168.0.121:8080',   //代理接口
        // target: 'http://127.0.0.1:8081',   //代理接口
        // target: 'http://scyqcloud.amazingday.cn/',   //代理接口
        // target: 'http://58.216.47.106:8083/',   //代理接口
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
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
