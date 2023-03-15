import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'

export default function CardTemplate({
  data,
}) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <Link to="/">Back</Link>
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`