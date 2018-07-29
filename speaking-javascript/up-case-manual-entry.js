// upCaseManualEntry clanky

process.argv.forEach(function (val, index, array) {


  var res = val.replace(/x|w|z/gi, function (x) {

    return x.toUpperCase()

  })
  console.log(index + ': ' + val + res )
})
