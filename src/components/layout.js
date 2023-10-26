import * as React from "react";
import { Link } from "gatsby";

const fontsWrapper = {
  fontFamily: "Inter"
}

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
  marginTop: 100,
}

export default function Layout({ children }) {
  return (
    <div style={fontsWrapper}>
      <nav style={navStyles}>
        <ul style={navItemsStyles}>
          <li style={navItemStyles}>
            <Link
              to="/"
            >Home</Link>
          </li>
          <li style={navItemStyles}><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main style={containerStyles}>{children}</main>
    </div>
  );
}

