const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5 11\nbaekjoononlinejudge\nstartlink\ncodeplus\nsundaycoding\ncodingsh\nbaekjoon\ncodeplus\ncodeminus\nstartlink\nstarlink\nsundaycoding\ncodingsh\ncodinghs\nsondaycoding\nstartrink\nicerink'.toString().trim().split('\n');
const [N,M] = (input.shift()).split(' ');
const list = [];
for (let i = 0; i < Number(N); i++) {
    list.push(input.shift());
}
const set = new Set(list)
const result = input.reduce((acc,curr)=>{

    if(set.has(curr)) acc++;
    return acc;
},0)
console.log(result)