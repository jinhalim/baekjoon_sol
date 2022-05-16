const fs =require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
// let input = '26'.toString();
input = (input > 9 ? input : `0${input}`);
const getSum = (number) => {
    return (number.split('')).reduce((acc,curr)=>{
        acc += Number(curr)
        return acc;
    },0);
}
let count = 0;
let num = input.split('');
while(1){
    ++count;
    let sum = '';
    sum = getSum(num.join(''));
    num[0] = num[1];
    num[1] = (String(sum).split('')).pop() 
    if(input == num.join('')) break;
}

console.log(count)