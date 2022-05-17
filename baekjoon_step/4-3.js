const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = '150\n266\n427'.toString().split('\n');
const result = Number(input[0]) * Number(input[1]) * Number(input[2]);
const countList = String(result).split('').reduce((acc,curr)=>{
    acc[curr] += 1;
    return acc;
},new Array(10).fill(0));
console.log(countList.join('\n'));
