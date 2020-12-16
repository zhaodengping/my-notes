//boolean
let isDone:boolean=true

//number
const decLiteral:number=6;
const hexLiteral:number=0xf00d;

//string
const companyName:string='Foreo';
const totalName:string=`My company name is ${companyName}`
const companyOtherName:string='My company name is'+companyName

//array
const list:number[]=[1,2,3]
const list2:Array<number>=[1,2,3]

//Tuple
let x:[string,number]
x=['hello',1]
x.push('world')
x.pop()
x.splice(1,1)
x[0]='hello edit'
const [a,b]=x

//enum
enum Color{Red,Green,Blue}
const c:Color=Color.Green
enum Color2{Red=1,Green,Blue}
enum Color3{Red=1,Green=4,Blue=6}
const colorName:string=Color[1]

//void
function getName():void{
    return 
}

const someVal:string='string';
// const strLen:number=(<string>someVal).length

const strLen:number=(someVal as string).length

type C={
    a:string,
    b?:number
}

function f({a,b}:C){}