// risingstack-hero/app/index.js

function sum (arr) {
  return arr.reduce(function(a, b) {
    return a + b
  }, 0)
}


module.exports.sum = sum

console.log([3,4,5].reduce())

