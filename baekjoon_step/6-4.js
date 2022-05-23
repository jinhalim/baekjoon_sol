const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '2\n3 ABC\n5 /HTP'.toString().trim().split('\n');
const string = new Array();
for (let i = 1; i < input.length; i++) {
    const element = input[i].split(' ');
    const result = element[1].split('').reduce((acc,curr)=>{
        acc += curr.repeat(element[0])
        return acc ;
    },'');
    string.push(result);
}

console.log(string.join('\n'));