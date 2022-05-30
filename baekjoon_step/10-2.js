const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// const input = 216;
const numbers = [];
const len = input.toString().length;
const sum = (num) => {
    const elements = num.toString().split('');
    return num + elements.reduce((acc,curr)=>{
        acc += Number(curr);
        return acc;
    },0);
}
for (let i = 1; i <= input; i++) {
    if(sum(i) === input){
        numbers.push(i);
        break;
    }
}
if(numbers.length === 0){
    console.log(0);
}else{
    console.log(Math.min(...numbers))
}
