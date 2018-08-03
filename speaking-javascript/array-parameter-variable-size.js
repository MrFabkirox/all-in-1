console.log('Enter : ')

function addName() {
  var names = [] // list always 5 elem ? : o
  var nameLength = process.argv.length
  console.log(`${nameLength}`)

  // arguments only for functions
  for(var i=0; i<process.argv.length; i++) {
    names[i] = process.argv[i+ 2]
  }
  
  console.log(names)
  names.push('push', 'added', 'name')
}  
addName()
