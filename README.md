Geekcamp.SG website
===

> By Geeks. For Geeks.

**Web site: http://geekcamp.sg/**

Running local setup
--

This website uses [Hugo](https://gohugo.io/) static site generator.

1. [Install `hugo`](https://gohugo.io/getting-started/installing/).
2. `hugo serve` to start the local server.

The CSS is preprocessed via [Sass](http://sass-lang.com/) and post-processed via [Autoprefixer](https://github.com/postcss/autoprefixer).

1. `npm install` or `yarn` to install the dependencies
2. `npm run build-css` or `yarn build-css` to build the CSS, which runs these commands:
  - `sass` - preprocess the SASS files, with watch mode.
  - `prefix-css` - autoprefix the CSS.

To make things easier, both commands are combined into `npm run dev` or `yarn dev`;

Deploy to Github
--

1. Run `hugo` to create a `public/` directory.
2. Switch branch from `source` to `master` to `commit` the necessary assets and `push` them.
