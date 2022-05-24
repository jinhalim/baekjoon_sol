const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = '1000 70 170'.toString().trim().split(' ');
const [A,B,C] = input;
let count = Math.floor(Number(A)/(Number(C)-Number(B))) + 1;
// console.log(count)
if(Number(B) >= Number(C)){
    count = -1;
}
console.log(count)