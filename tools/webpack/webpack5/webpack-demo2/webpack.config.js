//这是存放一些复杂的配置，包括loader/plugin/resolve等

const path=require('path');

module.exports={
    entry:"./src/index.js",//打包入口
    output:{//打包出口
        filename:"bundle.js",//打包后的文件名称
        path:path.resolve(__dirname,'dist')//路径
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.scss$/,
            use:['style-loader','css-loader']
        }]
    }
}