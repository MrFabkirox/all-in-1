// var name = ''
// console.log('Enter names, and then enter "done" when done')

process.stdin.resume()
process.stdin.setEncoding('utf8')
var util = require('util')

process.stdin.on('data', function (text) {

  var names = [ '', '']

  console.log('received data:', util.inspect(text))
  if (text === 'quit\n') {
    done()
  }
})

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.')
  process.exit()
}

