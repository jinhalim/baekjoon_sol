const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input ='5 5\n5 7\n7 5'.toString().trim().split('\n');
const xlist = new Map();
const ylist = new Map();
for (let i = 0; i < input.length; i++) {
    const [a,b] = input[i].split(' ');
    if(xlist.has(a)){
        xlist.set(a,xlist.get(a)+1)
    }else{
        xlist.set(a,1);
    }
    if(ylist.has(b)){
        ylist.set(b,ylist.get(b)+1)
    }else{
        ylist.set(b,1);
    }
}
const resultX = [...xlist.values()].indexOf(1);
const resultY = [...ylist.values()].indexOf(1);


console.log(`${[...xlist.keys()][resultX]} ${[...ylist.keys()][resultY]}`)