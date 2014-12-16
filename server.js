var express=require('express');
var app = express();
//set path to the views (template) directory
//app.set('view engine','jade')
app.set('views', __dirname + '/views');
//set path to static files
app.use(express.static(__dirname + '/../public'));
//handle GET requests on /
app.get('/', function(req, res){res.render('index.jade', {title: 'Franz Enzenhofer'});});
//listen on localhost:3000
app.listen(3000);