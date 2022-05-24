const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '3\nhappy\nnew\nyear'.toString().trim().split('\n');
// const input = '4\naba\nabab\nabcabc\na'.toString().trim().split('\n');
let count = Number(input[0]);
for (let i = 1; i < input.length; i++) {
    const ele = input[i].split('');
    const visited = [];
    for (let j = 0; j < ele.length; j++) {
        if(visited.includes(ele[j])){
            if(ele[j-1] !== ele[j]){
                count--;
                break;
            }
        }else{
            visited.push(ele[j]);
        }
    }
}
console.log(count);