const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
// const input = 'Mississipi'.toString().trim().split('');
// const input = 'zZa'.toString().trim().split('');
const changeLowChar = (char) =>{
    return char.toLowerCase();
}
const charMap =  input.reduce((acc,curr)=>{
    curr = changeLowChar(curr);
    if(acc.has(curr)){
        acc.set(curr,acc.get(curr)+1);
    }else {
        acc.set(curr,1);
    }
    return acc;
},new Map());
const max = Math.max(...charMap.values());
const maxChars = [...charMap.entries()].filter(([key,value]) => {
    if(value === max){
        return key
    }
});
if(maxChars.length > 1) {
    console.log('?');
}else{
    console.log(maxChars[0][0].toUpperCase())
}

