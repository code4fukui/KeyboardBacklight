# KeyboardBacklight

MacBook のキーボードバックライトを操作するためのドライバーです。

## デモ
[デモページ](https://code4fukui.github.io/KeyboardBacklight/)では、ボタンをクリックするとキーボードのバックライトが点滅します。

## 機能
- キーボードのバックライトのON/OFFを切り替える
- バックライトを点滅させる
- タイマー機能でバックライトを自動的にオフにする

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
MIT License