## Babel

### 概念

Babel是JavaScript的解析器。

Babel是一个工具，主要是将ES6之后的代码转化成之前版本的JavaScript，能够正常的在之前老的版本的浏览器/环境和现在的浏览器/环境中间运行。

babel已经能支持最新的JavaScript的语法啦，通过转义语法。

主要的工作：

- 转义语法

- 兼容之前的老版本

- 源码的转义

- And more

### 使用(usage)

1. 不用脚手架搭建

- 安装

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

- 在根目录下创建`babel.config.json`或者是`babel.config.js`

babel.config.json

```
{
    "presets": [
        [
            "@babel/env",{
                "targets":{
                    "edge":"17",
                    "firefox":"60",
                    "chrome":"67",
                    "safari":"11.1"
                },
                "useBuiltIns":"usage",
                "corejs":"3.6.5"
            }
        ]
    ]
}
```

babel.config.js

```
const presets= [
    [
        "@babel/env",{
            targets:{
                edge:"17",
                firefox:"60",
                chrome:"67",
                safari:"11.1"
            },
            useBuiltIns:"usage",
            "corejs":"3.6.5"
        }
    ]
];

module.exports={presets}
```

运行

```
npx src --out-dir lib
```

上面的语句意识是：将解析src里面的内容到lib里面

> 我有出现 找不到src的情况，这时候需要更新一下命令`npx babel src --out-dir lib`

### 插件解析

#### @babel/core

这是babel中的核心方法。

安装：`npm i --save-dev @babel/core`

使用：可以直接在js代码中通过require引入

```
const babel=require('@babel/core');
babel.transform("code",optionsObject);
```

#### @babel/cli

这工具能允许你在终端使用babel

安装：`npm install --save-dev @babel/core @babel/cli`

使用：`npx src --out-dir lib`

是将src文件夹里的文件解析出来，放到lib文件夹里

### Babel的配置

`Babel`可以配置，就跟`ESLint`的配置文件`.eslintrc`，`Prettier`的配置文件`.prettierrc`一样。

Babel的配置文件是`.babel.config.json`

#### 使用场景

- 是在使用`monorepo`
- 你想编译`node_modules`

使用`babel.config.json`

- 仅仅是为了支持项目中的一部分

使用`.babelrc.json`

> 推荐使用`babel.config.json`，因为`babel`本身也在使用。

