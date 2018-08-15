var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var arr = []

function fillArray(arr, toAdd) {
  arr = arr.push(toAdd)
}

function addName(nameToAdd) {
  nameToAdd = String(nameToAdd)
  console.log('Entered : ' + nameToAdd)
  fillArray(arr,nameToAdd)
  console.log('Array : ' + arr)
}

function start() {
  rl.question('1st name: ', function (n1) {
    rl.close()
    addName(n1)
  })
}

function main() {
  start()
}
main()
