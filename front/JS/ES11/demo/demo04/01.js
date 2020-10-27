
const str='From 2019.01.29 to 2019.01.30';

const allMatch=str.matchAll(/(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/g);

for(let i of allMatch){
    console.log(i)
}

const match=str.match(/(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/g)

for(let i of match){
    console.log(i)
}