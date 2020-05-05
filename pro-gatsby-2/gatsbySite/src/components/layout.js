import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import Img from 'gatsby-image'
import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const FooterWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const props = useSpring({
    from: { height: location.pathname === '/' ? '150px' : '300px' },
    to: { height: location.pathname === '/' ? '300px' : '150px' }
  })

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <animated.div style={{ ...props, overflow: 'hidden' }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      <div>
        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
        <FooterWrapper>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterWrapper>
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: {}
}

export default Layout
