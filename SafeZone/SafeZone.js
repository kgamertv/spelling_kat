/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SafeZone extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./SafeZone/costumes/blank.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./SafeZone/sounds/pop.wav")];

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
    this.effects.ghost = 100;
  }

  *whenIReceiveChangeScene() {
    this.costume = "blank";
    this.costume = "scene" + this.toString(this.stage.vars.scene);
  }
}
