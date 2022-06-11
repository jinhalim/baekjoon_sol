const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const r = Number(input)
console.log(r*r*Math.PI)
console.log(r * r * 2)