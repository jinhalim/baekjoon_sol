const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString();
console.log(parseInt(numbers.charAt(0))-parseInt(numbers.charAt(2)))