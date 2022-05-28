const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = '3 16'.toString().trim().split(' ');
const numbers = [];
const isPrime = (num) =>{
    if(num === 1){
        return false;
    }else if(num ===2){
        return true;
    }else{
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if(num%i === 0){
                return false;
            }
        }
        return true;
    }
}
for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    if(isPrime(i)){
        numbers.push(i)
    }
}
console.log(numbers.join('\n'));
