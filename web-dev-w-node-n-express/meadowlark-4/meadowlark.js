var express = require('express');
var app = express();
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

// var weather = require('./lib/weather'); // ko
var quote = require('./lib/quotes');
app.use(express.static(__dirname + '/public'));
app.use(require('body-parser')());

var fortunes = [
  "Conquer your fears or they will conquer you.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
];

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
      }, ], }; } app.set('port', process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  // res.locals.partials.menu;
  next();
});
app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  res.locals.partials.weather = getWeatherData();
  next();
});

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
  req.query.test === '1';
  next();
});

app.get('/', function(req, res){
  res.render('home', {
      quote: quote.getQuote(),
  });
});

app.get('/newsletter', function(req, res){
  // provide a dummy CSRF value for now
  res.render('newsletter', { csrf: 'CSRF token goes here' });
});
app.post('/process', function(req, res){
  console.log('Form (from querystring): ' + req.query.form);
  console.log('CSRF token (from hidden form field): ' + req.body._csrf);
  console.log('Name (from visible form field): ' + req.body.name);
  console.log('Email (from visible form field): ' + req.body.email);
  res.redirect(303, '/thank-you');
});

app.get('/newsletter', function(req, res){
  // provide a dummy CSRF value for now
  res.render('newsletter', { csrf: 'CSRF token goes here' });
});

app.get('/formStringDisplay', function(req, res){
  // provide a dummy CSRF value for now
  res.render('formStringDisplay', { csrf: 'CSRF token goes here' });
});

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

app.get('/about', function(req, res){
  var randomFortune =
    fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {
    fortune: randomFortune,
    pageTestScript: '/qa/tests-about.js'
  });
});

app.get('/headersPlain', function(req,res){
  res.set('Content-Type','text/plain');
  var s = '';
  for(var name in req.headers){
    s += name;
    s += req.headers[name];
    s += '\n';
  }
});
app.get('/headersHtml', function(req,res){
  var s = '';
  for(var name in req.headers){
    s += name + ': ' + req.headers[name] + '\n';
  }
  res.render('headers', {
     s: s,
  });
  res.send(s);
});

app.get('/greeting', function(req, res){
  res.render('about', {
    message: 'welcome',
    style: req.query.style,
//     userid: req.cookie.userid,
//     username: req.session.username,
  });
});
app.get('/img/tigerlogo.png', function(req, res){
  req.serveStaticFile(res, '/public/img/tigerlogo.png', 'image/png');
});

app.get('/tours/hood-river', function(req, res){
  res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function(req, res){
  res.render('tours/request-group-rate');
});

app.get('/no-layout', function(req, res){
  res.render('no-layout', { layout: null });
// the layout file views/layouts/custom.handlebars will be used
app.get('/custom-layout', function(req, res){
  res.render('custom-layout', { layout: 'custom' });
});

app.post('/process-contact', function(req, res){
  console.log('Received contact from ' + req.body.name +
    ' <' + req.body.email + '>'); // save to database....
  });
  res.redirect(303, '/thank-you');
});

var tours = [
  { id: 0, name: 'Hood River', price: 99.99 },
  { id: 1, name: 'Oregon Coast', price: 149.95 },
];

app.get('/api/tours', function(req, res){
  res.json(tours);
});

// app.get('/api/tours2', function(req, res){ // ko for now
// var toursXml = '<?xml version="1.0"?><tours>' +
// products.map(function(p){
//   return '<tour price="' + p.price +
//     '" id="' + p.id + '">' + p.name + '</tour>';
//   }).join('') + '</tours>';
//   var toursText = tours.map(function(p){
//     return p.id + ': ' + p.name + ' (' + p.price + ')';
//   }).join('\n');
//   res.format({
//     'application/json': function(){
//       res.json(tours);
//     },
//     'application/xml': function(){
//       res.type('application/xml');
//       res.send(toursXml);
//     },
//     'text/xml': function(){
//       res.type('text/xml');
//       res.send(toursXml);
//     },
//     'text/plain': function(){
//       res.type('text/plain');
//       res.send(toursXml);
//     }
//   });
// });

app.put('/api/tour/:id', function(req, res){
  var p = tours.some(function(p){
    return p.id == req.params.id; });
  if(p){
    if( req.query.name ) p.name = req.query.name;
    if( req.query.price ) p.price = req.query.price;
    res.json({success: true});
  }else{
    res.json({error: 'No such tour exists.'});
  }
});

// api.del('/api/tour/:id', function(req, res){
//   var i;
//   for( i=tours.length-1; i>=0; i-- )
//     if( tours[i].id == req.params.id ) break;
//   if(i>=0){
//     tours.splice(i, 1);
//     res.json({success: true});
//   }else{
//    res.json({error: 'No such tour exists.'});
//   }
// });


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

