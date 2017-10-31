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

// GET Route for create a todo
app.get('/createTodo', function(req, res){
  res.sendFile('views/createTodo.html', {root : __dirname});
});

///////////////////
// API Endpoints //
///////////////////

// GET Route for all todos
app.get('/api/todos', function(req, res){
  db.Todo.find({}, function(error, todos){
    if(error){
      console.log(error);
    } else {
      res.json(todos);
    }
  });
});

// POST Route to create todo
app.post('/api/createTodo', function(req, res){
  console.log(req.body);
  var auth = req.body.author;
  var desc = req.body.description;
  var diff = req.body.difficutlyLevel;

  var newTodo = new db.Todo({
    author : auth,
    description : desc,
    difficutlyLevel : diff
  });

  newTodo.save(function(err, savedTodo){
    if(err){
      console.log(err);
    } else {
      res.json(savedTodo);
    }
  });
});

app.listen(3000, function(){
  console.log("now listening to port 3000...");
});
