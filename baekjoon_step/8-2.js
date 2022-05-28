const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '60\n100'.toString().trim().split('\n');
const isPrime = (num) =>{
    if(num === 1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if(num%i === 0) {return false;}
        }
        return true;
    }
}
let sum  = 0;
let minNum = Number.MAX_SAFE_INTEGER;
for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    if(isPrime(i)) {
        sum += i;
        if(minNum > i){
            minNum = i;
        }
    }
}
if(sum === 0){
    sum = -1;
    console.log(`${sum}`)
}else{
    console.log(`${sum}\n${minNum}`)
}
