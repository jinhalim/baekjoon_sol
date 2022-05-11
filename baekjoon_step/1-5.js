const fs = require('fs');
const numbers = fs.readFileSync("/dev/stdin", 'utf-8').toString();
console.log(number(numbers.charAt(0))+number(numbers.charAt(2)))