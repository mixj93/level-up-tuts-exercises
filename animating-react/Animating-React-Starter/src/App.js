import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import logo from './logo.svg'
import Toggle from './Toggle'
// import Nav from './Nav'
import CheckOut from './CheckOut'
import './App.css'

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  // const navAnimation = useSpring({
  //   transform: isNavOpen
  //     ? `translate3d(0,0,0) scale(1)`
  //     : `translate3d(100%,0,0) scale(0.6)`
  // })

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        {/* <Nav style={navAnimation} /> */}
        <img src={logo} className="logo" alt="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
      </header>
      <main>
        <Toggle />
        <CheckOut isOpen={isNavOpen} />
      </main>
    </animated.div>
  )
}

export default App
