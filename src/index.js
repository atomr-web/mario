import * as PIXI from "pixi.js";

let app = new PIXI.Application({
  width: 512,
  height: 512,
});

app.renderer.backgroundColor = 0x061639;

document.body.appendChild(app.view);
