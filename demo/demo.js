/*eslint-disable*/

// Example:  make asynchronous request to create new instances in database

// database models
const User = require('User')
const Thing = require('Thing')

// with promises only

function makeFavorites() {
  // creating new instances in db return promises
  const ashi = User.create({name: 'ashi'}),
        apple = Thing.create({name: 'apple'}),
        banana = Thing.create({name: 'banana'})

  // resolve all the above promises with a Promise.all which will then return an array of promises of these instances
  return Promise.all([ashi, apple, banana])
    .then(([ashi, apple, banana]) => {
      // another Promise.all to resolve instance methods to add favorites to the user
      return Promise.all([
        ashi.addFavorite(apple),
        ashi.addFavorite(banana)
      ])
    })
}

// with generator

function *makeFavs() {
  const ashi = yield User.create({name: 'ashi'}),
        apple = yield Thing.create({name: 'apple'}),
        banana = yield Thing.create({name: 'banana'})

  ashi.addFavorite(yield apple)
  ashi.addFavorite(yield banana)
}
