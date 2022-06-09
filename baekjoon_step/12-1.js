const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5\n6 3 2 10 -10\n8\n10 9 -5 2 3 4 5 -10'.toString().trim().split('\n');
const N = input.shift();
const NCard = new Set((input.shift()).split(' '));
const M = input.shift();
const MCard = (input.shift()).split(' ');
const result = MCard.reduce((acc,curr)=>{
    if (NCard.has(curr)) {
        acc.push(1);
    } else {
        acc.push(0);
    }
    return acc;
},[])
console.log(result.join(' '))