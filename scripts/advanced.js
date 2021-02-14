/*
localStorage.setItem('username', 'Adrian');

var username = localStorage.getItem('username');

console.log(username);
*/

var fileInput = document.querySelector('#upload');
var files = document.querySelector('#files');

fileInput.addEventListener('change', function(event) {
  console.log(event);
  console.log(event.target.files);
  var file = event.target.files[0]; // File
  var url = URL.createObjectURL(file); // string z tymczasowym adresem URL
  console.log(url);

  var img = document.createElement('img');
  img.src = url;
  img.style.maxWidth = '100px';

  files.append(img);
});
