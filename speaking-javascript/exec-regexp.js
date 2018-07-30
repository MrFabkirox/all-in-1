var entry = process.argv[2]
var toFind = process.argv[3]


console.log(' entry: ' + entry + 'second char : '+ entry.charAt(1) )
console.log('toFind: ' + toFind)


console.log( '----------------------------' )
console.log(/x/.exec('aaa'))
console.log('/x/ in aaa : ' + /x/.exec('aaa'))
console.log( '----------------------------' )
console.log(/a/.exec('aaa'))
console.log('/a/ in aaa : ' + /a/.exec('aaa'))
console.log( '----------------------------' )
console.log(/a/.exec(toFind))
console.log(`/a/ in ${toFind} : ` + /a/.exec(toFind)) // $variable in text
console.log( '----------------------------' )
console.log(/a/.exec(toFind)) // how to do $entry ?
console.log('/a/ in toFind : ' + /a/.exec(toFind)) // how to do $entry ?
console.log( '----------------------------' )
console.log(/\w/.exec(toFind)) // how to do $entry ?
console.log('word in toFind : ' + /\w/.exec(toFind))


console.log( '----------------------------' )
console.log( '----------------------------' )
console.log( 'abc' instanceof Object )
console.log( typeof 'abc' )

