const fs =require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
const caseCount = Number(numbers[0]);
for (let i = 0; i < caseCount; i++) {
    const num = numbers[i+1].split(' ');
    const sum = Number(num[0]) + Number(num[1]);
    console.log(`${sum}`); 
}