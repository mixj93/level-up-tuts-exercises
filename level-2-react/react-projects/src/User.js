import React, { Component } from 'react'
import { UserContext } from './UserContext'

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            {context.user.id ||
              (context.user.id === 0 && (
                <>
                  <h1>{context.user.name}</h1>
                  <h3>{context.user.email}</h3>
                  <button onClick={context.logout}>Logout</button>
                </>
              ))}
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}
