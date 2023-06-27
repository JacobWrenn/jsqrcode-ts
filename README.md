# jsqrcode-ts

Standalone QR reader for TypeScript, modified from <https://github.com/mebjas/html5-qrcode>.

Modified under the terms of the Apache 2.0 license.

## Example usage

First install with `npm i jsqrcode-ts`.

```
import reader from "jsqrcode-ts";

const canvasElement = document.getElementById("my-canvas");

reader.scan(canvasElement).then(decoded_text => {
  // do what you want here
});
```