import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  img {
    margin: 0;
    height: 50px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
