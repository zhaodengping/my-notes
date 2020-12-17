## 微信公众平台

openId：是每个用户登陆不同的平台或者不同公众号时，会对应不同的openId

unionId:不同的公众号或者不同平台需要通信的时候，将这些公众号和平台绑定到微信开放平台上，那这些公众号和平台就只有一个UnionId

### 微信小程序目前的框架有如下：

- vantUI(有赞)[偏商城]：`https://youzan.github.io/vant/#/zh-CN/uploader`

- wux-weapp[偏操作]:`https://wux-weapp.github.io/wux-weapp-docs/#/introduce`

- MinUI(蘑菇街)：`https://meili.github.io/min/docs/minui/index.html`

- ColorUI(个人开发)[偏颜色艳丽]：`https://github.com/weilanwl/ColorUI`

### 微信登陆流程
微信多个载体(APP微信授权，微信公众号授权登陆)，`openId`是不一致的，但是`unionId`是一致的

所以在走流程时，

1. 先判断unionId在数据库中存在不存在

    - 存在，拿unionId去数据库换token,获取用户信息，更新openId，---首页
    - 不存在，在启动页，让用户点击授权登陆，获取用户信息，再进行手机号授权
        * 微信授权手机号 ---首页
        * 登陆注册手机号 ---首页

2. 代码方面：

    - 进入启动页
        ```
        wx.login();//获取code，code只能获取一次
        ```
    - 将`code`传给后端，换取`sessionKey`,`openId`,`unionId`

    - 点击微信授权按钮,获取用户信息
        `getUserInfo`会获取用户信息，`bindgetuserinfo`会弹出框，让用户点击授权，里面的参数也会有用户信息
        ```
        <button open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">微信授权登录</button>
        ```
    - 点击微信手机号授权
        `getPhoneNumber`会获取加密过后的手机号，传给后端，获取解密后的手机号
        ```
        <button form-type="submit" open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">微信授权获取手机号</button>
        ```

### 如何用npm安装第三方库
- 创建新文件夹

- 用微信小程序打开，初始化(微信小程序构建需要的是空文件)

- 在终端输入`npm init`，不进行这步，在构建npm时，找不到node_modules的包

- 执行`npm install 包名 --save -production`,`-production`会使得少安装跟业务无关的包

- 在微信小程序工具，构建，会生成miniprogram_npm这个文件夹，说明构建成功

### 小程序API
#### WXS
简介：是小程序的脚本语言，跟JavaScript不完全一致，但是语法差不多一致

wxs文件是只能在`<wxs></wxs>`中使用，而且是独立的，只能在wxml中引入wxs文件或者是另一个wxs引入，但是不能引入到js或其他文件中。通过`module.exports`去共享

>暂时不支持ES6语法
```
<wxs src="../../wxs/test.wxs" module="test1"/>//module是指引入的模块，test1是自定义的模块的名称
<view>{{test1.name}}</view>//可以调用test1去取wxs里面的值
```
>module的命名规则是首字母大小写均可，中间以下划线_间隔

当wxs引入另一个wxs文件中，可以使用`require`去引入
```
var nameNew=require('./test.wxs');
```
##### 命名规则
- 变量名均以下划线(_)间隔


