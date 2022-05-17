const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5\nOOXXOXXOOO\nOOXXOOXXOO\nOXOXOXOXOXOXOX\nOOOOOOOOOO\nOOOOXOOOOXOOOOX'.toString().trim().split('\n');
for (let i = 1; i < input.length; i++) {
    const quiz = input[i].split('');
    let circle = 0;
    const score = quiz.reduce((acc,curr) => {
        if(curr === 'O' ){
            ++circle;
            acc += circle;
        }else{
            circle = 0;
        }
        return acc;
    },0);
    console.log(score)
}