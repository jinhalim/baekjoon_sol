const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
// const input = 'UNUCIC'.toString().trim().split('');
const time = input.reduce((acc,curr)=>{
    const num = parseInt((curr.charCodeAt()-65)/3) + 3
    acc +=   num ;
    return acc;
},0)

console.log(time)