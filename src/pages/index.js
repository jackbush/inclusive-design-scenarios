import React, {useState, useEffect} from "react"
import Layout from '../components/layout'
import {scenarios} from '../content'


export default function HomePage() {
  const [scenario, setScenario] = useState(false);
  
  const setRandomScenario = () => {
    setScenario(scenarios[Math.floor(Math.random() * scenarios.length)])
  }

  // grab a random one on load
  useEffect(() => {
    setRandomScenario();
  }, []);

  return (
    <Layout>
      <h1>Inclusive design scenarios</h1>
      <p>{scenario}</p>
      <button onClick={setRandomScenario}>I need more</button>
    </Layout>
  )
}
