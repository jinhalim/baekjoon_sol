const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// let input = 6
let count = 0;
while(1){
    if(input%5 === 0){
        console.log(input/5+count)
        break
    }else if(input < 0){
        console.log(-1)
        break
    }
    input -= 3;
    count++;
}