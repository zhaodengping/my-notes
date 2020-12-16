
interface LabelledValue{
    label:string
}

function printLabel(labeledObject:LabelledValue){
    console.log(labeledObject.label)
}

let myObj={
    size:10,
    label:'Size 10 Object'
}

printLabel(myObj)