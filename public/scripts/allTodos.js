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
    <p>
      <b>${item.description}</b>
      by ${item.author}
      (<i>Difficulty Level: <strong>${item.difficutlyLevel}</strong></i>)
    </p>
  `;
}
