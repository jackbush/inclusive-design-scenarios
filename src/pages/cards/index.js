import * as React from "react"
import { graphql } from "gatsby"

export default function CardsList({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log(data)
  return (
    <div>
      <h1>All cards</h1>
      <ul>
        {data.allSitePage.nodes.map((item) => (
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
    allSitePage {
      nodes {
        id
        path
        children {
          id
        }
      }
    }
  }
`


