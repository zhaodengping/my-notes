## 如何写出漂亮的代码
提高代码的可读性、复用性、扩展性

### 变量
- 有意义且常用的单词

- 保持统一

- 常量应该大写

- 避免无意义的命名

- 传参使用默认值

```
// Bad:
function createMicrobrewery( name ) {
    const breweryName = name || 'Hipster Brew Co.';
    // ...
}
// Good:
function createMicrobrewery( name = 'Hipster Brew Co.' ) {
    // ...
}
```
### 函数
- 函数参数超过2个用解构，不用考虑参数顺序

- 一个方法只做一件事情

- 函数名体现这个函数的作用

- 删除重复代码，合并相似代码

- 使用Object.assign设置默认属性

- 尽量别写全局方法

- 尽量别用！条件句

- 删除弃用代码

### 类
- 使用ES6的class

- 使用原型链

### 异步
- 使用Promise或者Async/await代替回调

## 命名规则

### 项目命名
全部采用小写，以下划线分割

例子：my_project_name

### 目录命名
参考项目命名

### JS文件命名
参考项目命名

### css/scss命名
参考项目命名

### HTML文件命名
参考项目命名

#### HTML规范
- 缩进使用tab(4个空格)

- 嵌套的属性应缩进

- 属性使用双引号，不使用单引号

- 属性名全小写，用中划线分割

- 属性的顺序

  - class
  
  - id

  - name

  - data-*

  - src/for/type/href/value/max-length/max/min/pattern

  - placeholder/title/alt

  - aria-*/role

  - required/readonly/disabled

- 减少标签数量，避免多余的父节点

#### css/scss规范

- 缩进使用tab(4个空格)

- 每个属性末尾都有分号

- 关于空格

 1. 不需要空格情况

    - 属性之后

    - 多个规则的分隔符“,”前

    - !important的!之后

    - 属性值的“(”和“)”

    - 行末不要

 2. 需要空格

   - 选择器‘>’'+''~'前后

   - “{”前

   - !important前

   - 属性值的‘,’后

- 关于空行

   - 文件最后保留空行

- 注释统一用`/** */`

- 命名

  - 类名使用小写字母，统一用中划线间隔

  - id使用小驼峰

  - scss中变量／函数／混合／placeholder统一用小驼峰