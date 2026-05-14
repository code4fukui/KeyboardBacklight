# KeyboardBacklight

MacBookのキーボードバックライトを操作するためのドライバです。

## デモ
[ライブデモ](https://code4fukui.github.io/KeyboardBacklight/)

## 機能
- MacBookに接続されたキーボードのバックライトを制御
- バックライトのオン/オフの切り替え
- バックライトの点滅
- タイマーによるバックライトのオン/オフ設定

## 使い方

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

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
