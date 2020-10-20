import _ from 'lodash'
import {cube} from './math'

function component() {
    const element = document.createElement('div');

    element.innerHTML=[
        'Hello webpack',
        '5 cubed is equal to'+cube(5)
    ].join('\n\n')

    return element;
}
  
document.body.appendChild(component());