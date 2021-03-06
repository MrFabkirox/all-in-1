var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
 
var handlebars = require('express3-handlebars').create({
  defaultLayout:'main',
  helpers: {
    section: function(name, options){
      if(!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  // res.locals.partials.menu;
  next();
});

function getWeatherData(){
  return {
    locations: [
      {
        name: 'Portland',
        forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
        iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
        weather: 'Overcast',
        temp: '54.1 F (12.3 C)',
      }, {
        name: 'Bend',
        forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
        iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
        weather: 'Partly Cloudy',
        temp: '55.0 F (12.8 C)',
      }, {
        name: 'Manzanita',
        forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
        iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
        weather: 'Light Rain',
        temp: '55.0 F (12.8 C)',
      },
      ],
  };
}
app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.weather = getWeatherData();
  next();
});

app.get('/jquery-test', function(req, res) {
  res.render('jquery-test');
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
    message: 'Same as about with some personalization',
    style: req.query.style,
//     userid: req.cookie.userid,
//     username: req.session.username,
    languages: req.acceptedLanguages,
  });
});

// app.get('/process-contact', function(req, res){
//   res.render('process-contact');
// });
// app.post('/process-contact', function(req, res){
//   console.log('Received contact from ' + req.body.name +
//     ' <' + req.body.email + '>');
//   res.redirect(303, '/thank-you');
// });

var tours = [
  { id: 0, name: 'Hood River', price: 99.99 },
  { id: 1, name: 'Oregon Coast', price: 149.95 },
];
// app.get('/api/tours', function(req, res){
//   res.json(tours);
// });
app.get('/api/tours', function(req, res){
  var toursXml = '<?xml version="1.0"?><tours>' +
    tours.map(function(p){
      return '<tour price="' + p.price +
        '" id="' + p.id + '">' + p.name + '</tour>';
    }).join('') + '</tours>';
    var toursText = tours.map(function(p){
      return p.id + ': ' + p.name + ' (' + p.price + ')';
    }).join('\n');
    res.format({
      'application/json': function(){
        res.json(tours);
      },
      'application/xml': function(){
        res.type('application/xml');
        res.send(toursXml);
      },
      'text/xml': function(){
         res.type('text/xml');
         res.send(toursXml);
      },
      'text/plain': function(){
        res.type('text/plain');
        res.send(toursXml);
     }
  });
});
// app.put('/api/tour/:id', function(req, res){
//   var p = tours.some(function(p){
//   return p.id == req.params.id });
//   if(p){
//     if( req.query.name ) p.name = req.query.name;
//     if( req.query.price ) p.price = req.query.price;
//       res.json({success: true});
//     }else{
//       res.json({error: 'No such tour exists.'});
//     }
// });

app.get('/nursery-rhyme', function(req, res){
  res.render('nursery-rhyme');
});
app.get('/data/nursery-rhyme', function(req, res){
  res.json({
    animal: 'squirrel',
    bodyPart: 'tail',
    adjective: 'bushy',
    noun: 'heck',
  });
});

app.use(require('body-parser')());

app.get('/newsletterNoAjax', function(req, res){
  // we will learn about CSRF later...for now, we just
  // provide a dummy value
  res.render('newsletterNoAjax', {
    csrf: 'CSRF token goes here',
  });
});
app.post('/processNoAjax', function(req, res){
  console.log('Form from querystring: ' + req.query.form);
  console.log('CSRF token from hidden form field: ' + req.body._csrf);
  console.log('Name from visible form field: ' + req.body.name);
  console.log('Email from visible form field: ' + req.body.email);
  // res.redirect(303, '/thank-you');
  res.type('text/plain');
  res.status(200);
  res.send('200 - Thank you !');
});

app.get('/newsletter', function(req, res){
  res.render('newsletter', {
    csrf: 'CSRF token goes here',
  });
});
app.post('/process', function(req, res){
  if(req.xhr || req.accepts('json,html')==='json'){
    // if there were an error, we would send { error: 'error description' }
    res.send({ success: true });
  }else{
    // if there were an error, we would redirect to an error page
    res.type('text/plain');
    res.status(500);
    res.send(res.error);
    }
});

var formidable = require('formidable');

app.get('/contest/vacation-photo',function(req,res){
  var now = new Date();
  res.render('contest/vacation-photo',{
    year: now.getFullYear(),month: now.getMonth(),
  });
});
app.post('/contest/vacation-photo/:year/:month', function(req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files){
    if(err) return res.redirect(303, '/error');
    console.log('received fields:');
    console.log(fields);
    console.log('received files:');
    console.log(files);
    res.redirect(303, '/thank-you');
  });
});

app.use(function(req, res, next){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + ' Ctrl-C to terminate' );
});
