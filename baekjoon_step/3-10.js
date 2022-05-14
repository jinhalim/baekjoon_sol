const fs =require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString();
// const numbers = '5'.toString();
let result = '';
for (let i = 0; i < Number(numbers); i++) {
    for (let j = 0; j < Number(numbers) - i - 1; j++) {
        result += ' ';
    }
    for (let j = 0; j <i + 1; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result)