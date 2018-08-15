var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
 
var handlebars = require('express3-handlebars').create({
  defaultLayout:'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

app.get('/', function(req, res) {
  res.render('home');
});
app.get('/about', function(req, res) {
  res.render('about', { 
    pageTestScript: '/qa/tests-about.js',
  });
});

var quote = require('./lib/quote.js');
var fortunes = [
  "Conquer your fears or they will conquer you.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
];
app.get('/quote', function(req, res) {
  var randomFortune = 
    fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('quote', {
    fortune: randomFortune, 
    quote: quote.getQuote(),
  });
});

app.get('/tours/hood-river', function(req, res){
  res.render('tours/hood-river', {
    layout: null,
  });
});
app.get('/tours/request-group-rate', function(req, res){
  res.render('tours/request-group-rate');
});

app.get('/headers', function(req, res){
  var s='';
  for(var name in req.headers) s += name + '------' + req.headers[name];
  res.render('headers', {
    s: s,
  });
});
app.get('/greeting', function(req, res){
  res.render('about', {
    message: 'welcome',
    style: req.query.style,
//     userid: req.cookie.userid,
//     username: req.session.username,
    languages: req.acceptedLanguages,
  });
});

app.use(function(req, res, next){ res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
app.use(function(err, req, res, next){ console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + 'Ctrl-C to terminate' );
});
