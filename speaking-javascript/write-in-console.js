/*
output:
 570$ node writeInConsole.js
0: /Users/fabriceesope/.nvm/versions/node/v8.10.0/bin/node
1: /Users/fabriceesope/workspace/node-practice/all-in-1/speaking-javascript/writeInConsole.js
 571$ node writeInConsole.js something and something else
0: /Users/fabriceesope/.nvm/versions/node/v8.10.0/bin/node
1: /Users/fabriceesope/workspace/node-practice/all-in-1/speaking-javascript/writeInConsole.js
2: something
3: and
4: something
5: else

*/

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

