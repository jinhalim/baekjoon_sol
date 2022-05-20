const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const alphabet = new Array(26).fill(-1);
input.forEach((ele,i)=>{
    const char = ele.charCodeAt() - 97;
    if(alphabet[char] < 0 ){
        alphabet[char] = i;
    }
});
console.log(alphabet.join(' '));