var express=require('express');
var jade = require('jade');
var app = express();

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res){
  res.render('index.jade', 
    {name:"James",
    book: {"name": "Hello", "price": 12.99},
    input: {type:'text',name:'Bob'}
    }
    );
});
app.listen(3000);





















// var express=require('express');
// var jade = require('jade');
// var app = express();
// //set path to the views (template) directory
// //app.set('view engine','jade')
// app.set('views', __dirname + '/views');
// //set path to static files
// app.use(express.static(__dirname + '/../public'));
// //handle GET requests on /
// app.get('/', function(req, res){res.render('index.jade', {title: 'Franz Enzenhofer'});});
// //listen on localhost:3000
// app.listen(3000);