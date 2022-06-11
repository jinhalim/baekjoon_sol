const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = ['161','181','762','375']
const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);
let len = 0;
// if(x > w && y > h){
//     len = Math.sqrt(Math.exp(x-w)+ Math.exp(y-h));
// }else 
if(x > w && y <= h){
    len = Math.abs(x-w)
}else if(x <= w && y > h){
    len = Math.abs(y-h);
}else{
    let list = [];
    // list.push(Math.sqrt(Math.exp(x-w)+ Math.exp(y-h)))
    list.push(Math.abs(y-h))
    list.push(Math.abs(x-w))
    list.push(Math.abs(y))
    list.push(Math.abs(x))
    list.sort((a,b)=>a-b);
    // console.log(list)
    len = list[0]  
}

console.log(len)