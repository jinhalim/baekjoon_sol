const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const count = input.shift();
input.sort((a,b)=>{
    const [x1,y1] = a.split(' ');
    const [x2,y2] = b.split(' '); 
    if(y1 === y2){
        return x1 - x2;
    }else{
        return y1 - y2;
    }
})
console.log(input.join('\n'))