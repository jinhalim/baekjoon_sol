const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// const input = 4
// const count = [];
let maxKey = 0;
let maxCount = 0;
for (let i = 1; i <= input; i++) {
    const key = Math.round(Math.sqrt((i) * 2));
    // count.push(key);
    if(maxKey < key){
        maxKey = key
        maxCount = 0;
    }else if(maxKey === key){
        maxCount++;
    }
}
let up;
let down;
if(maxKey%2 === 0){
    up = Math.abs(1 + maxCount);
    down = Math.abs(maxKey - maxCount);
}else{
    up = Math.abs(maxKey - maxCount) ;
    down = Math.abs(1 + maxCount) ;
}
// console.log(count,maxKey,maxCount)
console.log(`${up}/${down}`)
