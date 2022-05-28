const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '4\n1 3 5 7'.toString().trim().split('\n');
const count = input.shift();
const isPrime = (num) => {
    if (num === 1) {
        return false;
    }else if(num === 2){
        return true;
    }else{
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {return false;}
        }
        return true;
    }
}

const numList = (input[0].split(' ')).reduce((acc,curr)=>{
    // console.log(isPrime(Number(curr)))
    if(isPrime(Number(curr))) {acc += 1;}
    return acc;
},0);

console.log(numList)



