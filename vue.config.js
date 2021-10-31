module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    include: /node_modules/,
                    test: /\.mjs$/,
                    type: 'javascript/auto'
                }
            ],
          },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:2999',
                changeOrigin: true,
                // 这里也太奇怪了点吧，必须要写pathRewrite才能代理
                pathRewrite: { '^/api': '' },
            }
        }
    },
    publicPath: './'
  }