const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input ='8 8\nWBWBWBWB\nBWBWBBBW\nWBWBWBWB\nBWBBBWBW\nWBWBWBWB\nBWBWBWBW\nWBWBWBWB\nBWBWBWBW'.toString().trim().split('\n')
// const input ='10 13\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nBBBBBBBBWBWBW\nBBBBBBBBBWBWB\nWWWWWWWWWWBWB\nWWWWWWWWWWBWB'.toString().trim().split('\n')

const [N,M] = (input.shift()).split(' ');
let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let  black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']
const board = input.reduce((acc,curr)=>{
    acc.push(curr.split(''));
    return acc;
},[]);
const checkChessBoard = (x,y) => {
    let whiteCount = 0;
    let blackCount = 0;
    for (let i = x; i < x + 8 ; i++) {
        for (let j = y; j < y + 8; j++) {
            
            if(board[i][j] !== white[i-x][j-y]){
                whiteCount ++;
            }
            if(board[i][j] !== black[i-x][j-y]){
                blackCount ++;
            }
        }
    }
    return whiteCount < blackCount ? whiteCount : blackCount;
}
let minNum = 90;
for (let i = 0; i <= Number(N) - 8; i++) {
    for (let j = 0; j <= Number(M) - 8; j++) {
        const num = checkChessBoard(i,j);
        if(num < minNum){
            minNum = num;
        }
    }
}
console.log(minNum)
