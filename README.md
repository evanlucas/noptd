# noptd

[![Build Status](https://travis-ci.org/evanlucas/noptd.svg)](https://travis-ci.org/evanlucas/noptd)

nopt with default values

## Install

```bash
$ npm install noptd
```

## Example

```js
// test.js
var nopt = require('noptd')
var shortHand = { help: Boolean, name: String }
var defaults = { name: 'evan' }
var parsed = nopt(shortHand, null)(defaults)
console.log(parsed.name)
```

Then run with node

```bash
$ node test.js
// => 'evan'
```

Or try passing in a name

```bash
$ node test --name test
// => 'test'
```


## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
