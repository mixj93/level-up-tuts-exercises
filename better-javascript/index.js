document.getElementById('app').innerHTML = `
<h1>Hello Guys!</h1>
<div>
  This is exercises from 
  <a href="https://www.leveluptutorials.com/tutorials/better-javascript" target="_blank" rel="noopener noreferrer">
    Better JavaScript
  </a>
</div>
`

// Function
// Function Declaration vs Function Expression
function sayHi() {
  return console.log('Hi')
}
sayHi()

const sayHi2 = function() {
  return console.log('Hi 2')
}
sayHi2()

const sayHi3 = () => console.log('Hi 3')
sayHi3()

// Destructuring
const [firstName, lastName] = ['James', 'Bond']
console.log(firstName, lastName)

const [firstItem, secondItem, ...rest] = ['apple', 'banana', 'peach', 'coconut', 'kiwi', 'orange']
console.log(firstItem, secondItem, rest)

const person = {
  name: 'Jack',
  age: 42,
  job: 'pirate'
}

const { name, age, job } = person
console.log(name, age, job)

const person2 = {
  name: 'Rose',
  age: 38,
  job: 'writer'
}

const { name: newName, age: newAge, job: newJob } = person2
console.log(newName, newAge, newJob)

const makePerson = (name, age, job) => ({
  name,
  age,
  job
})

console.log(makePerson('John', 40, 'doctor'))

// Named Parameters
const makePerson2 = ({ firstName, lastName, age, job }) => ({
  name: `${firstName} ${lastName}`,
  age,
  job
})

console.log(makePerson2({ firstName: 'John', lastName: 'Watson', age: 40, job: 'doctor' }))

// Naming Things

// Immutable & Pure Functions
// Immutable vs Mutable

// Pure Function
// Always return same thing with same input
const addTwo = x => x + 2

// Benefits of Smaller Functions
