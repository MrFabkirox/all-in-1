// stop with ctr z

var prompt = require('prompt')
var names = [ '', '', '']
var nameCounter = 0

var line

do {
  line = prompt.start('Enter a number:')
//  nameCounter += 1        // can t make it work my way for now
//  names[nameCounter]=line // to fix
} while (!/^[0-9]+$/.test(line))
  
console.log(names)

