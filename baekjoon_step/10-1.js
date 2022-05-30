const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5 21\n5 6 7 8 9'.split('\n');
const [N,M] = input[0].split(' ');
const cards = input[1].split(' ');
let sum = 0;
let maxSum = 0;
for (let i = 0; i < Number(N); i++) {
    for (let j = i+1; j < Number(N); j++) {
        for (let k = j+1; k < Number(N); k++) {
            sum  = Number(cards[i]) + Number(cards[j]) + Number(cards[k]);
            // console.log(sum)
            if(maxSum < sum && sum <= Number(M)){
                maxSum = sum;
            }
        }
    }
}
console.log(maxSum);