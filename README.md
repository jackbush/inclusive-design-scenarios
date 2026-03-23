# About

A tool for stress-testing inclusivity of designs against commonly overlooked scenarios. [Read more about it here](https://www.theuxtoolbox.com/inclusive-design-scenarios/about/).

# Contributing

This is the sort of project which will especially benefit from a breadth of lived experience. Want this to be as easy as possible, with everybody welcome to get involved.

### Non-technical contributions

Trying to make creative use of the [Issues Tracker](https://github.com/theuxtoolbox/inclusive-design-scenarios/issues) so people can contribute content improvements, ideas, feedback and bug reports, and get involved in discussion, without writing code or running anything locally. If you have a (free) GitHub account, you can create and post here.

### Technical contributions

Anybody is welcome to [submit a pull request (PR)](https://github.com/theuxtoolbox/inclusive-design-scenarios/pulls). Just ask that any PR references an issue and includes a clear description of what it is.

# Accessibility

It's intended to reach the [WCAG 2.2 AAA standard](https://www.w3.org/TR/WCAG22/). If you spot anything falling short, please report and/or submit a fix.

# Running locally

Built with [Astro](https://astro.build/). No database or CMS — scenarios are Markdown files in `src/content/scenarios/`.

```
npm start     # dev server with hot reload
npm run build # production build → dist/
npm run deploy # build and publish to GitHub Pages
```

To add a scenario, create a new `.md` file in `src/content/scenarios/` with a descriptive filename (used as the URL slug) and a `title` in the frontmatter.
