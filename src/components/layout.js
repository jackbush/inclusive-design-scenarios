import * as React from "react";
import { Link } from "gatsby";

const navStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw'
}

const navItemsStyles = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  textAlign: 'right'
}

const navItemStyles = {
  display: 'inline-block',
  padding: 12
}

const containerStyles = {
  width: '90vw',
  maxWidth: 720,
  margin: "auto",
  marginTop: 100
}

export default function Layout({ children }) {
  return (
    <>
      <nav style={navStyles}>
        <ul style={navItemsStyles}>
          <li>
            <Link
              to="/"
              style={navItemStyles}
            >Home</Link>
          </li>
          {/*<li><Link to="#">Random card</Link></li>*/}
        </ul>
      </nav>
      <main style={containerStyles}>{children}</main>
    </>
  );
}

