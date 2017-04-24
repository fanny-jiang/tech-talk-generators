/*eslint-disable*/

// basic generator

let generator = function *() {
  let one = yield 1
  let two = yield 2
  console.log('one:', one, 'two: ', two)
}
// store generator() as myGen
let myGen = generator()

console.log('first call: ', myGen.next())
console.log('second call: ', myGen.next('Hello'))
console.log('third call: ', myGen.next('World!'))
console.log('fourth call: ', myGen.next('sriracha'))
console.log('last call: ', myGen.next())











// // simple async using promises

let fetch = require('node-fetch');  // promise based API
let co = require('co');             // generator library

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => users.map(user => user.username))
  .then(usernames => console.log(usernames))
















// simple async using co generator library

co(function *() {
  const getUsers = 'http://jsonplaceholder.typicode.com/users'
  const response = yield fetch(getUsers)
  const users = yield response.json()
  const usernames = users.map(user => user.username)
  console.log(usernames)
})

// promises: get users, photos, and posts

let getUsers = 'http://jsonplaceholder.typicode.com/users'
let getPhotos = 'http://jsonplaceholder.typicode.com/photos'
let getPosts = 'http://jsonplaceholder.typicode.com/posts'

fetch(getUsers)
  .then(response => response.json())
  .then(users => users.map(user => user.username))
  .then(usernames => console.log(usernames))

fetch(getPhotos)
  .then(response => response.json())
  .then(photos => photos.map(photo => photo.url))
  .then(photoUrls => console.log(photoUrls))

fetch(getPosts)
  .then(response => response.json())
  .then(posts => posts.map(post => post.title))
  .then(postTitles => console.log(postTitles))

// generator: get users, photos, and posts

co(function *() {
  let getData = yield {
    getUsers: fetch('http://jsonplaceholder.typicode.com/users'),
    getPhotos: fetch('http://jsonplaceholder.typicode.com/photos'),
    getPosts: fetch('http://jsonplaceholder.typicode.com/posts')
  }

  let getDataTypes = yield {
    users: getData.getUsers.json()
      .then(users => users.map(user => user.username)),
    photos: getData.getPhotos.json()
      .then(photos => photos.map(photo => photo.url)),
    posts: getData.getPosts.json()
      .then(posts => posts.map(post => post.title))
  }

  console.log(getDataTypes)
})
