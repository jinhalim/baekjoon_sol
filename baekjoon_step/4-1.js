const fs =require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
const input = '5\n20 10 35 30 7'.toString();

let input2 = input.split('\n');
const array = input2[1].split(' ');
let result = [Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]
for (const ele of array) {
    const num = Number(ele);
    result[0] = result[0] > num? num:result[0]
    result[1] = result[1] < num? num:result[1]
}
console.log(result.join(' '))