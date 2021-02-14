
var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/colors');

request.addEventListener('load', function() {
  if (request.status === 200) {
    var responseJson = JSON.parse(request.responseText);
    console.log(responseJson);
  } else {
    console.log(request);
  }
});

request.addEventListener('error', function() {
  console.log('cannot load data');
});

request.send();
