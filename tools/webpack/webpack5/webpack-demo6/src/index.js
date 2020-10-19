import _ from 'lodash' 
import Print from './print'

function component() {
    const element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick=Print.bind(null,'Hello world');
    
    return element;
  }
  
document.body.appendChild(component());