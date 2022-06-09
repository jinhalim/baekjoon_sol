const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5\n3 4\n1 1\n1 -1\n2 2\n3 3'.toString().trim().split('\n');
const count = input.shift();
input.sort((a,b)=>{
    const [x1,y1] = a.split(' ');
    const [x2,y2] = b.split(' '); 
    if(x1 === x2){
        return y1 - y2;
    }else{
        return x1 - x2;
    }
})
console.log(input.join('\n'))