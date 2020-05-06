import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardGrid, Container, Header } from './Elements'
import './App.css'
import Menu from './Menu'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'

function App() {
  return (
    <motion.div animate={{ scale: 1.1 }}>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
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
