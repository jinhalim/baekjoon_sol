const fs =require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
// const numbers = '1 1\n2 3\n3 4\n9 8\n5 2\n0 0'.toString().split('\n');
let result ='';
for (let i = 0; i < numbers.length-1; i++) {
    const num = numbers[i].split(' ');
    if (Number(num[0])+Number(num[1]) !== 0) {
        if(i == numbers.length-2){
            result += `${Number(num[0])+Number(num[1])}`
        }else{
            result += `${Number(num[0])+Number(num[1])}\n` 
        }
    }
}
console.log(result);