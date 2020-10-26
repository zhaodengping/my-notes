let user={
    u1:0,
    u2:false,
    u3:null,
    u4:undefined,
    u5:''
}

const u1=user.u1 ?? 'Alice';
const u2=user.u2 ?? 'Alice2';
const u3=user.u3 ?? 'Alice3';
const u4=user.u4 ?? 'Alice4';
const u5=user.u5 ?? 'Alice5'; 

console.log(u1)
console.log(u2)
console.log(u3)
console.log(u4)
console.log(u5) 

console.log('******* 上面是？？部分 *********')

let user2={
    u1:0,
    u2:false,
    u3:null,
    u4:undefined,
    u5:''
}
const u11=user2.u1 || 'Alice';
const u12=user2.u2 || 'Alice2';
const u13=user2.u3 || 'Alice3';
const u14=user2.u4 || 'Alice4';
const u15=user2.u5 || 'Alice5'; 

console.log(u11)
console.log(u12)
console.log(u13)
console.log(u14)
console.log(u15) 

console.log('******* 上面是||部分 *********')

const user3={
    name:"Alice"
}

const name=user3.name;
const age2=user3.a.age;
const age=user3?.a?.age;

console.log(name)
console.log(age)
console.log(age2)