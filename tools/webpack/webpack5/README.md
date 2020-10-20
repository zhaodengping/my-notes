## webpack5

### 起步
#### 概念

`webpack`是用于编译`JavaScript`模块。

一个文件依赖另一个文件，包括静态资源(图片/css等),都会视为依赖关系。

在webpack处理程序时，会在入口处，根据依赖关系进行处理，生成一个依赖关系图，最终将所有的文件打包成一个bundle。

当浏览器发起请求时，大大节约了时间。

#### 更新方向

1. 尝试用持久性缓存来提高构建性能。
2. 尝试用更好的算法和默认值来改进长期缓存。
3. 尝试用更好的 Tree Shaking 和代码生成来改善包大小。
4. 尝试改善与网络平台的兼容性。
5. 尝试在不引入任何破坏性变化的情况下，清理那些在实现 v4 功能时处于奇怪状态的内部结构。
6. 试图通过现在引入突破性的变化来为未来的功能做准备，使其能够尽可能长时间地保持在 v5 版本上。

#### 安装

创建文件夹并初始化，文件夹中会出现`package.js`文件，是基础的一些配置，包括文件名称/版本/描述/入口文件/关键字/作者等。

```
npm init -y
```

安装`webpack`和`webpack-cli`工具，可以在终端运行`webpack`相关命令

node 8.2/npm 5.2.0提供npx命令，可以使用`npx webpack`去安装`npx`
 
根据相应的提示，安装`webpack-cli`和`webpack`

```
npm install -D webpack-cli
```

我安装的版本如下：

```
"devDependencies": {
    "webpack": "^5.1.0",
    "webpack-cli": "^4.0.0"
},
```

#### 打包

使用`npx webpack`进行打包，会在`/dist`文件夹中，生成`mian.js`文件，这个是对`index.js`文件以及相应依赖进行的打包文件

#### 配置文件 webpack.config.js

在完成配置的webpack.config.js的文件夹后，再次打包，打包命令是npx webpack --config webpack.config.js

一般情况下，如果存在webpack.config.js文件，将默认选择根据这个配置文件进行打包，即npx webpack即可

其中--config表示根据什么文件配置进行打包，后面的参数就是对应的文件名称

配置文件里面都是一些配置，如`loader/plugin/resolve`等

#### 快捷方式

在`package.json`文件中，配置`script`

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
},
```

可快速的通过`npm run build`进行打包，效果跟之前的`npx webpack`一致。

*** 以上代码在`webpack-demo1`中


### 管理资源

由于webpack只能打包js文件，但是其他文件，如图片/css等，如何打包呢？

基本的思路都是将相应的资源都转化成js文件

#### css

正常的css文件例子如下

安装 `style-loader`和`css-loader`

```
npm i --save-dev style-loader css-loader
```

在`webpack.config.js`中配置相应的`css`,顺序很重要，'style-loader','css-loader'

最终打包出来的是一个js文件

```
module:{
    rules:[{
        test:/\.css$/,
        use:['style-loader','css-loader']
    }]
}
```
最终再页面上展示的是在head中添加了style，由此我猜测，style-loader的作用是将css文件放置到head中去渲染，css-loader的作用是将css文件(包含其他形式的css，如.scss)转化成js文件

其他的比如less/sass等，都跟css写法保持一致，最需将匹配的test，改成相对应的文件后缀。

#### image图片

安装解析文件的loader，`npm i --save-dev file-loader`

并在module中进行配置

```
module:{
    rules:[{
        test:/\.(css|scss)$/,
        use:['style-loader','css-loader']
    },{
        test:/\.(png|jpeg|jpg|svg)$/,
        use:['file-loader']
    }]
}
```

最终在页面上检查元素时，发现webpack以及将路径转义了。


其他形式的文件，都是以上面相应的方法进行安装和配置即可。

*** 以上代码在`webpack-demo2`中

### 管理输出

当文件程序变得复杂，而且在`entry`中使用多个入口，并输出多个`bundle`，如果要手动在`index.html`中添加，便使得整个代码看起来不便捷

这时使用插件`html-webpack-plugin`

#### html-webpack-plugin

这个插件可以自动更新`index.html`中有关js引入的文件

安装`npm i --save-dev html-webpack-plugin`

使用：
```
const HtmlWebpackPlugin=require('html-webpack-plugin')
plugins:[
    new HtmlWebpackPlugin({
        title:'管理输出'
    })
]
```

缺点是不能去除之前的旧文件，这时引入`clean-webpack-plugin`

#### clean-webpack-plugin

这个插件可去除`/dist`文件

在构建前去除`/dist`文件，可以达到效果


安装`npm i --save-dev clean-webpack-plugin`

使用：
```
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title:'管理输出'
    })
]
```

*** 以上代码在`webpack-demo3`中

### 开发环境

这部分是在开发环境，切不可在生产环境使用。

#### 配置环境

在`webpack.config.js`中进行mode的配置

```
mode:'development'
```

#### 定位错误(source map)

打包文件时，由于打包到一个文件里，如果出现语法错误，只会定位到打包后的文件，对于我们查找问题就不太方便。

source map有很多的配置，对于我们现在打包定位错误，只需其中的`devtool`配置即可。

```
devtool: 'inline-source-map',
```

如webpack-demo4中的例子所示，`print.js`中，刻意写错代码如：`cnlll.log('This is output')`

正常打包，在浏览器运行时，会在console里显示报错的文件，以及错误的原因。


#### 自动编译

`webpack-dev-server`插件提供一个简单的web server，且具有热加载的功能。

安装`npm i --save-dev webpack-dev-server`

在配置文件中配置:

```
devServer:{
    contentBase:'./dist'
},
```
以上代码是告诉dev server，将dist文件下的文件，挂载到localhost:8080下。

在`package.json`中进行配置口令运行 dev server

教程上建议如下配置

```
"start": "webpack-dev-serve --open"
```

在实践操作中，在执行`npm run start`时，我出现以下报错

```
> webpack-demo4@1.0.0 start /Users/alicezhao/Desktop/learn/demos/my-notes/tools/webpack/webpack5/webpack-demo4
> webpack-dev-server --open

