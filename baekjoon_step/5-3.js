const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = '110'.toString().trim();
let count = 0;
for (let i = 1; i <= Number(input); i++) {
    const han = parseInt(i/100);
    const ten = parseInt((i-han*100)/10);
    const one = i % 10;
    // console.log(`${han}${ten}${one}`)
    if(i < 100){
        count++;
    }else{
        if(han-ten === ten-one){
            count++;
        }
    }
}


console.log(count)
