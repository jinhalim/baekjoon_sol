const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// const input = 2;
let sum = 1;
for (let i = 1; i <= input; i++) {
    sum *= i;
}
console.log(sum)