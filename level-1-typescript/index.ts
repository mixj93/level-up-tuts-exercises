// 3 Basic Types
const isOpen: boolean = true
const username: string = 'Jack'
const height: number = 168
const list: number[] = [1, 2, 3, 4]
enum Job {
  Developer,
  Designer,
  PM
}
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
interface Person {
  name: string
  age: number
  job?: Job // optional
}
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

// 12 Modules In TypeScript

// 13 TSC

// 14 Generics

// 15 Duck Typing & Classes with Interfaces

// 16 TypeScript with WebPack

// 17 Create React App with TypeScript

// 18 Where To Go Next
