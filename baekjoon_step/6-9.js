const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = 'ddz=z='.toString().trim();
const croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];
let origin = input;
let string = 0;
for (let point = 0; point < input.length+1; point++) {
    for (let i = point; i < input.length+1; i++) {
        const char = input.slice(point,i);
        // console.log(char,i)
        if(croatia.includes(char)){
            
            origin = origin.replace(char,'')
            point = i
            // string.push(char)
            string++;
        }
        
    }
}
console.log(origin.length + string)