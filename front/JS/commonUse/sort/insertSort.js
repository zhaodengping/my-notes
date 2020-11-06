//插入排序
const arr=[1,5,3,7,6,2,4];

function sort(){
    let arr2=[...arr];
    let temp

    for(let i=0;i<arr2.length;i++){
        let j=i;
        while(j>0&&(arr2[j-1]>arr2[j])){
            temp=arr2[j-1]
            arr2[j-1]=arr2[j]
            arr2[j]=temp
            j--
        }
    }
    return arr2

}

const result=sort();
console.log(result)