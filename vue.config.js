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
                pathRewrite: { '^/api': '' },
            }
        }
    },
    publicPath: './'
  }