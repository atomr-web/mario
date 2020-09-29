import * as PIXI from "pixi.js";

const app = new PIXI.Application();

document.body.appendChild(app.view);

app.loader.add("logo", "assets/logo.png").load((loader, resources) => {
  const logo = new PIXI.Sprite(resources.logo.texture);

  logo.x = app.renderer.width / 2;
  logo.y = app.renderer.height / 2;

  logo.anchor.x = 0.5;
  logo.anchor.y = 0.5;

  // app.stage.appChild(logo);
  app.stage.addChild(logo);

  app.ticker.add(() => {
    logo.rotation += 0.01;
  });
});
