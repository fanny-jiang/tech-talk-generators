/*eslint-disable*/
// basic generator

// let generator = function *() {
//   let one = yield 1
//   let two = yield 2
//   console.log('one:', one, 'two: ', two)
// }
// // stores generator() as myGen
// let myGen = generator()

// console.log('first call: ', myGen.next())
// console.log('second call: ', myGen.next('Hello'))
// console.log('third call: ', myGen.next('World!'))
// console.log('fourth call: ', myGen.next('sriracha'))
// console.log('last call: ', myGen.next())



// simple async using generator

let fetch = require('node-fetch');
let co = require('co');

co(function *() {
  const getUsers = 'http://jsonplaceholder.typicode.com/users'
  const response = yield fetch(getUsers)
  const users = yield response.json()
  const usernames = users.map(user => user.username)
  console.log(usernames)
})






