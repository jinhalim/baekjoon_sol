const fs =require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split(' ');
let hour = Number(numbers[0]);
let minute = Number(numbers[1]);\
if(minute>= 45){
    minute -= 45;
}else{
    hour = hour === 1? 12: hour-1;
    minute += 15;
}
console.log(hour+' '+minute)
