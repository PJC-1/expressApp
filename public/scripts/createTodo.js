console.log("testing createTodo.js...");

$(document).ready(function(){
  $("form").on('submit', function(event){
    event.preventDefault();
    // ajax request to server
    $.ajax({
      method: "POST",
      url: "/api/createTodo",
      data: $(this).serialize(),
      success: onSuccess,
      error: onError
    });
  });
});

function onSuccess(json){
  console.log(json);
}

function onError(error){
  console.log(error);
}
