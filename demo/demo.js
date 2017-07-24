/*eslint-disable*/

// Example:  make asynchronous requests to create new instances in database
const co = require('co')
const User = require('../db/User')
const Hobby = require('../db/Hobby')

/* <------------ with promises only -----------------> */

function makeHobbies() {
  // creating new instances in db return promises
  const jessDay = User.create({firstName: 'Jess', lastName: 'Day'}),
        crafting = Hobby.create({name: 'crafting'}),
        singing = Hobby.create({name: 'singing'})

  return Promise.all([jessDay, crafting, singing])
    .then(([jessDay, crafting, singing]) => {
      return Promise.all([
        jessDay.addHobby(crafting),
        jessDay.addHobby(singing)
      ])
    })
}

/* <--------------- with generator ------------------> */

co(function *makeHobbs() {
  const jessDay = yield User.create({firstName: 'Jess', lastName: 'Day'}),
        crafting = yield Hobby.create({name: 'crafting'}),
        singing = yield Hobby.create({name: 'singing'})

  jessDay.addHobby(yield crafting)
  jessDay.addHobby(yield singing)
})


