/* GET */
var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/colors');

request.addEventListener('load', function () {
  if (request.status === 200) {
    var responseJson = JSON.parse(request.responseText);
    console.log(responseJson);
  } else {
    console.log(request);
  }
});

request.addEventListener('error', function () {
  console.log('cannot load data');
});

request.setRequestHeader('Accept', 'application/json');

request.send();

var request2 = new XMLHttpRequest();
request2.open('POST', 'https://reqres.in/api/users');

request2.addEventListener('load', function () {
  console.log(request2.status);
  console.log(request2.responseText);
});

var user = {
  name: 'morpheus',
  job: 'leader',
};

var body = JSON.stringify(user);

request2.setRequestHeader('Accept', 'application/json');

// request2.send(body);