internal/modules/cjs/loader.js:969
  throw err;
  ^

Error: Cannot find module 'webpack-cli/bin/config-yargs'
Require stack:
- /Users/alicezhao/Desktop/learn/demos/my-notes/tools/webpack/webpack5/webpack-demo4/node_modules/webpack-dev-server/bin/webpack-dev-server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:966:15)
    at Function.Module._load (internal/modules/cjs/loader.js:842:27)
    at Module.require (internal/modules/cjs/loader.js:1026:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/Users/alicezhao/Desktop/learn/demos/my-notes/tools/webpack/webpack5/webpack-demo4/node_modules/webpack-dev-server/bin/webpack-dev-server.js:65:1)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/alicezhao/Desktop/learn/demos/my-notes/tools/webpack/webpack5/webpack-demo4/node_modules/webpack-dev-server/bin/webpack-dev-server.js'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! webpack-demo4@1.0.0 start: `webpack-dev-server --open`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the webpack-demo4@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/alicezhao/.npm/_logs/2020-10-15T07_50_22_972Z-debug.log
```

我的有关`webpack`版本配置如下

```
"devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^4.5.0",
    "webpack": "^5.1.0",
    "webpack-cli": "^4.0.0",
    "webpack-dev-server": "^3.11.0"
},
```

我在github上找到相关的问题，看[这里](https://github.com/webpack/webpack-dev-server/issues/2759)

是`webpack-dev-server`版本不支持`webpack5.0`和`webpack-cli4.0`

最终在`package.json`应做如下配置

```
"start": "webpack serve --mode development --env development"
```

再执行`npm run start`就正常启动。

*** 以上代码在`webpack-demo4`中

### 代码分离

代码分离的有点在于：

1. 切割代码，生成不同的打包文件，按需加载这些文件。
2. 每个bundle的体积更小
3. 控制外部资源的加载顺序

常用的方法有：

1. 入口起点：使用入口`entry`手动分离
2. 防止重复：使用`SplitChunksPlugin`去重和分离`chunk`
3. 动态导入：通过模块的内联函数调用分离的代码

#### 入口起点

新增另一个文件`another-module.js`文件，并在`webpack.config.js`中进行配置。

```
entry:{//打包入口
    index:'./src/index.js',
    another:'./src/another-module.js'
},
```

进行打包后，结果正常。

优点：常用常规的写法。

缺点：1.如果有相同的模块，不会去重，还是会在每个bundle中被重复的引用。2.不能将核心代码进行分割

#### 防止重复

##### 入口依赖

配置`dependOn`选项，可以在多个chunk之间进行共享模块。


SplitChunkPlugin

为了解决多个bundle引入相同模块的问题，引入这个模块进行去重。

`SplitChunkPlugin`将公共的模块引入到已有的入口中，或者提取到新的chunk。

相关配置如下：

```
//webpack.config.js
optimization:{
    splitChunks:{
        chunks:'all'
    }
},
```

*** 以上代码在`webpack-demo5`中

### 缓存

通常部署文件是将webpack打包出来的`/dist`文件，部署到`server`上，客户端通过访问`server`的网站及资源。

由于客户端访问`server`时，非常耗时和耗流量，于是浏览器采用缓存技术，可以直接从缓存中获取相关的内容，降低了请求的速度和流量。但是这也有一个缺点：如果文件名跟之前的一致，浏览器会认为这个文件没有做修改，还是会从缓存中获取相关内容。

我们想要的现象是：文件没做修改时，浏览器从缓存中获取，文件修改了，重新获取。

#### 输出文件的文件名

webpack提供了一个`substitution`（可替换的模版字符串）的方式，通过带括号字符串来模版化文件名。其中的`[contenthash]`是根据资源内容创建唯一的`hash`。当资源内容变化时，`[contenthash]`也会发生变化。

相关配置如下：

```
entry:'./src/index.js',
output:{//打包出口
    filename:"[name].[contenthash].js",//打包后的文件名称
    path:path.resolve(__dirname,'dist')//路径
}, 
```

在我本地多次运行，打包的文件名是不变的。

#### 模块的概念

runtime：每个模块的加载和模块的解析逻辑。

manifest：解析和映射模块之间的联系

#### 提取引导模版

将`runtime`代码，提取到一个单独的chunk中。`optimization.runtimeChunk:'single'`表示为所有的chunk创建一个`runtime bundle`。

代码如下：

```
optimization:{
    runtimeChunk:'single'
},
```

将所有的第三方库，如`lodash/react`等提取到单独的`vendor chunk`文件中。由于这些第三方库不会去频繁的修改源代码，所以可以让更少的向`server`发请求。

配置如下：

``` 
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
```

结果会出现一个带有`vendor`的文件。

在`main`文件里，不再含有来自`node_module`的`vendor`代码，而且体积也减少了。


#### 模块标识符

新增print模块，并在index中进行引入，最终打包的结果跟之前比较结果如下：

我本地打包只有main的文件进行了变化----符合预期

然而官网上展示的例子是不一样，引出了需要引入`optimization.moduleIds:'hashed'`---苦笑不得


*** 以上代码在`webpack-demo6`中

### 环境变量

可以在`package.json`中配置相关的命令行，可以快速的执行`开发环境`和`生产环境`。

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --env development"
},
```

