import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { scenarios } from "../content";
import { useQueryParamString } from "react-use-query-param-string";

export default function HomePage() {
  const getRandomScenarioIdx = () => {
    return Math.floor(Math.random() * scenarios.length)
  }

  const [scenario, setScenario] = useState(false);
  const [scenarioIdxParam, setScenarioIdxParam, initialized] =
    useQueryParamString("scenario", getRandomScenarioIdx(), false);

  // SHONK this shouldn't be needed
  let i = scenarioIdxParam;

  const loadScenario = (ev) => {
    if (ev) {
      // lazy check if it's been triggered by button
      i = getRandomScenarioIdx()
    } else {
      // has been triggered by useEffect
      i = scenarioIdxParam;
    }
    setScenarioIdxParam(i);
    setScenario(scenarios[i]);
  };

  // load a scenario
  useEffect(() => {
    if(initialized) loadScenario();
  }, [initialized]);

  return (
    <Layout>
      <h1>Inclusive design scenarios</h1>
      <p>{scenario}</p>
      <button onClick={loadScenario}>I need more</button>
    </Layout>
  );
}
