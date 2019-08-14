const path = require('path');
const {
    override,
    addWebpackAlias,
    fixBabelImports
} = require('customize-cra');

module.exports = override(
         addWebpackAlias({        
            ["@"]: path.resolve(__dirname, "src"),
             // ["mock"]: path.resolve(__dirname, "src/mock")            
        }),
         // 配置 ant 按需引入
         fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css',
        })
)