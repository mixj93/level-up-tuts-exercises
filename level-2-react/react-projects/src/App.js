import React, { Component } from 'react'
import logo from './logo.svg'
import { Toggle } from 'utilities'
import { Modal } from 'elements'
import { UserContext } from './UserContext'
import User from './User'
import './App.css'

class UserProvider extends Component {
  state = {
    id: 0,
    name: 'Jack',
    email: 'jack@example.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Show Modal</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Hello from the modal</h1>
                </Modal>
              </>
            )}
          </Toggle>

          <User />
        </header>
      </div>
    </UserProvider>
  )
}

export default App
