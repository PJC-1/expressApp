console.log("testing todo.js...");

$(document).ready(function(){
  var windowPath = window.location.pathname;
  var windowPathSplit = windowPath.split('/');
  var id = windowPathSplit[2];
  var url = '/api/todos/' + id;

  $.ajax({
    method: "GET",
    url: url,
    success: onSuccess,
    error: onError
  });

  $("#todoTarget").on("click", ".delete-todo", function(event){
    $.ajax({
      method: "DELETE",
      url: url,
      data: id,
      success: deleteSuccess,
      error: deleteError
    });
  });

  $("#todoTarget").on("click", ".edit-todo", function(event){
    window.location.href = "/todos/" + id + "/edit";
  });


});

function onSuccess(json){
  console.log(json);
  var output = `
    <div>
      <p>
        <strong>author: </strong> ${json.author}
      </p>
      <p>
        <strong>description: </strong> ${json.description}
      </p>
      <p>
        <strong>difficulty: </strong> ${json.difficutlyLevel}
      </p>
      <button class="btn btn-danger delete-todo todo" data-id="${json._id}">delete</button>
      <button class="btn btn-success edit-todo todo" data-id="${json._id}">edit</button>
    </div>
  `;
  $('#todoTarget').append(output);
}

function onError(error){
  console.log(error);
}

function deleteSuccess(json){
  alert("deleted item: "+json._id);
  window.location.href = "/todos";
}

function deleteError(error){
  console.log(error);
}
