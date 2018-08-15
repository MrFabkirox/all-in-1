var quotes = [
  'There is nothing permanent except change',
  'Learning never exhausts the mind',
  'The journey of a thousand miles begins with one step',
];

exports.getQuote = function() {
  var idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
};
