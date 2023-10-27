import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout
      title="About"
      lead="Why this tool exists, what to do with it, how to contribute, and acknowledgements."
    >
      <Helmet title="About" />
      {/*<h2 className="sub-heading">Why use it</h2>*/}
      <p>
        We're never more then temporarily able-bodied. At any given moment we
        could be juggling tasks that take an eye, ear or finger away. We could
        be exhausted, sick or stressed. Our need for an accessible web might
        last a minute, a day, a month or the rest of our lives.
        When it’s our turn we'll want the web to work, so let's do better.
      </p>
      <h2 className="sub-heading">What to do with it</h2>
      <p>
        It's not an exhaustive list of human needs, or a collection of personas.
        Have a click through to read, come back when you're stuck or think
        you're finished and want to test your product through the experience of
        others. Maybe try using it in your next design crit. Each scenario has a
        unique URL, so share if you think it would help someone.
      </p>
      
      <h2 className="sub-heading">How to contribute</h2>
      <p>
        We're open to contributions! Head to our{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/theuxtoolbox/inclusive-design-scenarios"
        >
          Github
        </a>{" "}
        to get involved.
      </p>
      <ul>
        <li>Contribute a scenario</li>
        <li>Give feedback</li>
        <li>Report/fix a bug</li>
        <li>Improve the look</li>
        <li>Share an idea</li>
      </ul>
      <h2 className="sub-heading">Acknowledgements</h2>
      <ul>
        <li>
          Initial scenarios adapted from{" "}
          <cite>An Alphabet of Accessibility Issues</cite> by Anne Gibson
        </li>
        <li>
          Format inspired by{" "}
          <a href="https://gfda.co/" target="_blank" rel="noreferrer">
            GFDA
          </a>
        </li>
      </ul>
    </Layout>
  );
}
