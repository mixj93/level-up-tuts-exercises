import React from 'react'
import logo from './logo.svg'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ReducerButton } from './components/ReducerButton'
import { GlobalProvider } from './components/GlobalState'
import BigC from './components/BigC'

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header title="Hi" />

        <BigC title="Hola" />

        <Button
          onClick={e => {
            e.preventDefault()
            return 'hi'
          }}
        >
          Hello
        </Button>

        <Input />

        <ReducerButton />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalProvider>
  )
}

export default App
