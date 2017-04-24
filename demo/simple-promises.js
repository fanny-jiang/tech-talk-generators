/*eslint-disable*/

// simple async using promises

let fetch = require('node-fetch');

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => users.map(user => user.username))
  .then(usernames => console.log(usernames))
