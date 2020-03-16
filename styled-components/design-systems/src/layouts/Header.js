import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { purple, elevation, fixed } from '../utilities'

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
  </header>
)

export default styled(Header)`
  ${fixed()};
  width: 100%;
  background-color: ${purple};
  padding: 10px 5%;
  ${elevation[1]};

  .logo {
    width: 60px;
  }
`
