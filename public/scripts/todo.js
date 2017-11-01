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
});

function onSuccess(json){
  console.log(json);
  var output = `
    <p>
      <strong>author: </strong> ${json.author}
    </p>
    <p>
      <strong>description: </strong> ${json.description}
    </p>
    <p>
      <strong>difficulty: </strong> ${json.difficutlyLevel}
    </p>
  `;
  $('#todoTarget').append(output);
}

function onError(error){
  console.log(error);
}
