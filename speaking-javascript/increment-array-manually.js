var arr = [ 0, 0 , 0 ]
var newVal = 1 // new val to add to array

for (var i = 0; i < arr.length ; i++) {
  arr[i] += Number(process.argv[i+2])
}

console.log( arr )

function sum(a, b) {
  return a + b 
}

console.log(sum(arr[0], arr[1]))

arr.push( arr[arr.length - 1] + newVal )

console.log( arr )
