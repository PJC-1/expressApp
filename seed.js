var db = require('./models');

var todo_list = [
  {
    author : "Jerry",
    description : "Take dogs to the park.",
    difficutlyLevel : 3
  },
  {
    author : "Sam",
    description : "Do homework.",
    difficutlyLevel : 5
  },
  {
    author : "Orion",
    description : "Go to Las Vegas.",
    difficutlyLevel : 0
  },
  {
    author : "Peter",
    description : "Teach class.",
    difficutlyLevel : 5
  },
  {
    author : "Amy",
    description : "Watch T.V.",
    difficutlyLevel : 2
  },
  {
    author : "Steve",
    description : "Watch T.V.",
    difficutlyLevel : 1
  },
  {
    author : "Greg",
    description : "Go to Napa.",
    difficutlyLevel : 3
  }
];

db.Todo.remove({}, function(error, todos){
  if(error){
    console.log('Error occurred in remove', error);
  } else {
    console.log('Removed all todos from the db...');
    db.Todo.create(todo_list, function(error, todos){
      if(error){
        return console.log('Error creating todo list', error);
      } else {
        console.log("Created", todos.length, "todos");
        process.exit();
      }
    });
  }
});
