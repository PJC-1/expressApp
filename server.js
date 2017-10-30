var express = require('express');
var bodyParser = require('body-parser');

var db = require('./models');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', function(req, res){
  res.sendFile('views/index.html', {root : __dirname})
});

app.listen(3000, function(){
  console.log("now listening to port 3000...");
});
