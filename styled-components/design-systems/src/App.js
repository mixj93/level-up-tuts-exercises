import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Card, Button } from './elements'

const theme = {
  colors: {
    primary: '#e54b4b',
    secondary: '#dbde61'
  }
}

const theme2 = {
  colors: {
    primary: '#524763',
    secondary: '#82d8d8'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <GlobalStyle />
        <main
          css={`
            background-color: pink;
            h2 {
              font-size: 3rem;
            }
          `}
        >
          <Button>Say Hello</Button>
          <Button modifiers="cancel">Say Hello</Button>
          <ThemeProvider theme={theme2}>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button as="a">Say Hello</Card.Button>
              <Card.Button modifiers="cancel">Say Hello</Card.Button>
            </Card>
          </ThemeProvider>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
