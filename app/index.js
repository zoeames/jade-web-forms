'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/calc', function(req, res){
  res.render('calc');
});

app.post('/calc', function(req, res){
 if(req.body.operator === '+'){
    var result = (req.body.x * 1)+(req.body.y * 1);
  }else if(req.body.operator === '*'){
    var result  = (req.body.x * 1)*(req.body.y * 1);
  }else if(req.body.operator === '-'){
    var result = (req.body.x * 1)-(req.body.y * 1);
  }else {
    var result  = (req.body.x * 1)/(req.body.y * 1);}
  
res.render('calc', {x:req.body.x, y:req.body.y, result:result, operator:req.body.operator});

});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT', port);
});

