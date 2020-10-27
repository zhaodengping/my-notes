
const name='Alice global'

function getName(){
    console.log(globalThis)
    console.log(this)
}

getName()