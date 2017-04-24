/* eslint-disable */

let fetch = require('node-fetch'); // promise based API
let co = require('co'); // generator library

// basic generator

// let myGen = function* () {
//   let one = yield 1
//   let two = yield 2
//   console.log('one:', one, 'two: ', two);
// }

// let generator = myGen(); // run the generator stored as generator

// console.log(generator.next()); // run until the first value has been yielded and returns that value. waits until gen.next() is called called again
// console.log(generator.next('Hello')); // now the function will run again until the next yield, return that value and wait until gen.next() is called again
// console.log(generator.next('World!'));
// console.log(generator.next('sriracha'));
// console.log(generator.next()); // undefined

// if that yielded value is a promise, then it will wait for that promise to resolve and then pass that resolved promise into the value and wait for the next gen.next() function to be called

// async promise example get users

// fetch('http://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => users.map(user => user.username))
//   .then(usernames => console.log(usernames))

// async generators example get users

// co(function* () {
//   const getUsers = 'http://jsonplaceholder.typicode.com/users'
//   const response = yield fetch(getUsersUri)
//   const users = yield response.json()
//   const usernames = users.map(user => user.username)
//   console.log(usernames)
// })

// async generators example get users, photos, and posts

// co(function* () {
//   let getData = yield {
//     getUsers: fetch('http://jsonplaceholder.typicode.com/users'),
//     getPhotos: fetch('http://jsonplaceholder.typicode.com/photos'),
//     getPosts: fetch('http://jsonplaceholder.typicode.com/posts')
//   }

//   let getDataTypes = yield {
//     users: getData.getUsers.json()
//       .then(users => users.map(user => user.username)),
//     photos: getData.getPhotos.json()
//       .then(photos => photos.map(photo => photo.url)),
//     posts: getData.getPosts.json()
//       .then(posts => posts.map(post => post.title))
//   }

//   console.log(getDataTypes)
// })


// promise version

// get users
let getUsers = 'http://jsonplaceholder.typicode.com/users'
let getPhotos = 'http://jsonplaceholder.typicode.com/photos'
let getPosts = 'http://jsonplaceholder.typicode.com/posts'

fetchData = [fetch(getUsers), fetch(getPhotos), fetch(getPosts)]

fetch(getUsers)
  .then(response => response.json())
  .then(users => users.map(user => user.username))
  .then(usernames => console.log(usernames))

// get photos
fetch(getPhotos)
  .then(response => response.json())
  .then(photos => photos.map(photo => photo.url))
  .then(photoUrls => console.log(photoUrls))

// get posts
fetch(getPosts)
  .then(response => response.json())
  .then(posts => posts.map(post => post.title))
  .then(postTitles => console.log(postTitles))
