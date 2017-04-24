// promises: get users, photos, and posts

let fetch = require('node-fetch');

let getUsers = 'http://jsonplaceholder.typicode.com/users'
let getPhotos = 'http://jsonplaceholder.typicode.com/photos'
let getPosts = 'http://jsonplaceholder.typicode.com/posts'

fetch(getUsers)
  .then(response => response.json())
  .then(users => users.map(user => user.username))
  .then(usernames => console.log('USERNAMES: ', usernames))

fetch(getPhotos)
  .then(response => response.json())
  .then(photos => photos.map(photo => photo.url))
  .then(photoUrls => console.log('PHOTOS: ', photoUrls))

fetch(getPosts)
  .then(response => response.json())
  .then(posts => posts.map(post => post.title))
  .then(postTitles => console.log('POST TITLES: ', postTitles))
