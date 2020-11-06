## Babel

### 概念

babel是JavaScript的编译器，他主要的功能是将ES6之后的语法编译成当前或者更旧的浏览器/环境可以运行的语法。

例子：

```
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

### 安装

可以根据自己的需求，安装相应的插件

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env

npm install --save @babel/polyfill

npm install --save-dev @babel/preset-react

npm install --save-dev @babel/preset-typescript

npm install --save-dev @babel/preset-flow
```

### 使用

在根目录下创建babel的配置文件，可以是babel.config.json或者是babel.config.js

babel.config.json

```
{
  "presets": [],
  "plugins":[]
}
```

bable.config.js

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
            "useBuiltIns":"usage",
            "corejs":"3.6.5"
        }
    ]
];

module.exports={presets}
```

### 运行

单文件，在终端执行以下命令

```
npx babel index.js
```

执行结果如下：

图1

#### --out-dir

表示编译放置到文件夹里

如果想把当前文件编译结果，存到另外的文件夹里，可执行如下命令：

```
npx babel src --out-dir lib
```

执行结果如下：

图2

lib下的index文件就是编译后的文件 。

#### --out-file

表示编译到文件里

#### -o

或者执行如下命令，只不过编译出来的文件是txt格式。

```
npx babel src -o lib
```

执行结果如下：

图三

#### --watch/-w

实时编译的话，可以使用

```
npx babel index.js --watch --out-file script.js
```

#### --source-maps inline

表示编译成一个源码格式的

```
npx babel src --out-file babel-index.js --source-maps inline
```

图四

### 浏览器环境

Babel也可以用于浏览器环境。但是，从Babel 6.0开始，不再直接提供浏览器版本，而是要用构建工具构建出来。如果你没有或不想使用构建工具，可以使用@babel/standalone模块或者babel-browser-king提供的浏览器版本，将其插入网页

```
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//或者
<script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script>
<script type="text/babel">
    const arr=[1,2];//your codes
</script>
```
