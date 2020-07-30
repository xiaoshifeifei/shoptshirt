module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://test5.heroinhere.com',
                changeOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
     //警告 webpack 的性能提示
     configureWebpack : {
        performance: {
            hints:'warning',
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 90000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 90000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    }
   
};
