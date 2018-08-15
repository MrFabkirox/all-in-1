var readline = require('readline')
var rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
})
rl.question('Enter smtg: ', (answer) => {
  setInterval(console.log())
}
