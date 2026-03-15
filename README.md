# KeyboardBacklight

A driver to manipulate the backlight of a keyboard, specifically for MacBooks.

## Demo
[Live demo](https://code4fukui.github.io/KeyboardBacklight/)

## Features
- Control the backlight of a keyboard connected to a MacBook
- Toggle the backlight on/off
- Blink the backlight
- Set a timer to turn the backlight on/off

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

## License
MIT