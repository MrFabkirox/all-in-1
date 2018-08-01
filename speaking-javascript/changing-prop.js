var person1 = {
  name: 'boby',
  age: 22
}
person1.prop = 'firstProp'
console.log(person1.prop)

person1.prop.length = 2
console.log(person1.prop)


var person2 = {}
person2.prop = 1234
console.log(person2.prop)

person2.prop.length = 1
console.log(person2.prop)

person1.prop = 'fristChangedProp'
console.log(person1.prop)


person2.prop = 'secondChangedProp'
console.log(person2.prop)

function returnPersonProp(pers) { return pers.prop }
console.log(returnPersonProp(person2))

