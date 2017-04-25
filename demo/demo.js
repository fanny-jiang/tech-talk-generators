/*eslint-disable*/
// Sequelize use case that we are familiar with
// Example: need to create a multiple rows in database using sequelize

function makeFavorites() {
  const ashi = User.create({name: 'ashi'}),
        apple = Thing.create({name: 'apple'}),
        banana = Thing.create({name: 'banana'})

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
