function createArray() {
  var num = []
  var argvLength = process.argv.length - 2
  console.log('argvLength ' + argvLength )

  for(var x=0;x<argvLength;x++) {
    var newValue = process.argv[x+2]
    num.push(newValue)

    console.log( ` x = ${x} num[x] = ${num[x]} \
    num = ${num} ` )
  }
  return num
}
function findEvenNum(arrayNum) {
  console.log( 'argument [0] ' + arguments[0]
    + 'arguments.callee : ' + arguments.callee )
  loop: {
    for(var i=0; i<arrayNum.length ; i++ ) {
      var elem = arrayNum[i]
      if ((elem % 2) === 0) {
        console.log(` Even number [${elem}] ` +
          `found at index [${i}] of the array ` )
        console.log('Did not display ' + arrayNum[i+1])
        break loop
      }
    }
  }
}
var myArr = createArray()
console.log(myArr)
findEvenNum(myArr)
