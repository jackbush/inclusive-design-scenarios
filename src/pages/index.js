import * as React from "react"
import { graphql } from "gatsby"

export default function HomePage({ data }) {
  const cards = data.allSitePage.nodes

  return (
    <div>
      <h1>All Cards</h1>
      <ul>
        {cards.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.path}</a>
          </li>
        ))}
      </ul>
    </div>
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


