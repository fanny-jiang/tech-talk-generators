const Promise = require('bluebird')

function *firstGen() {
  console.log(yield Promise.resolve('hello'))
  console.log(yield {hello: Promise.resolve(1), world: Promise.resolve(2)})
  console.log(yield 3)
}

function run(gen) {
  const task = gen()

  function step(task, resolved) {
    const {value, done} = task.next(resolved)
    if (!done) {
        Promise.resolve(value)
          .then(value => step(task, value))
    }
  }

  step(task)
}

run(firstGen)
