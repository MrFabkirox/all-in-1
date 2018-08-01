process.stdin.resume()
process.stdin.setEncoding('utf8')
var util = require('util')

process.stdin.on('data', function (text) {

  var names = [ '', ''] // how to store in ?

  console.log('received data:', util.inspect(text))
  if (text === 'quit\n') {
    done()
  }
})

function done() {
  console.log('process.stdin is paused, nothing more to do.')
  process.exit()
}

