process.stdin.resume()               // can enter values
process.stdin.setEncoding('utf8')    // but can t store
var util = require('util')           // them for now
var names = []

for (var i=0;i<3;i++) {
  process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text))
    if (text === 'quit\n') {
      done()
    } else {
      names[i] = util.inspect(text)
    }   
  })
}
function done() {
  console.log('process.stdin is paused,' +
    'nothing more to do, entered ' + names)
  process.exit()
}
