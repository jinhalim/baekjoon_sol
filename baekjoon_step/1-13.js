const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split('\n')
const a = parseInt(numbers[0]);
const b = numbers[1].split('').reverse();
let result = 0;
b.forEach((ele,i) => {
    console.log(a*parseInt(ele))
    result += a*parseInt(ele) *(10**i);
});
console.log(result);