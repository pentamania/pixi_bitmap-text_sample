// 参考： https://github.com/pixijs/pixi.js/issues/5199

import bitmapFnt from './assets/aldrich-bitmap32x32.fnt';
import bitmapFontImage from './assets/aldrich-bitmap32x32_0.png';
// import * as PIXI from 'pixi.js'
import { Application, BitmapText, Texture } from 'pixi.js'
// import { BitmapFont } from '@pixi/text-bitmap' // exportされてない...

// 手動でbitmapFontを登録
const bitmapFontTexture = Texture.from(bitmapFontImage)
const fntXmlDoc = new DOMParser().parseFromString(bitmapFnt, "application/xml");
BitmapText.registerFont(fntXmlDoc, bitmapFontTexture);

// BitmapText.registerFontはv5.3+でdeprecatedされる？
// その場合、BitmapFont.installを使うそうだが、直接インポートできないため、こちらも使えない
// BitmapFont.install(fntXmlDoc, bitmapFontTexture);

/* main */
document.addEventListener('DOMContentLoaded', function() {
  const app = new Application({
    width: 512,
    height: 512,
    backgroundColor: 0x109090,
    resolution: window.devicePixelRatio || 1,
    antialias: true,
  });
  document.body.appendChild(app.view);

  // bitmapTextセットアップ
  const bmtext = new BitmapText('Hello Bitmap Font', {
    // font: '72px Aldrich', // 文字列指定の場合
    font: {
      name: 'Aldrich', // fntファイルの'face'に指定されたラベル
      size: 64,
    },
    align: 'center', // 文字の整列位置。複数行のときのみ有効
    tint: 0xFFFFFF,
  })
  bmtext.anchor.set(0.5)
  bmtext.position.x = app.screen.width / 2
  bmtext.position.y = app.screen.height / 2
  app.stage.addChild(bmtext)
})
