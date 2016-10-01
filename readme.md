# angular-percent [![Build Status](https://travis-ci.org/bendrucker/angular-percent.svg?branch=master)](https://travis-ci.org/bendrucker/angular-percent)

> Angular filter for converting decimal proportions to percent strings


## Install

```
$ npm install --save angular-percent
```


## Usage

```js
angular.module('myApp', [
  require('angular-percent')
])
```

```html
{{0.1 | percent}}
<!-- 10% -->
```

```html
{{0.3141579 | percent:2}}
<!-- 3.14% -->
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
