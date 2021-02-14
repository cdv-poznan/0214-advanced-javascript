/** COOKIES **/

var cookies = document.cookie;
console.log(cookies);

var date = new Date();
var utc = date.toUTCString();

/* atrybut expires */
// document.cookie = 'username=Adrian;expires=' + utc;

/* atrybut max-age */
// var maxAge = 1000 * 10;
// document.cookie = 'username=Adrian;max-age=' + maxAge;

/* atrybut secure */
// document.cookie = 'username=Adrian;secure'
