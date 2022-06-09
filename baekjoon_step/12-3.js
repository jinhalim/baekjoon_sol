const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = '26 5\nBulbasaur\nIvysaur\nVenusaur\nCharmander\nCharmeleon\nCharizard\nSquirtle\nWartortle\nBlastoise\nCaterpie\nMetapod\nButterfree\nWeedle\nKakuna\nBeedrill\nPidgey\nPidgeotto\nPidgeot\nRattata\nRaticate\nSpearow\nFearow\nEkans\nArbok\nPikachu\nRaichu\n25\nRaichu\n3\nPidgey\nKakuna'.toString().trim().split('\n');

const [N,M] = (input.shift()).split(' ');
const list = input.slice(0,Number(N));

input = input.slice(Number(N),input.length);

const map = list.reduce((acc,curr,i)=>{
    acc.set(curr,String(i+1));
    return acc;
},new Map())

const result = input.reduce((acc,curr)=>{
    if(!isNaN(Number(curr))){
        acc.push(list[Number(curr)-1])
    }else{
        acc.push(map.get(curr));
    }
    return acc;
},[])
console.log(result.join('\n'))