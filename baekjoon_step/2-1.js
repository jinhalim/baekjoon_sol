const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().split(' ');
if(parseInt(numbers[0]) === parseInt(numbers[1])){
    console.log('==')
}else{
    console.log(parseInt(numbers[0])<parseInt(numbers[1])?'<':'>')
}

