const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const result = input.sort((a,b) => {return a-b;})
console.log(result.join('\n'))