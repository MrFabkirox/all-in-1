console.log( ' Enter 3 num : ' )

var num = [ process.argv[2] , process.argv[3], process.argv[4] ]

console.log( ' Num : ' + num )

function findEvenNum(arrayNum) {

  loop: {
    for(var i=0; i<arrayNum.length ; i++ ) {
      var elem = arrayNum[i]

      if ((elem % 2) === 0) {
        console.log('Even number found at ' + elem )
        break loop
      }
      console.log( ' Did not display ' + arrayNum[i+2] )
    }
  }
}

findEvenNum(num)

