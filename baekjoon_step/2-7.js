const fs =require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let score = 0;
if(numbers[0] == numbers[1] && numbers[1] == numbers[2]){
    score = 10000 + Number(numbers[0])*1000
}else if(numbers[0] === numbers[1]){
    score = 1000 + Number(numbers[0])*100;
}else if(numbers[1] === numbers[2]){
    score = 1000 + Number(numbers[1])*100;
}else if(numbers[0] === numbers[2]){
    score = 1000 + Number(numbers[0])*100;
}else{
    score = Math.max(...numbers)*100;
}
console.log(score);