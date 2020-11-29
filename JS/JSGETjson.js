 var request = new XMLHttpRequest();
   request.open("GET", "data/file.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   alert (my_JSON_object.result[0]);
