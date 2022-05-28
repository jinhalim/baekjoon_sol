const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '1\n10\n13\n100\n1000\n10000\n100000\n0'.toString().trim().split('\n');
const numbers = [];
const isPrime = (num) =>{
    if(num <= 1 ){
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
for (let i = 0; i < input.length-1; i++) {
    const ele = Number(input[i]);
    const doubleEle = ele*2;
    let count = 0;
    for (let j = ele + 1 ; j <= doubleEle; j++) {
        if(isPrime(j)) count += 1;
    }

    numbers.push(count);
}
console.log(numbers.join('\n'));