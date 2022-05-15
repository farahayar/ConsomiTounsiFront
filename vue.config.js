module.exports = {
  publicPath: './',
  chainWebpackMainProcess: (config) => {
    config.module.rule('javascript/auto').test(/\.mjs$/)
  }
}