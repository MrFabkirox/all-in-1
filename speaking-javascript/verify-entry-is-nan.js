// verify entry is nan

// console.log(process.argv)

var isNum = process.argv[2]
isNum = Number(isNum)
console.log(isNum)

function isNaN(value) {
  return typeof value
}

// console.log(isNaN(process.argv[2]))
console.log(isNaN(isNum))


