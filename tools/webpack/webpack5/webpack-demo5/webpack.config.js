//这是存放一些复杂的配置，包括loader/plugin/resolve等

const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    mode:'development',
    entry:{//打包入口
        index:{import:'./src/index.js',dependOn:'shared'},
        another:{import:'./src/another-module.js',dependOn:'shared'},
        shared:'lodash'
    },
    output:{//打包出口
        filename:"[name].bundle.js",//打包后的文件名称
        path:path.resolve(__dirname,'dist')//路径
    }, 
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false
        }),
        new HtmlWebpackPlugin({
            title:'管理输出'
        })
    ]
}