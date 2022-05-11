const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString();
console.log(numbers.charAt(0)/numbers.charAt(2))