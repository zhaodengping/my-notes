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


