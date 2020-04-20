import React from 'react'
import { Card, CardGrid, Container, Header } from './Elements'
import Menu from './Menu'
import Toggle from './components/Toggle'
import Inc from './components/Inc'
import Mount from './components/Mount'
import Hover from './components/Hover'
import { PageWrapper } from './state'
import Nav from './components/Nav'
import Cookie from './components/Cookie'

import './App.css'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'

function App() {
  return (
    <PageWrapper>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>

        <Nav />

        <Container>
          <h2>Super Cool</h2>

          <Toggle />
          <Inc />
          <Mount />
          <Cookie />
          <Hover />

          <CardGrid>
            <Card style={{ background: 'var(--purp)' }}>
              <h3>Some card</h3>
              <img src={purp} alt="Some card" />
            </Card>
            <Card style={{ background: 'var(--blue)' }}>
              <h3>Some card</h3>
              <img src={blue} alt="Some card" />
            </Card>
            <Card style={{ background: 'var(--black)' }}>
              <h3>Some card</h3>
              <img src={black} alt="Some card" />
            </Card>
            <Card style={{ background: 'var(--green)' }}>
              <h3>Some card</h3>
              <img src={green} alt="Some card" />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </PageWrapper>
  )
}

export default App
