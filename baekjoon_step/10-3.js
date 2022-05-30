const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '5\n55 185\n58 183\n88 186\n60 175\n46 155'.toString().trim().split('\n');
const index = input.shift();
const rank = [];
for (let i = 0; i < index; i++) {
    const ele = input[i].split(' ');
    let count = 1;
    for (let j = 0; j < index; j++) {
        if(j !== i){
            
            const ele2 = input[j].split(' ');
            if (Number(ele[0]) < Number(ele2[0]) && Number(ele[1]) < Number(ele2[1])) {
                count ++;
            }else if(Number(ele[0]) <= Number(ele2[0]) && Number(ele[1]) >= Number(ele2[1])){
                
            }else if(Number(ele[0]) > Number(ele2[0]) && Number(ele[1]) < Number(ele2[1])){

            }else{
                
            }
            
        }
    }
    rank.push(count)
    
}
console.log(rank.join(' '))