import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default function HomePage({ data }) {
  const cards = data.allSitePage.nodes

  return (
    <Layout>
      <h1>All Cards</h1>
      <ul>
        {cards.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.path}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllCardPages {
    allSitePage(filter: {path: {regex: "/cards/"}}) {
      nodes {
        id
        path
      }
    }
  }
`


