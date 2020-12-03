## Typescript

### 安装

```
npm i typescript -g
```

若要在node环境下执行ts文件，有2种方式

1. 安装ts-node

```
npm i ts-node -g
```

现在只需在终端执行`ts-node 文件名称`即可。

2. 在终端运行`tsc 文件夹名称`，将ts文件转化为js文件

在终端运行`node js文件`


### 基础类型

- 布尔值（boolean）

`true/false`

```
const isDone:boolean=true
```

- 数字（number）

Typescript中的数值支持十进制/十六进制/二进制/八进制

```
const decLiteral:number=6;
const hexLiteral:number=0xf00d;
```

- 字符串（string）

有三种方式

1. 简单

```
const companyName:string='Foreo';
```

2. 模版字符串

```
const totalName:string=`My company name is ${companyName}`
```

3. 多行文本+内嵌表达式

```
const companyOtherName:string='My company name is'+companyName
```

- 数组

有2种表达方式

1. 元素类型+[]

```
const list:number[]=[1,2,3]
```

2. 使用数组范型，Array<元素类型>

```
const list2:Array<number>=[1,2,3]
```

- 元祖（Tuple）

元祖是用于表示已知数量和已知类型的一组数据，这一组数据类型可以是不一样的（这跟数组区分开来），在初始化数据时，类型应与元祖类型保持一致

在增删改查方面都与数组保持一致。(push,pop,splice等)

```
//声明
let x:[string,number]

//初始化
x=['hello',1] //ok

x=[1,'hello'] //error 类型不一致

//访问
console.log(x[0].substr(1));//ok string可以substr()
console.log(x[1].substr(1));//error number不可以

//增
x.push('world')
//删
x.pop()
//改
x[0]='hello edit'
//查
console.log(x[0])
```

元祖解构,只能解构声明的长度，后面新增的不能解构出来

```
const [a,b]=x
console.log(a,b)
```

解构报错 `Tuple type '[string, number]' of length '2' has no element at index '2'`

```
let x:[string,number]
x=['hello',1]
x.push('world')
const [a,b,c]=x //Tuple type '[string, number]' of length '2' has no element at index '2'
```

- 枚举（enum）

枚举是将一组数值放在一起，取个名字

```
enum Color{Red,Green,Blue}
```

默认情况下，枚举的下标是从0开始的，但是也可以自己定义

```
//只定义第一个下标，其他往下增加
enum Color2{Red2=1,Green2,Blue2}
//全部由自己定义下标
enum Color3{Red=1,Green=4,Blue=6}
```

//根据下标获取对应的值
```
const colorName:string=Color[1]
```

- any

当不知道类型的时候，选则any，可以有效避免类型检查

- void

跟any相反，不返回任何值，一般用于函数没有任何返回时，用void

- Null和undefined

用处不大

- Object是非原始类型

### 类型断言

告诉编辑器，知道某个值是什么类型。

1. 设置尖括号 

```
const someVal:string='string';
const strLen:number=(<string>someVal).length
```

2. 使用as(Typescript中使用JSX时，只有as是允许的)

```
const strLen:number=(someVal as string).length
```