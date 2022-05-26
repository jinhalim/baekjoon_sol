const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '2\n1\n3\n2\n3'.toString().trim().split('\n');
const testCase = input.shift();
let maxFloor = 0;
let maxRoom = 0;
const rooms = [];
for (let i = 0; i < Number(testCase); i++) {
    const k = Number(input.shift());
    const n = Number(input.shift());
    if(maxFloor < k+1) maxFloor = k+1;
    if(maxRoom < n) maxRoom = n;
    rooms.push([k,n]);
}
const apartment = Array.from(Array(maxFloor),()=>new Array(maxRoom).fill(0));
for (let i = 0; i < maxFloor; i++) {
    for (let j = 0; j < maxRoom ; j++) {
        if(i === 0){
            apartment[i][j] = j+1;
        }
        else{
            if(j === 0){
                apartment[i][j] = 1;
            }else{
                apartment[i][j] = apartment[i-1][j] + apartment[i][j-1]
            }
        }
    }
}
rooms.forEach((x)=>{
    const [k,n] = x;
    console.log(apartment[k][n-1]);
})
// console.log(apartment)
