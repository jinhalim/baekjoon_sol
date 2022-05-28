const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '3\n8\n10\n16'.toString().trim().split('\n');
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
for (let i = 0; i < input.length; i++) {
    const element = Number(input[i]);
    let fristNum = 0;
    let secondNum = 0;
    // console.log(Math.ceil(element/2))
    for (let j = Math.ceil(element/2); j < element ; j++) {
        if(isPrime(j)){
            if(isPrime(element-j)){
                
                fristNum = element - j;
                secondNum = j;
                break;
            }
        }
    }
    if(fristNum + secondNum !== 0){
    numbers.push(`${fristNum} ${secondNum}`)
    }
}
console.log(numbers.join('\n'))