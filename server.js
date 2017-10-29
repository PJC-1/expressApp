var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.sendFile('views/index.html', {root : __dirname})
});

app.listen(3000, function(){
  console.log("now listening to port 3000...");
});
