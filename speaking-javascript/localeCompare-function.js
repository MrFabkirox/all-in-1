var entry = process.argv[2]
console.log(` entered : ${entry} `)
console.log(entry)
console.log(typeof(entry))
console.log( ' ---------------- ' )

var entryString = entry.toString()
console.log(` entryString : ${entryString} `)
console.log(entryString)
console.log(typeof(entryString))
console.log( ' ---------------- ' )

var toFind = process.argv[3]
// var toFindString = toFind.toString

console.log(' entry: ' + entry + ' to compare with: '+ toFind )

console.log(entry.localeCompare('something'))

