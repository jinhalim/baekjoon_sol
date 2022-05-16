
const fs =require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
// const numbers = ['5','1 1','2 3','3 4','9 8','5 2'];
let result = '';
for (let i = 0; i < Number(numbers[0]); i++) {
    const num = numbers[i+1].split(' ')
    result += `Case #${i+1}: ${Number(num[0])+Number(num[1])}\n`;
    
}
console.log(result)