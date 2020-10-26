
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

