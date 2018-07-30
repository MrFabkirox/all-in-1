// https://www.smashingmagazine.com/2017/03/interactive-command-line-application-node-js/
// reading from csv with npm commander ko

const program = require('commander')
const csv = require('csv');
const fs = require('fs')

program
  .version('0.0.1')
  .option('-l, --list [list]', 'list of customers in CSV file')
  .parse(process.argv)

// let parse = csv.parse
// let stream = fs.createReadStream(program.list)
//  .pipe(parse({ delimiter: ','}))

// stream
 //  .on('data', function (data) {
 //    let firstname = data[0];
 //    let lastname = data[1];
 //    let email = data[2];
 //    console.log(firstname, lastname, email);
 //  });

// console.log(program.list)
// console.log(program.parse(process.argv).list[0].toUpperCase())
console.log((process.argv[3]).toUpperCase())
// console.log(program.parse(process.argv).list[1].toUpperCase())
// console.log(program.parse(process.argv))
// console.log(program.list[1].toUpperCase())

console.log( '------------------------------------------is-NaN---------------' )

console.log( '---------------------------------------------------------------' )


console.log( '---------------------------------------------------------------' )
console.log( '---------------------------------------------------------------' )
