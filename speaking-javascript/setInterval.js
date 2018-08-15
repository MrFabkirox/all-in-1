function Car() {
  this.speed = 0
  var self = this
  setInterval(function() {
    self.speed++
    global.getElementById('status').innerHTML = self.speed
  }, 300)
}
var car1 = new Car()
function Car2() {
  this.speed2 = 0
  setInterval(() => {
    this.speed2++
    global.getElementById('status').innerHTML = this.speed
  }, 300)
}
var car2 = new Car2()

// console.log(car1())
