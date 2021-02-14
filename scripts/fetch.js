/** GET **/
var request = fetch('https://reqres.in/api/users');

request
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

/** POST **/

var user = {
  name: 'morpheus',
  job: 'leader',
};

var postRequest = fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
  },
  body: JSON.stringify(user),
});
