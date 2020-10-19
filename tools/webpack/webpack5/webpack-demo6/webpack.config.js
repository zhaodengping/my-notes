//这是存放一些复杂的配置，包括loader/plugin/resolve等

const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{//打包出口
        filename:"[name].[contenthash].js",//打包后的文件名称
        path:path.resolve(__dirname,'dist')//路径
    }, 
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    optimization:{
        moduleIds:'hashed',
        runtimeChunk:'single',
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks:'all'
                }
            }
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