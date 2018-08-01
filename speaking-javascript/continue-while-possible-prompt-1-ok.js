var prompt = require('prompt')

prompt.start()

var ifDone = ''
// var done = false
var count = 0
var names = []

console.log( 'Enter name or done : ' )

function ask() {
  prompt.get(['name'], function(err, result) {
    console.log('Name: ' + result.name)
    ifDone = result.name
    count+=1
    names[count] = result.names // again not working

    if (ifDone === 'done') {
      console.log('We are done.')
    } else {
      ask()
    }
  })
  console.log('Entered: ' + names)
}
ask()

