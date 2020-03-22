import React from 'react'
import logo from './logo.svg'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { Input } from './components/Input'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="Hi" />
      <Button
        onClick={e => {
          e.preventDefault()
          return 'hi'
        }}
      >
        Hello0
      </Button>

      <Input />
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
  )
}

export default App
