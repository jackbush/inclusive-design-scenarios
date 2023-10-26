import * as React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import "../styles/main.scss";

export default function Layout({ title, lead, children }) {
  return (
    <div class="fonts-wrapper">
      <Helmet
        titleTemplate={`%s • Inclusive Design Scenarios`}
        defaultTitle="Inclusive Design Scenarios"
        // link={[{ rel: "icon", type: "image/png", href: "favicon.ico" }]}
      />
      <nav class="nav">
        <ul class="nav__items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div class="container">
        <header class="header">
          <h1 class="header__title">{title}</h1>
          <p class="header__lead">{lead}</p>
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