表示执行`development`环境。

### 模块热替换(HMR)

模块热替换(HMR--hot module replacement)：在程序运行过程中，若有替换/添加/删除模块，只更新修改的部分，不需要更新整个页面。

> 此功能暂不支持生产环境。

代码配置如下：

```
devServer:{
    contentBase:'./dist',
    hot:true
},
```

在index页面加入代码

```
if(module.hot){
  module.hot.accept('./print.js',function(){
    console.log('update the module1');
    Print()
  })
}
```

注意：执行时使用`npm run start`，启动服务，可查看热更替。


*** 以上代码在`webpack-demo7`中

> 模块热更替跟热更新是两回事。模块热更新是指修改了某个部分代码，不会刷新页面，而是在页面更新这个模块。热更新是指及时刷新页面。

### Tree shaking

#### 概念

是指在打包的时候，剔除没有用到的代码。

但是只支持ES module的import和export用法。

#### 实践

打包过程分成3部分：

1. `import`会被打包成`/* harmony import */`做前缀，表明这段是`import`进来的
2. `export`会被打包成`/* harmony export */`做前缀，表明这段是`export`的
3. 纯函数，会被打包成`/*#__PURE__*/`，表明这个函数是纯函数，可以被`tree shaking`掉

代码如下：

package.json

```
"name": "webpack-demo8",
"sideEffects":false,
```

webpack.config.js
```
optimization:{
    usedExports:true
}
```

*** 以上代码在`webpack-demo8`中