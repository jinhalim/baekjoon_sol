const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// let input = Number('72'.toString().trim());
const numbers = [];
if(input !== 1){
    let count = 2;
    while(input !== 1){
        if(input%count === 0) {
            input = input/count;
            numbers.push(count);
            count = 2;
        }else{
            count ++;
        }
    }

    console.log(numbers.join('\n'))
}