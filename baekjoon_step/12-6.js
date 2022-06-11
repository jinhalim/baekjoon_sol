const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N,M] = input[0].split(' ');
const A = input[1].split(' ');
const B = input[2].split(' ');
const Bset = new Set(B);
const Aset = new Set(A);
const A_B = A.reduce((acc,curr)=>{
    if(!Bset.has(curr)){
        acc.push(curr);
    }
    return acc;
},[]);
const B_A = B.reduce((acc,curr)=>{
    if(!Aset.has(curr)){
        acc.push(curr);
    }
    return acc;
},[]);
const result =  A_B.length + B_A.length;
console.log(result)