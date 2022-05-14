const fs =require('fs');
const number = fs.readFileSync('/dev/stdin').toString();
let sum = 0;
for (let i = 1; i <= Number(number); i++) {
    sum += i;
}
console.log(`${sum}`)