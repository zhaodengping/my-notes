## vue-cli
如果在windows git Bash下去使用`vue create demo`命令行，会出现光标不能下移情况

这时最好使用 winpty vue.cmd create demo去创建项目

## vue-router 懒加载
```
routes:[
    {
        path:'',
        component:resolve=>require(['文件路径'],resolve)
    }
]
```
vue-router模式：`hash`和`history`2种模式

* `hash`是会自动在路由后面加上`#/`

* `history`就是真实访问的路由，不会在后面加上`#/`

## 发请求 axios

#### delete发请求，传参
是因为 post 和 put 第二个参数是data，所以可以直接在第二个参数的位置写上数据，后台可以访问到，而delete第二个参数是 config ，所以要通过 config 里面的 data 来传参
```
axios.delete('/api',{data:{id:1}});
```

## computed，watch，methods区别
### computed
>computed：是根据响应式依赖进行缓存的，只有在响应式依赖发生变化的时候，才会重新求值
### methods
>methods：没有缓存，每次触发都会进行重复的求值
### watch
>监控

## prop
### 单向数据流
在父子传值时，使用prop传递值，子组件只能接收，不能修改父传过来的值

若想修改
1. 在data里面定义一个值，
```
props:{
    "name":{
        type:String,
        default:""
    }
},
data:{
    return{
        newName:this.name;//之后可以任意修改newName的值了
    }
}
```
2. 如果是以原始的值，并且要去转换（我的理解是：在页面刚注入的时候去获取父传过来的值）,可以在computed中去定义
```
props:{
    name:{
        type:String,
        default:""
    }
},
computed:{
    newName:function(){
        return this.name.trim()
    }
}
```
### prop验证
如果类型是Object和Array，default有特殊
```
props:{
    name:{
        type:String,//类型
        default:"",//默认值
        required:true,//是否必须
    },
    name:{
        type:[string,Number];//多个类型
    },
    name:{
        type:Object,
        default:function(){
            return {}
        }
    },
    name:{
        type:Array,
        default:function(){
            return []
        }
    }
}
```

### 自定义属性 
#### 实现自定义的双向绑定
1. v-model

[自定义属性例子](https://github.com/zhaodengping/basic-web/blob/zhaodengping/examples/vue/v-model.html)

2. aync修饰符

是改良版的v-model,因为v-model是有修改父组件传过来的值，但是由于数据是单向的，有些地方还是不太合理，aync修饰符避免了这个缺点

v-bind.aync修饰符是`:title='title' v-on:update:title='changeTitle'`的缩写，值得注意的是`v-on:update:title`这种写法

但是`v-bind:aync={title:doc.title}`这样写是不起作用的，[详见](https://cn.vuejs.org/v2/guide/components-custom-events.html)

[例子详见](https://github.com/zhaodengping/basic-web/blob/zhaodengping/examples/vue/sync.html)

## 插槽
存在于父子组件中，作为内容分发的出口(有点拗口)，我的理解是，父组件引用子组件的时候，有相应的内容，子组件用slot去把父组件的这些内容分发出去。
```
<div id='app'>
        <div>父组件</div>
        <new-name>
            <div>hhh</div> //
            <div>lalalal</div> //父组件中的值，要分发出去的内容
        </new-name>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script>
        let app=new Vue({
            el:"#app",
            data:{
                
            },
            components:{
                "new-name":{
                    template:`
                        <div>
                            <div>子组件</div>
                            <slot></slot> //分发的出口
                        </div>
                    `
                }
            }
        })
    </script>
```
### 默认值
```
components:{
    "new-name":{
        template:`
            <div>
                <div>子组件</div>
                <slot>我是默认值</slot>
            </div>
        `
    }
}
```
### 插槽名称
没有定义插槽名称的，默认为"default"，可以在`<slot name="name1"></slot>`设置名称，在父组件中的
```
<my-name>
    <template v-slot:name1> //去设置要传入的插槽的名称
        <div>hhh</div>
    </template>
</my-name>
```
> 没有被v-slot包含的内容，是默认内容

## 动态组件
### keep-alive缓存
使得之前点击过的内容，在点击完被缓存下来

## 访问根元素 $root
## 访问父组价 $parent
## 访问子组件或子元素 ref，相当于id的效果
## 程序化的事件监听
$on(侦听一个事件),$once(一次只监听一个事件),$off(停止侦听一个事件)

## 内联模板 inline-template 可以将里面的内容作为模板
## 强制更新 $forceUpdate 不推荐
## 模板缓存 v-once 不推荐

## 元素/组件过渡
transition组件 [例子详见](https://github.com/zhaodengping/basic-web/blob/zhaodengping/examples/vue/transtion.html)

[官方文档](https://cn.vuejs.org/v2/guide/transitions.html)

## 混入 mixin
提供vue组件复用，可以包含组件的任意选项

data里面的属性，如果有相同的，会覆盖混入的值

created等生命周期函数，混入的函数会在组件周期之前调用，不会影响组件使用

[例子详见](https://github.com/zhaodengping/basic-web/blob/zhaodengping/examples/vue/mixin.html)

### 可以全局混入，不推荐

## 自定义指令 directives

