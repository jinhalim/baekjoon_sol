const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// const input = Number('57');
let count = Math.round(Math.sqrt((input-1)/3));
// console.log(input,count,Math.sqrt((input-1)/3))
// if (input > 1) {
//     count++;
// }

console.log(count+1)
