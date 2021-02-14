console.log('start');

// [stan: pending]
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve(true); // zmień status na fulfilled
    } else {
      reject(false); // zmień status na rejected
    }
  }, 2000);
});

console.log('po deklaracji promise');

promise
  .then(function (value) {
    console.log('promise fulfilled', value);
    return Number(value);
  })
  .then(function (value) {
    console.log('new value from upper then', value);
  })
  .catch(function (error) {
    console.log('promise rejected', error);
  })
  .finally(function () {
    console.log('done!');
  });

console.log('po metodzie then');

// ...

// pending -> fulfilled
// pending -> rejected

// promise // [stan: fulfilled]
// promise // [stan: rejected]

const promise1 = Promise.resolve({ value: 'fulfilled' }); // [status: pending -> fulfilled]

const promise2 = Promise.reject({ error: 'rejected' }); // [status: pending -> rejected]
