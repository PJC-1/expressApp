var $todosList;
var allTodos = [];


$(document).ready(function(){

  $todosList = $('#todoTarget');

  $.ajax({
    method: "GET",
    url: "/api/todos",
    success: onSuccess,
    error: onError
  });

  $("#todoTarget").on("click",".todo", function(e){
    var id = $(this).closest(".todo").data('todo-id');
    console.log(id);
    window.location.href = '/todos/' + id;
  });

});

function onSuccess(todos){
  allTodos = todos;
  render();
}

function onError(error){
  console.log(error);
}

function render(){
  $todosList.empty();

  var todosHtml = getAllTodosHtml(allTodos);

  $todosList.append(todosHtml);
}

function getAllTodosHtml(items){
  return items.map(getTodoHtml).join("");
}

function getTodoHtml(item){
  return `
    <hr>
    <p class="todo" data-todo-id="${item._id}">
      <b>${item.description}</b>
      by ${item.author}
      (<i>Difficulty Level: <strong>${item.difficutlyLevel}</strong></i>)
    </p>
  `;
}
