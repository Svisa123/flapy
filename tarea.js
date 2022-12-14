import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
kaboom();

loadSprite("birdy", "sprites/birdy.png");
loadSprite("pipe", "sprites/pipe.png");
loadSprite("bg", "sprites/bg.png");

scene("game", () => {
  add([sprite("bg", { width: width(), height: height() })]);
  //comentario das
  const PIPE_GAP = 120;
  function producePipes() {
    const offset = rand(-64, 64);
    add([sprite("pipe"), pos(width(), 0), "pipe", scale(8), area()]);

    add([
      sprite("pipe", { flipY: true }),
      pos(width(), height()),
      origin("botleft"),
      scale(8),
      "pipe",
      area(),
    ]);
  }

  onUpdate("pipe", (pipe) => {
    pipe.move(-160, 0);
  });
  loop(5.5, () => {
    producePipes();
  });
  const player = add([
    sprite("birdy"),
    scale(4),
    pos(80, 40),
    area(),
    body(),

    onKeyPress("space", () => {
      player.jump(400);
    }),
  ]);
});

scene("gameover", (score) => {});
go("game");
