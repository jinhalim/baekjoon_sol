const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
// const input = '26'.toString();
let count = 0;
let cycleList = [input];
while(1){
    // console.log(cycleList);
    ++count;
    const afterValue = cycleList[cycleList.length-1].split('');
    let sum = 0 ;
    if(count > 1){
        const beforeValue = cycleList[cycleList.length-2].split('')
        // console.log(beforeValue[beforeValue.length-1]+afterValue[afterValue.length-1])
        if(Number(input) == Number(beforeValue[beforeValue.length-1]+afterValue[afterValue.length-1])){
            console.log(count)
            break;
        }
        sum = Number(afterValue[afterValue.length-1]) + Number(beforeValue[beforeValue.length-1]);
        cycleList.shift();
    }else{
        sum = afterValue.reduce((acc, curr)=>{
            return acc + Number(curr);
        },0);
    }
    cycleList.push(String(sum));
}



// console.log(cycleList);