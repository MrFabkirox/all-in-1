function sum2 (arr) {
  var sum = 0;
  for(var i=0; i<arr.length;i++) {
    sum+=arr[i]; 
  }
  return sum;
}

function sum (arr) {
  return arr.reduce(function(a, b) { 
    return a + b
  }, 0)
}

module.exports.sum = sum
