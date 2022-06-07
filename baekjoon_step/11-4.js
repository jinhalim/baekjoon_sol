const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5\n1\n3\n8\n-2\n2'.toString().trim().split('\n');
const count = input.shift();
const result =  new Array(4);
result[0] = Math.round(input.reduce((acc,curr)=> {
    acc += Number(curr);
    return acc;
},0)/count);
const sortList = input.sort((a,b)=>{return b-a})
result[1] = sortList[Math.floor(count/2)];
let max = 0;
const mode = sortList.reduce((acc,curr)=>{
    if(acc.has(curr)){
        acc.set(curr,acc.get(curr)+1);
    }else{
        acc.set(curr,1)
    }
    if(max < acc.get(curr)){
        max = acc.get(curr);
    }
    return acc;
},new Map());
const modeList = new Array();
for (const [key,val] of mode) {
    if(val === max){
        modeList.push(key) 
    }
}
modeList.sort((a,b)=>{return a-b});
if(modeList.length > 1){
    result[2] = modeList[1] 
}else{
    result[2] = modeList[0]
}
result[3] = Number(sortList[0]) - Number(sortList[count-1]) ;
console.log(result.join('\n'));
