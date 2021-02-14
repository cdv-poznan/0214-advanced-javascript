/**
Zadanie 1.
Napisz skrypt, który poprosi użytkownika o podanie
swojego imienia a następnie przywita go wykorzystując
tę informację przy każdej kolejnej wizycie na stronie.
 **/

document.addEventListener('DOMContentLoaded', function () {
  var cookies = document.cookie.split('; ').map(function (cookie) {
    return cookie.split('=');
  });

  var returningUser = cookies.find(function (cookie) {
    return cookie[0] === 'username';
  });

  if (returningUser) {
    var greeting = document.createElement('h2');
    greeting.innerText = 'Hello ' + returningUser[1] + '!';
    document.body.append(greeting);
  } else {
    var input = document.createElement('input');
    input.placeholder = 'What is your name?';
    input.style.margin = '2rem';

    input.addEventListener('keyup', function (event) {
      var username = event.target.value;
      document.cookie = 'username=' + username;
    });

    document.body.append(input);
  }
});
