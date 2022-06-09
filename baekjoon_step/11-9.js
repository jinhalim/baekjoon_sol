const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '3\n21 Aunkyu\n21 Dohyun\n20 Sunyoung'.toString().trim().split('\n');
const count = input.shift();
input.sort((a,b)=>{
    const [age1, name1] = a.split(' ');
    const [age2, name2] = b.split(' ');
    if(age1 === age2) {
        return 0
    }else{
        return age1 - age2;
    }
});
console.log(input.join('\n'))