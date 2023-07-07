/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wall/costumes/costume1.svg", {
        x: 97,
        y: 137.50000000000003
      })
    ];

    this.sounds = [new Sound("pop", "./Wall/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "letter pick up" },
        this.whenIReceiveLetterPickUp
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 30;
  }

  *whenIReceiveChangeScene() {
    this.visible = false;
    if (this.toNumber(this.stage.vars.scene) === 2) {
      this.goto(15, 52);
      this.visible = true;
    }
  }

  *whenIReceiveLetterPickUp() {
    this.visible = false;
  }
}
