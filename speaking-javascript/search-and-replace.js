// search and replace

// function sr( toSearch, toReplace) { // first try
//  var searched = String.prototype.search(toSearch)
//  var replacement = searched.prototype.replace(toReplace)
// }
// sr('toto', 'tata')

function learnFunction() {
  var string = document.getElementById('learn').innerHTML
  var result = string.replace(/white/gi, 'black')
  document.getElementById('learn').innerHTML = result
}

function learnFunction2() {
  var string = document.getElementById('learn').innerHTML
  var result = string.replace(/white|bed|table/gi,
    function myFunction(z){
      return z.toUpperCase()
    })
  document.getElementById('learn').innerHTML = result
}


console.log( ' --------------------basic-string-replace--------- ' )
function basicReplace() {
  var string = 'basicReplace stuff !'
  
  console.log(string.replace('stuff', 'something'))
}
basicReplace()
console.log( ' ------------------------------------------------- ' )


console.log( ' --------------------string-replace-and-upperCase- ' )
var str = 'Mr Blue has a blue house and a blue car'
var res = str.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase()
})

console.log(res)
console.log( ' ------------------------------------------------- ' )

