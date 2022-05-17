const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '1\n2\n3\n4\n5\n6\n7\n8\n9\n10'.toString().split('\n');
// const input = '7\n14\n27\n38'.toString().split('\n');
// const input = '42\n84\n252\n420\n840\n126\n42\n84\n420\n126'.toString().split('\n');
// const input = '39\n40\n41\n42\n43\n44\n82\n83\n84\n85'.toString().split('\n');
const output = input.reduce((acc,curr) => {
    if(!acc.includes(Number(curr) % 42)){
        acc.push(Number(curr) % 42);
    }
    return acc;
},[]);
console.log(output.length)