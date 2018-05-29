var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static('public'));
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req,res){
	res.render('home');
});

app.get('/about', function(req,res){
	res.render('about');
});

app.get('/blog', function(req,res){
	res.render('blog');
});

app.get('/bitcoin', function(req,res){
	res.render('bitcoin');
});

app.get('/ethereum', function(req,res){
	res.render('ethereum');
});

app.get('/litecoin', function(req,res){
	res.render('litecoin');
});

app.get('/ripple', function(req,res){
	res.render('ripple');
});

app.use(function(req, res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});