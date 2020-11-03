## dart sass

### 概念 

dart sass是css的一个预处理器。基本思想是，定义一个专门的编程语言，为css增加了一些编程的的特性，最终生成css文件。开发者可以这个语言，使用变量/函数/简单的逻辑程序进行编程。

### 比较

node-sass

1. 底层采用node调用lib sass来编译sass。
2. 由于网络的原因，连接node-sass下载node_module时，经常下载报错。 

dart-sass

1. 底层采用dart VM（虚拟机）编写
2. 易安装
3. dart-sass 最终编译成纯JavaScript，所以在js文件中也可以使用sass。


### 安装

#### nodeJS环境

```
npm install -g sass;//全局安装
```


#### Mac Os或者Linux环境

```
brew install sass/sass/sass
```

### 写法

写法一：带括号

```
@mixin button-base() {
  @include typography(button);
  @include ripple-surface;
  @include ripple-radius-bounded;

  display: inline-flex;
  position: relative;
  height: $button-height;
  border: none;
  vertical-align: middle;

  &:hover { cursor: pointer; }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
    cursor: default;
    pointer-events: none;
  }
}
```


写法二：不带括号

```
@mixin button-base()
  @include typography(button)
  @include ripple-surface
  @include ripple-radius-bounded

  display: inline-flex
  position: relative
  height: $button-height
  border: none
  vertical-align: middle

  &:hover
    cursor: pointer

  &:disabled
    color: $mdc-button-disabled-ink-color
    cursor: default
    pointer-events: none
```


### 注意事项

1. 在html中不能直接引入scss，因为浏览器不支持scss，只支持css。结果如下图：

这里有个图1

解决方法：使用命令行进行转化

```
sass input.scss output.css
```

结果会生成一个input.css和一个input.css.map。

直接在html中引入这个css即可

参考这个[stackoverflow]的问题(https://stackoverflow.com/questions/60484685/css-cannot-be-loaded-from-file-urls-unless-they-end-in-a-css-file-extensio)