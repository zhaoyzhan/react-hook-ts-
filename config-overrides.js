
const { 
    override, 
    fixBabelImports, 
    addLessLoader, 
    overrideDevServer, 
    addWebpackAlias,
    addDecoratorsLegacy
} = require('customize-cra');
const path = require("path");

// 使用ant-design搭建React+ts项目，可在此重重定义antd全局样式
const overConfig  = override(
    addDecoratorsLegacy(),
    addWebpackAlias({  //增加路径别名的处理
        '@': path.resolve(__dirname, 'src')
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#DA3C47' },
    }),
    // (config) => { //暴露webpack的配置
    //     // 去掉打包生产map 文件
    //     if(process.env.NODE_ENV === 'production') config.devtool=false;
    //     return config
    // }
);


const devServerConfig = () => config => {
    return {
        ...config,
        proxy: {
        '/api': {
            target: 'http://test-ybapp.moliyan.com.cn',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': ''
            }
        }
        }
    };
};


// module.exports = function (config, env) {
//     return overConfig(config, env)
// }

// 关掉 sourceMap
process.env.GENERATE_SOURCEMAP = process.env.NODE_ENV !== 'production' ? 'true' : 'false';

module.exports = {
    webpack: overConfig,
    devServer: overrideDevServer(devServerConfig())
}