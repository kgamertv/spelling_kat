/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HeartCandy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("heart smile", "./HeartCandy/costumes/heart smile.svg", {
        x: 58.47041500000009,
        y: 18.973594999999904
      }),
      new Costume("heart smile2", "./HeartCandy/costumes/heart smile2.svg", {
        x: 58.91551756410263,
        y: 19.514940064102603
      }),
      new Costume("heart smile3", "./HeartCandy/costumes/heart smile3.svg", {
        x: 60.24499455128196,
        y: 18.68071474358976
      }),
      new Costume("costume1", "./HeartCandy/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./HeartCandy/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "lose life" },
        this.whenIReceiveLoseLife
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenIReceiveLoseLife() {
    this.costumeNumber++;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 50;
    this.goto(-176, 159);
  }

  *whenIReceiveStartGame() {
    this.costume = "heart smile";
    this.visible = true;
  }
}
