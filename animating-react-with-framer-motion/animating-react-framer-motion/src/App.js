import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation
} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { /* Card, CardGrid, */ Container, Header } from './Elements'
import './App.css'
// import Modal from './Modal'
// import Accordion from './Accordion'
import Menu from './Menu'
import Nav from './Nav'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
// import Squares from './Squares'
// import Slideshow from './Slideshow'

// import blue from './blue.png'
// import purp from './purp.png'
// import black from './black.png'
// import green from './green.png'

function App() {
  // const [value, setValue] = useState(0)
  const [isNavOpen, setNavOpen] = useState(false)
  // const [isToggled, setToggle] = useState(false)
  // const [isCardActive, setCardActive] = useState(true)

  // const x = useMotionValue(0)
  // const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
  const location = useLocation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
        &nbsp;
        <h1>Header</h1>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </AnimatePresence>

        {/* <Slideshow />
        <Squares /> */}

        {/* <button onClick={() => setToggle(true)}>Toggle</button>
        <input
          style={{ opacity: 0 }}
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} alt="example" />
          </Card>
        </Modal>

        <Accordion />

        <CardGrid>
          <Card
            drag
            dragConstraints={{ top: -100, left: -100, bottom: 100, right: 100 }}
            style={{ background: 'var(--purp)' }}
            // whileHover={{ scale: [1.02, 0.8, 1.1] }}
            // whileTap={{ background: 'var(--red)' }}
          >
            <h3>Some card</h3>
            <img src={purp} alt="example" />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
                transition={{
                  opacity: { duration: 0 }
                }}
              >
                <Card
                  onDragEnd={(event, info) => {
                    if (Math.abs(info.point.x) > 200) {
                      setCardActive(false)
                    }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  style={{
                    x,
                    opacity: isCardActive ? opacity : 0,
                    background: 'var(--blue)'
                  }}
                >
                  <h3>Some card</h3>
                  <img
                    src={blue}
                    alt="example"
                    draggable="false"
                    onDragStart={(e) => {
                      e.preventDefault()
                    }}
                  />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} alt="example" />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} alt="example" />
          </Card>
        </CardGrid> */}
      </Container>
    </motion.div>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
export default AppWrapper
