const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = '3 4\nohhenrie\ncharlie\nbaesangwook\nobama\nbaesangwook\nohhenrie\nclinton'.toString().trim().split('\n');
const [N,M] = (input[0]).split(' ');
const NPerson = input.slice(1,Number(N)+1);
const MPerson = input.slice(Number(N)+1,input.length);
const NSet = new Set(NPerson); 
let result = MPerson.reduce((acc,curr)=>{
    if(NSet.has(curr)){
        acc.push(curr)
    }
    return acc;
},[])

result = result.sort();
console.log(result.length+'\n'+result.join('\n'))