## 数值的扩展Math 
### Math.trunc()
去除小数部分
>Math.trunc内部相使用Number将字符串转化为数字，再进行去除。如果不能取整的数或空值，直接为NAN

### Math.sign()
判断数值符号
>也会先使用Number将字符串转化为数字，结果有1，-1，0，-0，NAN

## 函数的扩展function
### 函数参数的默认值
```
function defalutValue(x,y="worldD"){};//形如这种写法，设置默认值
```

### rest参数
获取函数多余的参数
>rest参数只能放在参数的最后一个

## 数组扩展
### 扩展运算符
可以深克隆数组
```
let a1=[1,2,3];
let a2=[...a1];
a2[1]=2;//a1=[1,2,3];a2=[2,2,3]
```
### 数组合并
1. contact
```
let a3=[1,2,3];
let a4=[4,5,6];
let a5=a3.concat(a4); //原数组不变
```
2. 扩展运算符
```
let a3=[1,2,3];
let a4=[4,5,6];
let a5=[...a3,...a4]; //原数组不变
```

### 数组最大值/最小值
`Math.max()`和`Math.min()`,参数不能直接传数组

数组可以使用扩展运算符

[例子详见](https://github.com/zhaodengping/basic-web/blob/zhaodengping/examples/es6/Math.js)

### Array.of() 将一组值转化为数组
```
let b1=Array.of(1,2,3); //[1,2,3]
```
### copyWithin() 复制
>三个参数，复制的位置(必填)，复制的开始位置，复制的最终位置
```
[1,2,3,4,5].copyWithin(0,3);//[4,5,3,4,5]
```
### find和findIndex
find:找到数组符合条件的第一个成员，如果没有为undefined

findIndex:找到数组符合条件的第一个成员的位置,如果没有为-1

### fill 填充
```
let c4=[1,2,3].fill(2);//[2,2,2]
```

### 数组的keys(位置),values(数值),entries()
```
let c5=['a','b','c'];
for(let i of c5.keys()){
    console.log(i);//0,1,2
}
for(let i of c5.values()){
    console.log(i)//'a','b','c'
}
for(let i of c5.entries()){
    console.log(i);//[0,'a'],[1,'b'],[2,'c']
}
```

### includes是指数组里包含某个值

### flat数组拉平

## 对象的扩展
### 属性名表达式
```
obj.name=true;
obj[name]=true;
```
### 合并对象
#### Object.assign
>会改变原目标对象,Object.assign(target,source,source)
```
let a1={name:"abc",age:10};
let a2={name1:"cdf",age2:12};
let a3=Object.assign(a1,a2);//会修改原目标对象
let a4=Object.assign({},a1,a2);//不会修改原对象
```

### Set和Map数据结构
#### Set:类似数组，内部成员都是唯一
```
let a1=[...new Set([1,2,3,1,2,3])];//[1,2,3]
```

## ES7,8,9
更多的是对ES6的补充

比如：

1. async对promise的补充

2. 对象的keys(),values(),entries()

3. 数组的includes(),判断

4. number的指数运算，之前是`Math.pow(2,3)`，现在支持`2**3`

5. padStart()和padEnd()。提前给字符串一个长度，如果不满足便自动填充
```
"aaa".padStart(5,"x");//"xxaaa"
```

5. 扩展运算符 包含数组和对象
```
//数组
let number1=[1,2,3];
[...number1];
//对象
let obj1={a:1,b:2,c:3};
const {a:1,...obj2}=obj1
obj2={b:2,c:3}
```
也让数组的最大值最小值实现
```
let arr=[1,2,3];
let max=Math.max(...arr);//3
let min=Math.min(...arr);//1
```

6. 正则表达式(不是很理解)

有不清楚的，参考[参考文档](https://www.imooc.com/article/37899)