# cue-are

A miniscule, isomorphic, functional wrapper around the the JavaScript implementation of [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), plus a few renderers for displaying QR codes in various contexts. Node.js or browser.

#### Installation

```npm i cue-are```

#### Usage

The primary export is a single function which returns a two dimensional array of 1's and 0's. This simple representation can be used as the input for any of the renderers.

See `test/index.html` for examples. Clone it, install dependencies and run `npm run test-browser` to see it in action.

```js
var qr = require("cue-are");
var rows = qr("gibberish");

/* rows is....
[ [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1 ],
  [ 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1 ],
  [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ],
  [ 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ],
  [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1 ],
  [ 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1 ],
  [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0 ],
  [ 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1 ],
  [ 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1 ],
  [ 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 ],
  [ 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1 ],
  [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0 ],
  [ 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0 ],
  [ 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0 ],
  [ 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1 ],
  [ 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1 ],
  [ 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0 ] ]
*/
```

#### Renderers

`cue-are` comes with five renderers into which you can can plug the output of the main generation function. While each of these packages could be an `npm` module of it's own, they are tailored to work on the output structure of the generator. It does seem to me that a two-dimensional array of 1's and 0's is the most ergonomic way to represent QR code data anyway, so anything that produces output of that shape will work with any of the renderers. Renderer's generally provide some way to customize the output. For instance, the HTML string renderer allows options to customize the CSS class names of "white" and "black" squares.


##### HTML

```js
var qr = require("cue-are");
var htmlRenderer = require("cue-are/renderers/html");
var htmlStr = htmlRenderer(qr("gibberish"));

// then something like `document.body.innerHTML = htmlStr`
```

##### DOM

```js
var qr = require("cue-are");
var domRenderer = require("cue-are/renderers/dom");
var el = domRenderer(qr("gibberish"));

// `el` is the root DOM node of the generated tree
// then something like `document.body.appendChild(el)`
```

##### Canvas

```js
var qr = require("cue-are");
var canvasRenderer = require("cue-are/renderers/canvas");
var canvas = canvasRenderer(qr("gibberish"));

// `canvas` is a Canvas DOM node
// then something like `document.body.appendChild(canvas)`
```

##### React
```jsx
import qr from "cue-are";
import QrComponent from "cue-are/renderers/react";

<QrComponent rows={qr("gibberish")}/>
```

##### Terminal
```js
// returns a string that displays a QR code when printed in the console
var qr = require("cue-are");
var terminalRenderer = require("cue-are/renderers/terminal");
console.log(terminalRenderer(qr("gibberish")))
```
