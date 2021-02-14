/**
 * Zadanie 2.
 * Napisz skrypt, który podczas zmiany wartości pól
 * formularza zapisze je w przeglądarce i odtworzy
 * przy kolejnej wizycie użytkownika.
 **/

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#form');
  var inputs = form.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++ ) {
    console.log(inputs[i]);
    inputs[i].addEventListener('change', function (event) {
      localStorage.setItem(event.target.name, event.target.value);
    });

    var val = localStorage.getItem(inputs[i].name);
    if (val) {
      inputs[i].value = val;
    }
  }
});
