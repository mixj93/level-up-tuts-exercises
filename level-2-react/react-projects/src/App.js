import React from 'react'
// import { Transition } from 'react-spring/renderprops'
import logo from './logo.svg'
import { Toggle } from 'utilities'
import { Modal } from 'elements'
// import User from './User'
import UserProvider from './UserProvider'
import './App.css'
import Drag from './Drag'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
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

        <Drag />

        {/* <User /> */}

        {/* <section>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Show / Hide</button>
                <Transition
                  items={on}
                  unique
                  from={{ opacity: 0, bg: '#524763' }}
                  enter={{ opacity: 1, bg: '#82d8d8' }}
                  leave={{ opacity: 0, bg: '#524763' }}
                >
                  {on => on && Header}
                </Transition>
              </>
            )}
          </Toggle>
        </section> */}
      </div>
    </UserProvider>
  )
}

// const Header = styles => (
//   <Card style={{ opacity: styles.opacity, backgroundColor: styles.bg }}>
//     <h1>Hello</h1>
//   </Card>
// )

export default App
