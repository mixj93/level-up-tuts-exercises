document.getElementById('app').innerHTML = `
<h1>Hello Guys!</h1>
<div>
  This is exercises from 
  <a href="https://www.leveluptutorials.com/tutorials/better-javascript" target="_blank" rel="noopener noreferrer">
    Better JavaScript
  </a>
</div>
`

// 1 Function
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

// 2 Destructuring
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

// 3 Named Parameters
const makePerson2 = ({ firstName, lastName, age, job }) => ({
  name: `${firstName} ${lastName}`,
  age,
  job
})

console.log(makePerson2({ firstName: 'John', lastName: 'Watson', age: 40, job: 'doctor' }))

// 4 Naming Things

// 5 Immutable & Pure Functions
// Immutable vs Mutable

// Pure Function
// Always return same thing with same input
const addTwo = x => x + 2

// 6 Benefits of Smaller Functions

// 7 JS & The DOM + MDN

// 8 Interacting With The DOM
// https://github.com/nefe/You-Dont-Need-jQuery

// 9 JS & The DOM part 3
const generateColorHex = () => {
  return Math.floor(Math.random() * 256) // Math.random() return >=0 & < 1
}

const generateColor = () => {
  const red = generateColorHex()
  const green = generateColorHex()
  const blue = generateColorHex()

  return `rgb(${red}, ${green}, ${blue})`
}

const applyBodyBackground = color => {
  document.body.style.backgroundColor = color
}

const addRandomColorToBG = () => {
  applyBodyBackground(generateColor())
}

addRandomColorToBG()

// 10 Events addEventListener vs Event Methods
const newColorBtn = document.getElementById('new-color')
// onclick: to attach 1 event
// newColorBtn.onclick = () => addRandomColorToBG()
// newColorBtn.onclick = () => console.log('hi') // 会覆盖

// addEventListener: attach multiple events
newColorBtn.addEventListener('click', addRandomColorToBG)
newColorBtn.addEventListener('click', () => console.log('hi'))

// 11 setTimeout & setInterval
// setTimeout(() => console.log('here'), 1000)
// const interval = setInterval(addRandomColorToBG, 2000)

// 12 What are promises
const chargeCard = card =>
  new Promise((resolve, reject) => {
    if (card) {
      resolve('Charge Succeed!')
    } else {
      reject('Charge Failed!')
    }
  })

// chargeCard('saf')
//   .then(data => console.log(`Data: ${data}`))
//   .catch(error => console.log(`Error: ${error}`))

// 13 Async Await
const getChargeCard = async card => {
  try {
    const data = await chargeCard(card)
    // console.log(`Data: ${data}`)
  } catch (error) {
    // console.log(`Error: ${error}`)
  }
}

getChargeCard()

// 14 JS Array Methods & map
const simpleShoppingCart = [10, 20, 25, 5, 10]

const shoppingCart = [
  { sku: '1234', price: 10, type: 't-shirt' },
  { sku: '1233334', price: 16, type: 'tutorial' },
  { sku: '12111134', price: 30, type: 'tutorial' }
]

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

// Array.shift() mutating method

// .map()
// const discountCart = simpleShoppingCart.map(item => item * 0.75)
const discountCart = shoppingCart.map(item => {
  return {
    ...item,
    discountPrice: item.price * 0.75
  }
})
console.log(discountCart)

// 15 Filter
const filteredCart = shoppingCart.filter(({ price }) => price < 20)
console.log(filteredCart)

// 16 Reduce
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const total = simpleShoppingCart.reduce((acc, cur, idx, src) => {
  // Accumulator (acc) (累计器)
  // Current Value (cur) (当前值)
  // Current Index (idx) (当前索引)
  // Source Array (src) (源数组)
  console.log(`Reducing: ${acc}, ${cur}, ${idx}, ${src}`)
  return acc + cur
})
console.log(total)

// 17 Other Array Methods
// .every() check if every items in array pass the test
// .some() check if an item in array pass the test
// .forEach()
// . reverse() is mutating, use [...array].reverse()
// .slice()

// 18 This
// console.log(this) // window

const test = {
  name: 'test',
  testFunc: function() {
    this.name = 'Scott'
    console.log(this)
  },
  testFuncTwo: () => {
    console.log(this, 'arrow func')
  },
  testFuncThree: function() {
    ;['hi', 'hello'].map(() => {
      console.log(this) // this 绑定了上一个 context
    })
  },
  testFuncFour: function() {
    ;['hi', 'hello'].map(logGreeting.bind(this))
  }
}

const logGreeting = function() {
  console.log(this)
}

function team() {
  console.log(this) // window
}

const button = document.getElementById('new-color')
button.addEventListener('click', function() {
  console.log(this)
})

// test.testFunc()
// test.testFuncTwo()
// test.testFuncThree()
// test.testFuncFour()
// team()
// var test = new team();

// 19 More This

// 20 Classes
class Team {
  // constructor runs when class creates
  constructor(name) {
    this.name = name
  }
}

class BasketballTeam extends Team {
  constructor(name) {
    super(name)
    this.type = 'basketball'
  }

  score() {
    console.log('score!!!')
  }
}

class FootballTeam extends Team {
  constructor(name) {
    super(name)
    this.type = 'football'
  }

  gaol() {
    console.log('goal!!!')
  }
}

const teamLakers = new BasketballTeam('Lakers')
const teamPSG = new FootballTeam('PSG')
// console.log(teamLakers)
teamLakers.score()
teamPSG.gaol()

// 21 Fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error))

// 22 Async IIFE
;(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    console.log(json)
  } catch (error) {
    console.error(error)
  }
})()

// 23 Modules, Import & Export
// export default
// export {}

// 24 Where To Go From Here
// MDN
// YDKJS
// Eloquent JavaScript
// https://github.com/nefe/You-Dont-Need-jQuery
