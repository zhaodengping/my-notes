//这是存放一些复杂的配置，包括loader/plugin/resolve等

const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:{//打包入口
        newApp:'./src/index.js',
        print:'./src/print.js'
    },
    output:{//打包出口
        filename:"[name].bundle.js",//打包后的文件名称
        path:path.resolve(__dirname,'dist')//路径
    }, 
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'管理输出'
        })
    ]
}