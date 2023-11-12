# Inclusive design scenarios

[More information about this tool.](https://www.theuxtoolbox.com/inclusive-design-scenarios/about/)

## Contributing

We want this to be as easy as possible, with everybody welcome to get involved. This is the sort of project which will especially benefit from a breadth of lived experience.

#### Non-technical contributions

Trying to make creative use of the [Issues Tracker](https://github.com/theuxtoolbox/inclusive-design-scenarios/issues) so people can contribute content improvements, ideas, feedback and bug reports, and get involved in discussion, without writing code or running anything locally. If you have a (free) GitHub account, you can create and post here.

#### Technical contributions

Anybody is welcome to [submit a pull request (PR)](https://github.com/theuxtoolbox/inclusive-design-scenarios/pulls). Just ask that any PR references an issue and includes a clear description of what it is.

## Running locally

It's a simple [Gatsby Quick Start app](https://www.gatsbyjs.com/docs/quick-start/), uses the [Gatsby CLI tools](https://www.gatsbyjs.com/docs/reference/gatsby-cli).

`npm start` is a proxy for `npm run develop`, builds and serves with some fancy stuff.

## Accessibility standards

It's intended to reach the WCAG 2.2 AAA standard. If you spot anything falling short, please report and/or submit a fix.

## Known shonk

The big one is scenarios. They're an array of strings, permalinked by index position as a URL parameter. This means:

1. [Deleting a scenario would break every subsequently indexed permalink](https://github.com/theuxtoolbox/inclusive-design-scenarios/issues/23)
1. [Scenarios can only be plain text with no formatting](https://github.com/theuxtoolbox/inclusive-design-scenarios/issues/24)
1. [There's no content model, and it's no reflected in any tests](https://github.com/theuxtoolbox/inclusive-design-scenarios/issues/25)

If you feel like addressing any of these, please go for it.
