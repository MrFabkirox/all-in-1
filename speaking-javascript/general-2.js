console.log( ' -----------------display-key-value-array- ' )
var arr = [ 'a', 'b' ]
for ( key in arr ) { console.log(key + ' : ' + arr[key]) }
console.log( ' ----------------------------------------- ' )


console.log( ' ------------obj-with-deprecated-for-iife- ' )
var obj = { firstname : 'John' }
with (obj) {
  console.log('Hello ' + firstname)
}
console.log( ' ----------------------------------------- ' )


console.log( ' -------------------------typeof-function- ' )
function id(x) {
  return x
}
console.log( typeof id )
console.log( id instanceof Function )
console.log( ' ----------------------------------------- ' )

