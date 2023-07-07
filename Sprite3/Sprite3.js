/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 104.41841500000001,
        y: 42.01164500971066
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 98.49975,
        y: 40.33012316812301
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change" },
        this.whenIReceiveChange
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveChange() {
    this.costumeNumber++;
  }

  *whenIReceiveStartGame() {
    this.costume = "costume1";
    this.goto(164, 149);
    this.size = 30;
    this.visible = true;
  }
}
