# KeyboardBacklight

a driver to manipulate backlight of keyboard. (for MacBook)

## Usage

```html
<button id=btn>connect</button>
<script type="module">
import { KeyboardBacklight } from "./KeyboardBacklight.js";

const kb = await KeyboardBacklight.create();

btn.addEventListener("click", async () => {
  if (await kb.connect()) {
    let b = true;
    setInterval(() => kb.backlight(b = !b), 500);
  }
});
</script>
```
