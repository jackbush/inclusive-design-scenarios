import * as React from "react"
import Layout from '../components/layout'
import {cards} from '../content'

let cardIdx
const setRandomCardIndex = () => {
  cardIdx = Math.floor(Math.random() * cards.length)
  console.log(cardIdx)
}

// if url contains a permalink index, set it here
// SHONK
// else grab a random one
setRandomCardIndex()


export default function HomePage() {
  return (
    <Layout>
      <h1>Inclusive design scenarios</h1>
      <p>{cards[cardIdx]}</p>
      {/*<button onClick={setRandomCardIndex}>I need more</button>*/}
    </Layout>
  )
}
