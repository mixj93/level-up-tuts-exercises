enum Job {
  Developer,
  Designer,
  PM
}

export interface Person {
  name: string
  age: number
  job?: Job // optional
}

export default Job
