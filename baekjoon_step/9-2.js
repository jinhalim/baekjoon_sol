const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const freq = (i) => {
    if(i === 0){
        return 0;
    }else if(i < 3){
        return 1;
    }else{
        return freq(i-1) + freq(i-2);
    }
}
console.log(freq(input));