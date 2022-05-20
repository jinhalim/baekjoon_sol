const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input[1].split('');
const sum = numbers.reduce((acc,curr)=>{
    acc += Number(curr);
    return acc;
},0)
console.log(sum)
