var arrayToFill = []

for (var i=0;i<4;i++) {
  arrayToFill.push(process.argv[i])
}

console.log('Entered : ' + arrayToFill)

var arr = [ 'a', 'b' ]
for ( key in arr ) { console.log(key + ' : ' + arr[key]) }

