console.log("testing allTodos.js...");

$(document).ready(function(){
  console.log("testing jquery...");

  $.ajax({
    method: "GET",
    url: "/api/todos",
    success: onSuccess,
    error: onError
  });

});

function onSuccess(todos){
  console.log(todos);
}

function onError(error){
  console.log(error);
}
