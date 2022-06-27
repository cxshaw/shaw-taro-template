module.exports = {
  env: {
    NODE_ENV: '"production"',
    BASE_API: '""',
    BASE_URL: '"https://niffler.uni-ubi.com"',
    // BASE_URL: '"http://192.168.4.40:8096"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};
