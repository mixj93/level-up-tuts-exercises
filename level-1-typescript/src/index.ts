import Job, { Person } from './interfaces'

// 3 Basic Types
const isOpen: boolean = true
const username: string = 'Jack'
const height: number = 168
const list: number[] = [1, 2, 3, 4]

const job: Job = Job.Developer
const meaningless1: any = 'sdfa'
const meaningless2: any = 254

// 4 TypeScript At Compile Time With Parcel
// tsc
// parcel-plugin-typescript

// 5 Functions In TypeScript
// const sayHello = (word: string): string => {
//   console.log(word)
//   return word
// }
// sayHello('hi')

// 6 Optional, Default & Rest Params
// * ? for optional
// * ...rest for Rest Params
const sayHello = (word: string = 'Hello'): string => {
  console.log(word)
  return word
}
// sayHello('dfasd')

// 7 Implicit Types
// let newName = 'John'
// newName = 'Sherlock' // good
// newName = 8 // wrong

// 8 Union Types
// | for union type
let newName: string | number = 'John'
newName = 'Sherlock' // good
newName = 8 // good
let newName2 = newName
// newName2 = 'Jack' // !!wrong

const makeMargin = (x: number): string => {
  return `margin: ${x}px`
}

// Null Types
// strict non type check

// 9 Interfaces
const sayPerson = ({ name, age, job }: Person) => {
  // console.log(name, age, job)
  return `${name}, ${age}, ${job}`
}
sayPerson({
  name: 'John Watson',
  age: 40
})

// 10 Enums
// Numeric Enums
enum Sport {
  Basketball, // 0
  Football, // 1
  Tennis // 2
}
// console.log(Sport.Tennis)
const makeSport = (sport: Sport) => {
  console.log(sport)
}
// makeSport(-1) // work!
// makeSport(0)
// makeSport(3) // work!

// String Enums
enum Sport2 {
  Basketball = 'BASKETBALL',
  Football = 'FOOTBALL',
  Tennis = 'TENNIS'
}
// console.log(Sport2.Tennis)
const makeSport2 = (sport: Sport2) => {
  console.log(sport)
}
// makeSport2(Sport2.Football) // work!
// makeSport2('FOOTBALL') // not work!

// 11 Classes In TypeScript
class Team {
  teamName: string
  // SAME AS public teamName: string
  // private teamName: string
  // readonly teamName: string

  constructor(teamName: string) {
    this.teamName = teamName
  }
  score() {
    console.log(`Goal for ${this.teamName}`)
  }
}

const lakers = new Team('Lakers')
// console.log(lakers.score())

// 12 Modules In TypeScript
// import { Person } from 'interfaces'

// 13 TSC
// npm install --save-dev typescript
// tsc
// tsconfig.json

// 14 Generics
function outputInput<T>(arg: T): T {
  return arg
}
outputInput('hi')
outputInput(3)

const outputInput2 = <T extends {}>(arg: T): T => arg
outputInput2('hi')
outputInput2(3)

// 15 Duck Typing & Classes with Interfaces
// Duck Typing
class Dancer implements Person {
  name: string
  age: number
  job?: Job
}

let p1: Person = new Dancer()
const fake = {
  name: 'sdf',
  age: 42
}
p1 = fake // can work!

// 16 TypeScript with WebPack
// npm install --save-dev typescript ts-loader
// tsconfig.json

// 17 Create React App with TypeScript
// npx create-react-app project-name
// yarn add typescript @types/node @types/react @types/react-dom @types/jest

// 18 Where To Go Next
// https://github.com/dzharii/awesome-typescript
// http://www.typescriptlang.org/
