# Inclusive design scenarios

[More information about this tool.](https://www.theuxtoolbox.com/inclusive-design-scenarios/about/)

## Contributing

We want this to be as easy as possible, with everybody welcome to get involved. This is the sort of project which will especially benefit from a breadth of lived experience.

### Non-technical contributions

Trying to make creative use of the [Issues Tracker](https://github.com/theuxtoolbox/inclusive-design-scenarios/issues) so people can contribute content improvements, ideas, feedback and bug reports, and get involved in discussion, without writing code or running anything locally. If you have a (free) GitHub account, you can create and post here.

### Technical contributions

Anybody is welcome to [submit a pull request (PR)](https://github.com/theuxtoolbox/inclusive-design-scenarios/pulls). Just ask that any PR references an issue and includes a clear description of what it is.

## Running locally

It's a simple [Gatsby Quick Start app](https://www.gatsbyjs.com/docs/quick-start/), uses the [Gatsby CLI tools](https://www.gatsbyjs.com/docs/reference/gatsby-cli)

`npm run develop` or `npm start`
Proxy for `gatsby develop`, builds and serves with some fancy stuff on http://localhost:8000/

`npm run clean`
Sometimes it gets all gunked up and this (generally) makes it nice again.

## Accessibility standards

It's intended to reach the WCAG 2.2 AAA standard. If you spot anything falling short, please report and/or submit a fix.

## Known shonk

The big one is scenarios. They're an array of strings, permalinked by index position as a URL parameter. This means:

1. Deleting a scenario would break every subsequently indexed permalink
1. Scenarios can only be plain text with no formatting
1. There are no test and a really long scenario on a really small screen might break the layout

If you feel like addressing any of these, please go for it.
