const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91'.toString().trim().split('\n');
for (let i = 1; i < input.length; i++) {
    const scores = input[i].split(' ');
    const num = Number(scores.shift());
    const avg = scores.reduce((acc,curr) => {
        acc += Number(curr)
        return acc;
    },0)/num ;
    const students = scores.reduce((acc,curr)=> {
        if(Number(curr) > avg){
            acc += 1;
        }
        return acc;
    },0)/num * 100;
    console.log(students.toFixed(3)+'%');
}