import * as React from "react"
import { graphql } from "gatsby"

export default function CardsList({ data }) {
  const pages = data.allSitePage.nodes

  return (
    <div>
      <h1>All pages</h1>
      <ul>
        {pages.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.path}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allSitePage(sort: {path: ASC}) {
      nodes {
        id
        path
      }
    }
  }
`


