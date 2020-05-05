import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

const postLayout = ({ data, location }) => {
  const { markdownRemark } = data
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
