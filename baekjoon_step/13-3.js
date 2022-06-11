const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
for (let i = 0; i < input.length-1; i++) {
    const [a,b,c] = input[i].split(' ').sort((a,b)=>a-b);
    if(Math.pow(Number(a),2)+ Math.pow(Number(b),2) === Math.pow(Number(c),2)){
        result.push('right')
    }else{
        result.push('wrong')
    }
}
console.log(result.join('\n'))