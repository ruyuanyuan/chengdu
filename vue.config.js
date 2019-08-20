module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 9999,
    https: false,
    hotOnly: false,
    proxy: null,
    before: (app) => {},
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
