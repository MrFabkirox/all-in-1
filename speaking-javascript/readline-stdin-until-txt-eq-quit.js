var readline = require('readline')
var rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
var arr = []

function fillArr(array, toFill) {
  arr = arr.push(toFill)
}

function addNanem(arr) {
  arr = arr.push(arguments[0])
}

function start() {
  rl.question('1st name, ', function (n1) {
    rl.close()
    addNanem(arr, n1)
  })
}
function main() {
  start()
}
main()
