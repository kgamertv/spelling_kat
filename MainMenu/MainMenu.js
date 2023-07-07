/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MainMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("play button", "./MainMenu/costumes/play button.svg", {
        x: 62.66666598094241,
        y: 26.3895971874378
      })
    ];

    this.sounds = [new Sound("pop", "./MainMenu/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveMainMenu() {
    yield* this.wait(0.1);
    this.moveAhead();
    this.visible = true;
    this.size = 10;
    this.goto(3, -113);
    while (true) {
      if (this.touching("mouse")) {
        this.size += 0.2 * (110 - this.size);
      } else {
        this.size += 0.2 * (100 - this.size);
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("Start Game");
  }
}
