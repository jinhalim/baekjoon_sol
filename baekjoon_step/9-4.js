const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// const rec = ['***','* *','***'];
// const input = 9;
const block = [];
const star = (i,j,num) => {
    if(i%3 === 1 && j%3 === 1){
        block.push(' ');
    }else{
        if(num === 1){
            block.push('*');
        }else{
            star(parseInt(i/3),parseInt(j/3),parseInt(num/3))
        }
    }
}
const drawRecStar = (num) => {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            star(i,j,num);
        }
        block.push('\n');
    }
}

drawRecStar(input)
console.log(block.join(''));