// risingstack-hero/app/index.js

console.log(' ------------ risingstack-hero/app/index.js')

const calc = require('./calc')

const numbersToAdd = [
  3,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)

