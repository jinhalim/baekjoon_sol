// const fs = require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const readline = require('readline'); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
let input = []; 
rl.on('line', function (line) {
     input.push(line) 
    }) 
.on('close', function () { 
    const x = Number(numbers[0]);
const y = Number(numbers[1]);
    if(x > 0 && y > 0 ){
        console.log(1);
    }else if(x < 0 && y > 0 ){
        console.log(2);
    }else if(x < 0 && y < 0 ){
        console.log(3);
    }else if(x > 0 && y < 0 ){
        console.log(4);
    }
    process.exit(); 
});
