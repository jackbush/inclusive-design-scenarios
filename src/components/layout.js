import * as React from "react";
import { Link } from "gatsby";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/*<li><Link to="#">Random card</Link></li>*/}
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}

