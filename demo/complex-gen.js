// generator: get users, photos, and posts
let fetch = require('node-fetch');
let co = require('co');

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

  console.log(
  'USERNAMES: ', getDataTypes.users,
  'PHOTOS: ', getDataTypes.photos,
  'POSTS: ', getDataTypes.posts
  )
})

// use case that we are familiar with

function makeFavorites() {
  const ashi = User.create({name: 'ashi'})
      , apple = Thing.create({name: 'apple'})
      , banana = Thing.create({name: 'banana'})

  return Promise.all([ashi, apple, banana])
    .then(([ashi, apple, banana]) => {
      return Promise.all([
        ashi.addFavorite(apple),
        ashi.addFavorite(banana)
      ])
    })
}

function *makeFavs() {
  const ashi = yield User.create({name: 'ashi'})
      , apple = Thing.create({name: 'apple'})
      , banana = Thing.create({name: 'banana'})

  ashi.addFavorite(yield apple)
  ashi.addFavorite(yield banana)
}

// Simple gen

function *firstGen() {
  console.log(yield Promise.resolve('hello'))
  console.log(yield 2)
  console.log(yield 3)
}

function run(gen) {
  const task = gen()

  function step(task, value) {
    const {value, done} = task.next(value)
    if (!done)
      Promise.resolve(value)
        .then(value => step(task, value))
  }

  step(task)
}



module.exports = firstGen

// function *countdown(n=10) {

// }