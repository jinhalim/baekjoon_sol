const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '6\n1000 999 1000 999 1000 999'.toString().trim().split('\n');

const n = input.shift();
const numbers = input[0].split(' ');
const set = new Set(numbers);
const list = [...set].sort((a,b)=> a-b);
const map = list.reduce((acc,curr,i) => {
    acc[curr] = i
    return acc;
},new Map())
const result = numbers.reduce((acc,curr)=>{
    acc.push(map[curr]);
    return acc;
},[])
console.log(result.join(' '))
