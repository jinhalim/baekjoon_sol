const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = '5\n5\n2\n3\n4\n1'.split('\n');
input.shift();
const result = input.sort((a,b) => {return a-b;})
console.log(result.join('\n'));
