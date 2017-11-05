var express = require('express');
var bodyParser = require('body-parser');


var db = require('./models');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended : true }));

////////////////////
// HTML Endpoints //
////////////////////

// GET Route for Root
app.get('/', function(req, res){
  res.sendFile('views/index.html', {root : __dirname});
});

// GET Route for a single todo
app.get('/todos/:id', function(req, res){
  res.sendFile('views/todo.html', {root : __dirname});
});

// GET Route for edit single todo
app.get('/todos/:id/edit', function(req, res){
  res.sendFile('views/editTodo.html', {root : __dirname});
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

// GET Route for a single todo
app.get('/api/todos/:id', function(req, res){
  db.Todo.findById({_id:req.params.id}, function(err, result){
    if(err){
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// PUT Route to edit single todo
app.put('/api/todos/:id', function(req, res){
  // go to the DB and find the Todo, by using findById
  db.Todo.findById({_id:req.params.id}, function(err, result){
    if(err){
      console.log(err);
    } else {
      console.log(result);
      // set the properties of the original Todo to the new values (from the form).
      result.author = req.body.author;
      result.description = req.body.description;
      result.difficutlyLevel = req.body.difficutlyLevel;
      // save the updated Todo to the DB
      result.save(function(err, updatedItem){
        if(err){
          console.log(err);
        } else {
          console.log(updatedItem);
          // send the updated Todo to the client (res.json).
          res.json(updatedItem);
        }
      });
    }
  });
});

app.delete('/api/todos/:id', function(req, res){
  db.Todo.findOneAndRemove({_id:req.params.id}, function(err, result){
    if(err){
      console.log(err);
    } else {
      res.json(result);
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
