const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = '';
rl.on('line', line => {
  const input = line.split(' ');
  if(input.length === 2) {
    result += (Number(input[0]) + Number(input[1])) + '\n'
  }
}).on('close', () => {
  console.log(result);
  process.exit();
})