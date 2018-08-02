process.stdin.resume()
process.stdin.setEncoding('utf8')
var util = require('util') // util.inspect show all \r
var names = [ 'init' ]
var newSize = names.length

for (var i=0;i<newSize;i++) {
  process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text))
    var cleanText = text.replace(/(\r\n|\n|\r)/gm,'')
    newSize = names.push(cleanText)
    console.log('Names array : ' + names )
    if (text === 'quit\n') {
      names.shift()
      done()
    }   
  })
}
function done() {
  console.log('process.stdin is stopped,' +
    'nothing more to do, final names:\r' + names)
  process.exit()
}
