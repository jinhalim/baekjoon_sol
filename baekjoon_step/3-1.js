const fs = require('fs');
// const input = Number(fs.readFileSync('/dev/stdin').toString());
const input = Number('2'.toString());
let result = 0;
for (let i = 1; i < 10; i++) {
    result = input * i;
    console.log(`${input} * ${i} = ${result}`);
}