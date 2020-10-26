
Promise.all([
    new Promise((resolve,reject)=>reject('a1')),
    new Promise((resolve,reject)=>resolve('a2'))
]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})