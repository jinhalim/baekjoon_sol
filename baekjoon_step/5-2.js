const selfNumber = (num) => {
    return String(num).split('').reduce((acc,curr)=>{
        acc += Number(curr);
        return acc;
    },0) + num;
}
// const arraySelf = new Array();
// for (let i = 1; i < 10000; i++) {

//     let result = i;
//     while(result < 10000){
    
//         let self = selfNumber(result);
//         result = self;
//         // console.log(` ${result} : ${self}`)
//         if(!arraySelf.includes(result) && result < 10000) {
//             arraySelf.push(result)
//         }
//     }
//     console.log(arraySelf.sort((a,b)=>{ return a-b}))
// }
// for (let i = 1; i < 10000; i++) {
//     if(!arraySelf.includes(i)){
//         console.log(i)
//     }
// }
const num = 10000;
const arraySelf = new Array(num-1).fill().map((obj,index) => index + 1);
for (let i = 1; i < num; i++) {
    let self = i;
    while(self < num){
        const result= selfNumber(self);
        if(result < num && arraySelf.includes(result)){
            delete arraySelf[result-1]
            // console.log(result,arraySelf.includes(result))
            // console.log(arraySelf)
        }
        else if(!arraySelf.includes(result)){
            break
        }
        self = result;
    }
}
console.log(arraySelf.filter((a)=>{ return a > 0 }).join('\n'))