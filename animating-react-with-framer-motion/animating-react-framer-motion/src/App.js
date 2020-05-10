import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardGrid, Container, Header } from './Elements'
import './App.css'
import Modal from './Modal'
import Accordion from './Accordion'
import Menu from './Menu'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <button onClick={() => setToggle(true)}>Toggle</button>
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
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} alt="example" />
          </Card>
          <Card style={{ background: 'var(--blue)' }}>
            <h3>Some card</h3>
            <img src={blue} alt="example" />
          </Card>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} alt="example" />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} alt="example" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  )
}

export default App
