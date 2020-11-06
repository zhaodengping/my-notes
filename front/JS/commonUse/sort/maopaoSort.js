//冒泡排序
const arr=[1,3,5,6,7,2,4];

function sort(){
    const arr2=[...arr];
    let temp

    for(let i=0;i<arr2.length-1;i++){
        for(let j=0;j<arr2.length-1-i;j++){
            if(arr2[j]>arr2[j+1]){
                temp=arr2[j];
                arr2[j]=arr2[j+1];
                arr2[j+1]=temp
            }
        }
    }
    return arr2
}
const result= sort()
console.log(result)//[1,2,3,4,5,6,7]