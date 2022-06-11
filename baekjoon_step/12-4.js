const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const Nnumbers = input[1].split(' ');
const M = Number(input[2]);
const Mnumbers = input[3].split(' ');

const map = Nnumbers.reduce((acc,curr)=>{
    if(acc.has(curr)) acc.set(curr,acc.get(curr)+1);
    else acc.set(curr,1)
    return acc;
},new Map());
const result = Mnumbers.reduce((acc,curr)=>{
    if(map.has(curr)){
        acc.push(map.get(curr))
    }else{
        acc.push(0)
    }
    return acc;
},[])
console.log(result.join(' '))