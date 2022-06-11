const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 0; i < input.length-1; i++) {
    const element = input[i].split(' ');
    const num1 = Number(element[0]);
    const num2 = Number(element[1]);
    if(num2%num1 === 0){
        console.log('factor')
    }else if(num1%num2 === 0){
        console.log('multiple')
    }else{
        console.log('neither')
    }
}