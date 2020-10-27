
## ES11

ES11不能用`node`直接在终端运行，可以通过html引入js文件，在浏览器中进行浏览。

### 过滤`null`和`undefined`

用`??`过滤`null`和`undefined` 。其他的`nullish`值是不受影响的，如0,'',false等。

```
let user={
    u1:0,
    u2:false,
    u3:null,
    u4:undefined,
    u5:''
}
const u1=user.u1 ?? 'Alice';
const u2=user.u2 ?? 'Alice2';
const u3=user.u3 ?? 'Alice3';
const u4=user.u4 ?? 'Alice4';
const u5=user.u5 ?? 'Alice5'; 
```

运行结果是`0`,`false`,`Alice3`,`Alice4`,''

```
let user2={
    u1:0,
    u2:false,
    u3:null,
    u4:undefined,
    u5:''
}

const u11=user2.u1 || 'Alice';
const u12=user2.u2 || 'Alice2';
const u13=user2.u3 || 'Alice3';
const u14=user2.u4 || 'Alice4';
const u15=user2.u5 || 'Alice5'; 
```

运行结果是`Alice`,`Alice2`,`Alice3`,`Alice4`,`Alice5`

相比较而言，这个`||`不太适用。


### 可选链

对于对象来说，需要判断节点是否存在，如果不是ES11，代码如下：

```
const user3={
    name:"Alice"
}
if(user3.a&&user3.a.age){
    //这里做相应的操作
}
```

ES11

```
const user3={
    name:"Alice"
}
const age=user3.a?.age;//undefined
```

这样大大减少了代码，提高代码的可读性，避免程序报错影响下面的代码。

`?.`用于检测元素是否存在，如果不存在，返回`undefined`，而不是报错`Uncaught TypeError: Cannot read property 'age' of undefined at`。

*** demo在`demo01`文件中


### Promise

之前的`Promise.all()`虽然能运行两个`Promise`，但是有缺陷，若有一个抛出`reject`，就会在`catch`执行。

```
Promise.all([
    new Promise((resolve,reject)=>reject('a1')),
    new Promise((resolve,reject)=>resolve('a2'))
]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

执行结果如下：`a1`。

由于`a1`的`promise`语句抛出的是`reject`,所以会在`catch`里面抛出结果。而`a2`的`promise`语句，是`resolve`,既不走`then`，也不走`catch`。

为了解决这个缺陷，我们可以使用`Promise.allSettle()`。

```
Promise.allSettled([
    new Promise((resolve,reject)=>reject('a1')),
    new Promise((resolve,reject)=>resolve('a2'))
]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

结果如下：`[{reason: "a1",status: "rejected"},{reason: "a2",status: "fulfilled"}]`。

如果是`Promise`抛出`reject`，会走`then`，但是如果在`then`语句中，出现语法错误等，会在`catch`抛出异常。

```
Promise.allSettled([
    new Promise((resolve,reject)=>reject('a1')),
    new Promise((resolve,reject)=>resolve('a2'))
]).then(res=>{
    console.log(w2)
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

运行结果如下：`ReferenceError: w2 is not defined`，走的是`catch`。

*** demo在`demo02`文件中

### import动态引入

> 由于import动态引入需要安装`babel`插件，我暂时没有安装，且先按照文档上的demo写一份，后期学习`babel`的时候补上。

```
const util='./util.js';

import(util).then(res=>{
    console.log(res)
})
```

以上代码为动态引入的demo。

*** demo在`demo03`文件中