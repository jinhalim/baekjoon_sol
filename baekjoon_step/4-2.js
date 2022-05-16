const fs =require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let index = 0;
let max = 0;
for (let i = 0; i < input.length; i++) {
    const element = Number(input[i]);
    
    if(max < element){
        max = element
        index = i+1;
    }
}
console.log(`${max} ${index}`)