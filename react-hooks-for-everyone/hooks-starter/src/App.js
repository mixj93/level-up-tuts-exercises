import React, { useRef, useState, useEffect, createContext } from 'react'
import { useTitleInput } from './hooks/useTitleInput'
import Toggle from './Toggle'
import Counter from './Counter'

export const UserContext = createContext()

const App = () => {
  const [name, setName] = useTitleInput('')
  const ref = useRef()
  const [dishes, setDishes] = useState([])

  const fetchDishes = async () => {
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    const data = await res.json()
    setDishes(data)
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  // const reverseWord = word => {
  //   console.log('Called')
  //   return word
  //     .split('')
  //     .reverse()
  //     .join('')
  // }

  // const title = 'Level Up Dishes'
  // const titleReversed = useMemo(() => reverseWord(title), [title])

  return (
    <UserContext.Provider value={{ user: false }}>
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => console.log(ref.current.className)}>Level Up Dishes</h1>
        <Toggle />
        <Counter />
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <input type="text" onChange={e => setName(e.target.value)} value={name} />
          <button>Submit</button>
        </form>

        {dishes.map(dish => (
          <article key={dish.name} className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span key={ingredient}>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </UserContext.Provider>
  )
}

export default App
