var quote = require('../lib/quote.js');
var expect = require('chai').expect;

suite('Quote tests', function(){
  test('getQuote() should return a quote', function(){
    expect(typeof quote.getQuote() === 'string');
  });
});
