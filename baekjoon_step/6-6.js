const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const count = input.reduce((acc,curr)=>{
    if(curr !== ''){
        acc += 1;
    }
    return acc; 
},0)
console.log(count)