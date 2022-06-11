const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '7\n4 50\n2 160\n3 30\n1 60\n3 20\n1 100'.toString().trim().split('\n');
// const xlist = [];
// const ylist = [];
const count = input.shift();
let xMax = 0;
let yMax = 0;
// let beforeIndex = 0;
let blockSize = 0
for (let i = 0; i+1 < input.length; i++) {
    const ele1 = input[i].split(' ');
    const ele2 = input[i+1].split(' ');

}
// console.log(blockSize,xMax,yMax)
const all = xMax * yMax - blockSize;
console.log(all*count)

//나중에 다시 시도..
