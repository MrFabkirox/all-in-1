console.log('Enter : ')

var names = [] // list always 5 elem ? : o

for(var i=0;i<arguments.length;i++) {
  names[i] = process.argv[i+ 2]
}

console.log(names)

names.push('push', 'added', 'name')

console.log(names)
