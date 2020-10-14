import _ from 'lodash'
//css相应的文件引入
// import './assets/css/home.scss'
import './assets/css/index.css'
//image相应的文件引入
import bg from './assets/imgs/bg.jpg'

function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
    const myIcon=new Image();
    myIcon.src=bg;
    element.appendChild(myIcon)
    return element;
  }
  
document.body.appendChild(component());