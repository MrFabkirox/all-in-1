
var entry = process.argv[2]
console.log( ` Entered: ${entry} ` )

var toCompare = process.argv[3]
console.log( ` toCompare: ${toCompare} ` )

console.log(entry.search(/`${toCompare}`/))
console.log(entry.search(/i/))

