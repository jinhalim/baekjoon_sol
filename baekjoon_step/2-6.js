const fs =require('fs');
// const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = '0 58\n183'.toString().split('\n');
const needTime = Number(numbers[1]);
let [hour, minute] = numbers[0].split(' ');
let time = Number(hour*60) + Number(minute) + needTime;
hour = (parseInt(time/60)>=24?parseInt(time/60)-24 : parseInt(time/60));
minute = time%60;
console.log(hour+' '+minute);