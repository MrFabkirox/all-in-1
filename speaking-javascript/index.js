


console.log('test')



console.log('------------------------------')
var x = 3
x++
console.log(x)
console.log('------------------------------')


console.log('------------------------------')
function argumentsArrayTest() { return arguments }
function argumentsArrayTestWithArg(arg1,arg2) {
  arg1+=1
  arg2+=2
  var tot = arg1 + arg2
  console.log(tot)
  return arguments
}
console.log('------------------------------')



console.log('------------------------------')
var num1=1
var num2=2

var art = argumentsArrayTest()
var artwa = argumentsArrayTestWithArg(num1,num2)

console.log(art)
console.log(artwa)
console.log('------------------------------')



// (function() { return 'abc from chap7' }())



console.log('------------------------------')
var n = 2
n += 'fa'

console.log(n.prop)
console.log('------------------------------')



console.log('------------------------------')
function regLog () {

  return /x/.exec('aaa') 
}
console.log('reglog: ' + regLog())
console.log('------------------------------')



console.log('------------------------------')
var z = 'someText'
z = Number(z)
console.log(z)
console.log('------------------------------')



console.log('------------------------------')
console.log('typeof')
console.log(typeof('typeOf'))
console.log('------------------------------')



console.log('------------------------------')
function regLog () {

  return 'abc' || 123
}

console.log(regLog())
console.log('------------------------------')



console.log('------------------------------')
function countOccurrences1(regex1, str1) {
  // Omitted: check that /g is set for `regex`
  console.log( str1 + ' match ' + regex1 )

  return (str1.match(regex1) || []).length
}
console.log('countO1 ' + countOccurrences1('to', 'tototo'))
console.log('------------------------------')



console.log('------------------------------')
function countOccurrences2() {

  var regex2 = RegExp('fxo*')
  // var regex2 = RegExp('foo*','g')
  var str2 = 'table football'

  console.log(regex2.test(str2))
}

console.log(countOccurrences2())
console.log('------------------------------')



console.log('------------------------------')
function countOccurrences3() {

  var str = 'The best things in life are free'
  var patt = new RegExp(/\/w/)
  var res = patt.test(str)

  console.log(res)

}

console.log(countOccurrences3())
console.log('------------------------------')






