const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = '';
rl.on('line', line => {
    for (let i = Number(line); i > 0 ; i--) {
        result += `${i}\n`;
    }
}).on('close', () => {
  console.log(result);
  process.exit();
})