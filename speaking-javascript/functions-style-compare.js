var f1 = function(a) { return a }
console.log( f1(' f1 ') )

var f2 = b => b             // fat arrow with argument
console.log( f2(' f2 ') )

var f3 = (c,d,e) => c + d + e      // fat arrow with argument
console.log( f3('fc','fd','fe') )

var f4 = function() { return 'some str f4' }
console.log( f4() )

var f5 = () => { return 'some str f5' } // fat arrow wout arg
console.log( f5() )



