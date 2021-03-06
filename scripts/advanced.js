/*
localStorage.setItem('username', 'Adrian');

var username = localStorage.getItem('username');

console.log(username);
*/

var fileInput = document.querySelector('#upload');
var files = document.querySelector('#files');

fileInput.addEventListener('change', function (event) {
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

/* AUDIO */

var audio = document.querySelector('#audio');
var button = document.querySelector('#play');
var time = document.querySelector('#time');
var duration = document.querySelector('#duration');
var volume = document.querySelector('#volume');

// audio.volume = 0.05;
volume.addEventListener('change', function (event) {
  audio.volume = event.target.value / 100;
});

button.addEventListener('click', function (event) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener('play', function () {
  button.innerText = 'Pause';
});

audio.addEventListener('pause', function () {
  button.innerText = 'Play';
});

audio.addEventListener('durationchange', function (event) {
  duration.innerText = event.target.duration;
});

audio.addEventListener('timeupdate', function (event) {
  time.innerText = event.target.currentTime;
});

/* VIDEO */

var video = document.querySelector('#video');
var videoSection = document.getElementById('video-section');

var fullscreenButton = document.getElementById('fullscreen-button');

video.addEventListener('webkitfullscreenchange', function (event) {
  console.log(event);
});

fullscreenButton.addEventListener('click', function (event) {
  video.webkitRequestFullscreen();
});

var speak = document.getElementById('speak');
var textarea = document.getElementById('text');
var voicesSelect = document.getElementById('voices');

var voices;
var selectedVoice;

speechSynthesis.addEventListener('voiceschanged', function (event) {
  voices = speechSynthesis.getVoices();

  for (var i = 0; i < voices.length; i++) {
    var voice = voices[i];

    var option = document.createElement('option');
    option.value = i;
    option.innerText = voice.name + '(' + voice.lang + ')';

    voicesSelect.append(option);
  }

  voicesSelect.addEventListener('change', function (event) {
    selectedVoice = voices[event.target.value];
  });
});

speak.addEventListener('click', function (event) {
  var text = textarea.value;

  var utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.rate = 1;
  utterance.volume = 0.5;

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  speechSynthesis.speak(utterance);
});
