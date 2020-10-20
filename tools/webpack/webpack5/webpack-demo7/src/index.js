import _ from 'lodash' 
import Print from './print'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');


    btn.innerHTML = '点击!';
    btn.onclick = Print;
    element.appendChild(btn);
    
    return element;
  }
  
document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js',function(){
    console.log('update the module1');
    Print()
  })
}