var prompt = require('prompt')

prompt.start()

var ifDone = ''
// var done = false

console.log( 'Enter name or done : ' )

// var line
// 
// do {
//   line =  prompt('Enter a number: ')
// } while (!/^[0-9]+$/.test(line))

function ask() {
  prompt.get(['name'], function(err, result) {
    console.log('Name: ' + result.name)
    ifDone = result.name
    if (ifDone === 'done') {
      console.log('We are done.')
    } else {
      ask()
    }
  })


}

ask()

