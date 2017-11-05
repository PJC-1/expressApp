console.log("testing editTodo.js...");

var windowPath = window.location.pathname;
var windowPathSplit = windowPath.split('/');
var id = windowPathSplit[2];
var url = '/api/todos/' + id;

$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: url,
    success: onSuccess,
    error: onError
  });
});

function onSuccess(result){
  var output = `
    <form class="" id="editTodoForm">
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" name="description" value="${result.description}">
      </div>
      <div class="form-group">
        <label for="difficutlyLevel">Difficutly</label>
        <input type="number" class="form-control" name="difficutlyLevel" value="${result.difficutlyLevel}">
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" class="form-control" name="author" value="${result.author}">
      </div>
    </form>
    <button onclick="editCancel()" class="btn btn-danger">cancel</button>
    <button onclick="editSave()" class="btn btn-success">save</button>
  `;
  $("#todoTarget").append(output);
}

function editCancel(){
  window.location.href = '/todos/' + id;
}

function editSave(){
  $.ajax({
    method: "PUT",
    url: url,
    data: $("form").serialize(),
    success: onSave,
    error: onError
  });
}

function onSave(result){
  window.location.href = '/todos/' + id;
}

function onError(err){
  console.log(err);
}
