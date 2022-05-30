const fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString().trim());
let movieNum = 665;
while(input > 0){
    movieNum++;
    if(movieNum.toString().includes('666')){
        input--;
    }
    
}
console.log(movieNum)