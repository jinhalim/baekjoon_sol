const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
// const input = 'UNUCIC'.toString().trim().split('');
const telNumberPad = {
    2 : "ABC",
    3 : "DEF",
    4 : "GHI",
    5 : "JKL",
    6 : "MNO",
    7 : "PQRS",
    8 : "TUV",
    9 : "WXYZ",
}
const catchCharNumber = (char) => {
    let num  = 0;
    for (const ele in telNumberPad) {
        if (telNumberPad[ele].indexOf(char) > -1) {
            num = Number(ele) + 1 ;
            // console.log(ele)
            break;
        }
    }
    return num;
}
const time = input.reduce((acc,curr)=>{
    acc += catchCharNumber(curr);
    return acc;
},0)

console.log(time)