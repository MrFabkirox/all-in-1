#!/usr/bin/env node

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function processNums(n1, n2) {
  n1 = Number(n1)
  n2 = Number(n2)
  console.log('Their sum: ' + (n1 + n2))
}

function start() {
  rl.question('1st number: ', function (x) {
    rl.question('2nd number: ', function (y) {
      rl.close()

      processNums(x, y)
    })
  })
}

function main() {
  start()
}

main()
