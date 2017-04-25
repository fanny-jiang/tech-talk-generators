// declare generator with function* keyword

function *firstGen() {
  console.log('first', yield 1)
  console.log('second', yield 2)
  console.log('third', yield 3)
}

























// yield promise
// Promise.resolve('hello')


// function run(gen) {
//   const task = gen()

//   function step(task, value) {
//     const {value, done} = task.next(value)
//     if (!done)
//       Promise.resolve(value)
//         .then(value => step(task, value))
//   }

//   step(task)
// }




module.exports = firstGen

// function *countdown(n=10) {

// }

// /*eslint-disable*/
// Sequelize use case that we are familiar with
// Example: need to create a multiple rows in database using sequelize

// function makeFavorites() {
//   const ashi = User.create({name: 'ashi'}),
//         apple = Thing.create({name: 'apple'}),
//         banana = Thing.create({name: 'banana'})

//   return Promise.all([ashi, apple, banana])
//     .then(([ashi, apple, banana]) => {
//       return Promise.all([
//         ashi.addFavorite(apple),
//         ashi.addFavorite(banana)
//       ])
//     })
// }

// function *makeFavs() {
//   const ashi = yield User.create({name: 'ashi'})
//       , apple = Thing.create({name: 'apple'})
//       , banana = Thing.create({name: 'banana'})

//   ashi.addFavorite(yield apple)
//   ashi.addFavorite(yield banana)
// }

// Simple gen