const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [A,B,V] = input;
const calc = Math.ceil((Number(V)-Number(B))/(Number(A)-Number(B)));
console.log(calc)