# Transmute Markdown
Transmutes markdown for the [Alchemy static site generator](https://github.com/alchemy-js/alchemy).

- Transmutes file content from markdown to HTML
- Transmutes file extension from .md to .html
- Options object accepts all valid `marked` options

## Installation
`npm i @alchemy/transmute-markdown`

## API

This is a wrapper around the `marked` [package](https://www.npmjs.com/package/marked), accepting all valid options as an object.

```javascript
const Alchemy = require('@alchemy-js/alchemy');
const markdown = require('@alchemy-js/transmute-markdown');

Alchemy({
  /* file paths */
}).clean()
  .transmute(markdown({
    /* accepts valid marked options as an object */
  })
  .build()
```

## License
MIT
