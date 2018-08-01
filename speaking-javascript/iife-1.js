var entered = process.argv[2]

function f() {

  if(entered === 'yes') {
    (function() {
      var tmp = 'temp exist' // tmp exist only in this iife
      console.log(tmp)
    } ())  
  }
//  console.log(tmp) // tmp doesn t exist here
}

f()
console.log(  )
