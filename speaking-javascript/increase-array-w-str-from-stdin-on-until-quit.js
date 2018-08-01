process.stdin.resume()
process.stdin.setEncoding('utf8')
// var util = require('util')

var names = ['init']
console.log('Enter values for array or "quit"') 

for (var i = 0; i < names.length ; i++) {
  process.stdin.on('data', function (text) {
    console.log('received data:' + text)
    var cleanText = text.replace(/(\r\n|\n|\r)/gm,'')
  
    console.log(names) 
    if(text === 'quit\n') {
      console.log(names) 
      names.shift()
      console.log(names) 
      done()
    } else {  
      var newVal = cleanText
      names.push(newVal)
  
      console.log(names) 
    }
  })
}

function done() {
  console.log('quit')
  process.exit()
}

