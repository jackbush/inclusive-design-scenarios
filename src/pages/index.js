import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import { scenarios } from "../content";
import { useQueryParamString } from "react-use-query-param-string";

export default function HomePage() {
  const getRandomScenarioIdx = () => {
    return Math.floor(Math.random() * scenarios.length);
  };

  const [scenario, setScenario] = useState(false);

  // initialise scenarioIdxParam as a random value if not present
  const [scenarioIdxParam, setScenarioIdxParam, initialized] =
    useQueryParamString("scenario", getRandomScenarioIdx(), false);

  const randomizeScenario = (ev) => {
    setScenarioIdxParam(getRandomScenarioIdx());
    setScenario(scenarios[scenarioIdxParam]);
  };

  useEffect(() => {
    if (initialized) {
      // looks wrong but puts the param in bar
      setScenarioIdxParam(scenarioIdxParam);
      setScenario(scenarios[scenarioIdxParam]);
    }
  }, [initialized, setScenarioIdxParam, scenarioIdxParam]);

  return (
    <Layout
      title="Inclusive scenarios"
      lead="A tool for stress-testing inclusivity of designs against commonly overlooked scenarios."
    >
      <Helmet title="Home" />
      <p className="scenario">{scenario}</p>
      <div className="cta__wrapper">
        <button className="cta" onClick={randomizeScenario}>
          Give me another one
        </button>
      </div>
    </Layout>
  );
}
