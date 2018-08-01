var poss = [ 'skate', 'bike' ]
var person = {
  name: 'bob',
  possesions: poss
}

console.log(person)

var poss2 = [ 'skate2', 'bike2' ]
var person2 = {
  name: 'bob2',
  possesions: poss2
}

console.log(person2)

(function () {                      // chap 13 not working !
  var person = person
  console.log('Hello '+ person.name )
}());

(function () {
  var pers2arg = person2
  console.log('person2 : ' + pers2arg.name)
} ());


(function (pers3arg) {
  console.log('person3 : ' + pers3arg.name)
} (person2))


