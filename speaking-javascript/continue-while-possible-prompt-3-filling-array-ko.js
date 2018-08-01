console.log( ' Enter 3 num : ' )

var num = [ 5 , 7, 9 ]
var ifDone = ''
var elem  = 1
var numArgv = ['']

console.log( ' Num : ' + num )
var newValue = process.argv[2]

for(var x=0;x<num.length;x++) {

  numArgv.push(process.argv[x+2])

  console.log( ` \
  x = ${x} \
  numArgv[x] = ${numArgv[x]} \
  numArgv = ${numArgv} \
  ` )
}

function findEvenNum(arrayNum) {

  loop: {
    for(var i=-1; i<arrayNum.length ; i++ ) {
      // arrayNum[i] = process.argv[i+1] // still donow how to increment array
      // elem = arrayNum[i]

      if ((elem % 2) === 0) {
        console.log(` Even number [${elem}] ` +
	  `found at index [${i}] of the array ` )
        break loop
      }
      console.log( ' Did not display ' + arrayNum[i+2] )
    }
  }
}
findEvenNum(num)
