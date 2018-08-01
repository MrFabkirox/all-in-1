console.log( '-----------display-functions-argument-------' )
function argumentsArrayTest() { return arguments }

console.log( argumentsArrayTest() )
function argumentsArrayTestWithArg(arg1,arg2) {
  arg1+=1
  arg2+=0
  var tot = arg1 + arg2
  console.log(tot)
  return arguments[1]
}
console.log(argumentsArrayTestWithArg(1,2))
console.log( '--------------------------------------------' )


console.log( '---display-functions-argument-linked-w-above' )
var num1=2
var num2=4

var art = argumentsArrayTest()
var artwa = argumentsArrayTestWithArg(num1,num2)

console.log(art)
console.log(artwa)
console.log( '--------------------------------------------' )


// (function() { return 'abc from chap7' }())


console.log( '-----------n-prop---------------------------' )
var n = 2
n += 'fa'

console.log(n.prop)
console.log( '--------------------------------------------' )


console.log( '-------------------------------------reglog-' )
function regLog () {

  return /x/.exec('aaa') // don t understand this one
}
console.log('reglog: ' + regLog())
console.log( '--------------------------------------------' )


console.log( '---------------------------Number-some-text-' )
var z = 'someText'
z = Number(z)           // NaN
console.log(z)
console.log( '--------------------------------------------' )


console.log( '-----------typeof---------------------------' )
console.log(typeof('typeOf'))
console.log( '--------------------------------------------' )


console.log( '-----------return-||------------------------' )
function regLog () {

  return 'abc' || 123
}

console.log(regLog())
console.log( '--------------------------------------------' )


console.log( '-----------match-regex-countOccurrences1----' )
function countOccurrences1(regex1, str1) {
  // Omitted: check that /g is set for `regex`
  console.log( str1 + ' match ' + regex1 )

  return (str1.match(regex1) || []).length
}
console.log('countO1 ' + countOccurrences1('to', 'tototo'))
console.log( '--------------------------------------------' )


console.log( '-----------count-occurence-2----------------' )
function countOccurrences2() {

  var regex2 = RegExp('foo*')
  // var regex2 = RegExp('foo*','g')
  var str2 = 'table football'

  console.log(regex2.test(str2))
}

console.log(countOccurrences2())
console.log( '--------------------------------------------' )


console.log( '-----------countOccurrences-3---------------' )
function countOccurrences3() {

  var str = 'The best things in life are free'
  var patt = new RegExp(/\/w/)
  // var patt = new RegExp(/$The/)
  var res = patt.test(str)

  console.log(res)

}

console.log(countOccurrences3())
console.log( '--------------------------------------------' )




