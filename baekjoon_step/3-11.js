const fs =require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = '10 5\n1 10 4 9 2 3 8 5 7 6'.toString().split('\n');
const number = numbers[0].split(' ');
const arr = numbers[1].split(' ');

let result = '';
for (let i = 0; i < Number(number[0]); i++) {
    
    if(Number(arr[i]) < Number(number[1])) 
    {
        result += `${Number(arr[i])} `
    }
    
}


console.log(result)