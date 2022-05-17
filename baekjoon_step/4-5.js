const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '3\n40 80 60'.toString().trim().split('\n');

const values = input[1].split(' ');
const max = values.reduce((acc,curr) => {
    acc = acc < Number(curr)? Number(curr): acc; 
    return acc;
},Number.MIN_SAFE_INTEGER);
const avg = values.reduce((acc,curr) => {
    acc += Number(curr)/max * 100;
    return acc;
},0)/Number(input[0]);
console.log(avg);