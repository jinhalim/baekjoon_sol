const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());
// const input = 3;
const rods = [new Array(input).fill().map((_,i)=>{return input - i}),[],[]];
// const secondRod = [];
// const thirdRod = [];
const history = [];
const changeRod = (num,from,other,to) => {
      if(num === 0){
        // console.log(num,from,to,other,rods)
          return ;
      }else{

        // console.log(num,from,to,other,rods)
          changeRod(num-1,from,to,other);
          history.push(`${from} ${to}`);
          rods[to-1].push(rods[from-1].pop())
        //   console.log('hhi')
          changeRod(num-1,other,from,to);
      }
}
changeRod(input,1,2,3)
console.log(`${history.length}\n${history.join('\n')}`)