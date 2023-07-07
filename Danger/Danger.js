/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Danger extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./Danger/costumes/blank.svg", { x: 0, y: 0 }),
      new Costume("scene4", "./Danger/costumes/scene4.svg", {
        x: -11.515246016126895,
        y: 8.111753137578802
      })
    ];

    this.sounds = [new Sound("pop", "./Danger/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveBehind();
  }

  *whenIReceiveChangeScene() {
    this.costume = "blank";
    this.costume = "scene" + this.toString(this.stage.vars.scene);
    if (this.toNumber(this.stage.vars.scene) === 2) {
      while (true) {
        this.y = 3 * Math.sin(this.degToRad(this.timer * 180));
        yield;
      }
    }
  }
}
