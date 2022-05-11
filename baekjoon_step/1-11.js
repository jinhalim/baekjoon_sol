const fs = require('fs');
const year = fs.readFileSync('/dev/stdin').toString();
console.log(year-543);