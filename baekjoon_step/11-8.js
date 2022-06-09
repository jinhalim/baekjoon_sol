const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '13\nbut\ni\nwont\nhesitate\nno\nmore\nno\nmore\nit\ncannot\nwait\nim\nyours'.toString().trim().split('\n');
const count = input.shift();
const set = new Set(input);
const result = [...set].sort((a,b)=>{
    if(a.length === b.length){
        if(a < b) return -1;
        if(a > b) return 1;
        if(a === b) return 0;
    }else{
        return a.length - b.length;
    }
})
console.log(result.join('\n'));