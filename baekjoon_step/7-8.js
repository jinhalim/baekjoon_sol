const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = '9223372036854775807 9223372036854775808'.toString().trim().split(' ');
console.log((BigInt(input[0])+BigInt(input[1])).toString())