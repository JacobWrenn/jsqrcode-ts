# jsqrcode-ts

Standalone QR reader for TypeScript, modified from <https://github.com/mebjas/html5-qrcode>.

Modified under the terms of the Apache 2.0 license.

## Example usage

First install with `npm i jsqrcode-ts`.

```
import getReader from "jsqrcode-ts";

const reader = getReader();

const canvasElement = document.getElementById("my-canvas");

try {
  const decoded_string = reader.decode(canvasElement);
} catch {}
```