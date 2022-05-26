const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = '2\n6 12 55\n5 2 3'.toString().trim().split('\n');
// const roomNumberList = [];
for (let i = 0; i < Number(input[0]); i++) {
    const ele = input[i+1].split(' ');
    const floor = Number(ele[0]);
    // const room = Number(ele[1]);
    const guest = Number(ele[2]);
    let roomFloor = guest%floor;
    let count = Math.ceil(guest/floor); 
    if(roomFloor === 0){
        roomFloor = floor
    }
    const roomNumber = String(roomFloor) + (count >= 10?`${count}`:`0${count}`);
    console.log(roomNumber,floor, guest)
    // roomNumberList.push(roomNumber);
}
// console.log(roomNumberList.join('\n'))