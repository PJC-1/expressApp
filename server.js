var express = require('express');
var bodyParser = require('body-parser');

var db = require('./models');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended : true }));

////////////////////
// HTML Endpoints //
////////////////////

// GET Route for Root
app.get('/', function(req, res){
  res.sendFile('views/index.html', {root : __dirname});
});

// GET Route for all todos
app.get('/todos', function(req, res){
  res.sendFile('views/allTodos.html', {root : __dirname});
});

///////////////////
// API Endpoints //
///////////////////



app.listen(3000, function(){
  console.log("now listening to port 3000...");
});
