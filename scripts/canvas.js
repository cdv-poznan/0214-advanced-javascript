var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.fillStyle = 'rgba(0, 200, 0, 0.5)';
context.strokeStyle = '#ff0000';
context.lineWidth = 5;

/* RECT */
/*
context.strokeRect(50, 50, 100, 100);
context.fillRect(20, 20, 100, 100);
context.clearRect(30, 30, 40, 40);
*/

/* PATH */
/*
context.beginPath();
context.moveTo(10, 200);
context.lineTo(100, 300);
context.lineTo(200, 200);
context.lineTo(100, 100);
context.closePath();
context.fill();
context.stroke();
*/

function toRadian(deg) {
  return (Math.PI / 180) * deg;
}

/*
context.arc(200, 200, 100, 0, toRadian(90), false);
context.stroke();

context.beginPath();
context.strokeStyle = '#00ffff';
context.arc(200, 200, 100, 0, toRadian(90), true);
context.stroke();
*/

context.fillStyle = "rgba(200, 0, 0, 0.5)";

/*
context.beginPath();
context.moveTo(200, 100);
context.quadraticCurveTo(50, 0, 200, 200);
context.quadraticCurveTo(350, 0, 200, 100);

context.fill();
*/

/*
context.beginPath();

context.moveTo(75, 40);

context.bezierCurveTo(75, 37, 70, 25, 50, 25);
context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
context.bezierCurveTo(20, 80, 40, 102, 75, 120);
context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
context.bezierCurveTo(85, 25, 75, 37, 75, 40);

context.fillStyle = "rgba(200, 0, 0, 0.5)";
context.fill();
*/

// canvas.addEventListener('click', function (event) {
//   context.fillRect(event.x - 5, event.y - 5, 10, 10);
//   context.fill();
// });


/***
 * Zadanie 3.
 * Napisz skrypt pozwalający rysować linie na canvasie za pomocą myszki.
 ***/

canvas.addEventListener('mousedown', function (event) {
  console.log(event.type, event.x, event.y);
  context.beginPath();
  context.moveTo(event.x, event.y);
});

canvas.addEventListener('mouseup', function (event) {
  console.log(event.type, event.x, event.y);
  context.lineTo(event.x, event.y);
  context.stroke();
});
