const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const count = input.shift();
const result = input.sort((a,b)=>{return a-b});
console.log(result.join('\n'));

//메모리 초과..ㅜㅠ