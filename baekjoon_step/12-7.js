const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = 'ababc'
const string = [];
for (let i = 1; i <= input.length; i++) {
    for (let j = 0; j+i <= input.length; j++) {
        string.push(input.slice(j,j+i))
    }
}
const result = new Set(string);
console.log(result.size)
