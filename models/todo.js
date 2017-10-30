var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  author : String,
  description : String,
  difficutlyLevel : Number
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
