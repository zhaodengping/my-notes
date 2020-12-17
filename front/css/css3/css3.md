## 变量
### :root声明全局变量
>跟html级别一样
用"--"去定义变量
```
:root{
    --theme-color:red
}
nav{
    color:var(--theme-color)
}
```
## 计算属性值 calc
```
calc(100vh - 70px);//注意符号前后需有空格，不然不识别
```

### border
1. border-radius:边框圆角
2. border-shadow:边框阴影

属性顺序为：水平阴影位置，垂直阴影位置，模糊的距离，阴影的尺寸，颜色，阴影的位置（默认outset,在边框外，可为inset，在边框内）
>想要四周阴影，将颜色放前面，水平/垂直位置为0，设置模糊距离，就可

### background
1. background-size:背景图大小
2. background-origin:背景图的位置
>有三个属性，默认为padding-box，另外2个属性值为content-box,border-box

### text-shadow 文字阴影
属性值顺序为：水平阴影位置，垂直阴影位置，模糊距离

### word-wrap 文字换行
word-wrap:word-break;为文字换行

### transform 
2D转换

1. rotate:旋转的角度
2. translate:移动的位置
3. scale:放大，（宽度，高度）
4. skew:根据X轴和Y轴翻转的角度

### 设置背景图模糊
- `filter:blur(20px);//设置高斯模糊`

- `transform:scale(1.5)`

### `display:grid`
#### 属性
参考[阮一峰博客](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
1. `display:grid`指定容器使用网格布局
2. `grid-template-columns`指定某一列的列宽，`grid-template-rows`指定某一行的行高
3. 指定列款和行高时，可以使用`repeat()`去简化重复的值，`repeat(3,33.33%)`3表示需要重复的个数，33.33%表示每一列或行所占的比列
4. `repeat(auto-fill,100px)`可以让网格自动去适配排列，一行放得下，就放一行，放不下就自动下移一行
5. `fr`表示单位 `grid-template-columns: 1fr 1fr;`表示一样长
6. `grid-template-columns: 100px auto 100px;`,`auto`让浏览器自动适配剩下的宽度
7. `grid-row-gap`表示行与行的间隔,`grid-column-gap`表示列与列的间隔
8. `grid-template-areas`可以自己放置网格的位置，暂时不需要，需要的时候学习一下
