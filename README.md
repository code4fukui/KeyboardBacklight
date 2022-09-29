# KeyboardBacklight

a driver to manipulate backlight of keyboard. (for MacBook)

- [DEMO](https://code4fukui.github.io/KeyboardBacklight/)

## Usage

```html
<button id=btn>connect</button>
<script type="module">
import { KeyboardBacklight } from "https://code4fukui.github.io/KeyboardBacklight/KeyboardBacklight.js";

const kb = await KeyboardBacklight.create();

btn.addEventListener("click", async () => {
  if (await kb.connect()) {
    let b = true;
    setInterval(() => kb.backlight(b = !b), 500);
  }
});
</script>
```
