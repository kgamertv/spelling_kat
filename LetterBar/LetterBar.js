/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LetterBar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./LetterBar/costumes/0.svg", { x: 0, y: 0 }),
      new Costume("Block-k2", "./LetterBar/costumes/Block-k2.svg", {
        x: 104.41841500000001,
        y: 37.93053499999999
      }),
      new Costume("Block-k3", "./LetterBar/costumes/Block-k3.svg", {
        x: 104.418395,
        y: 39.661305009710645
      }),
      new Costume("Block-k", "./LetterBar/costumes/Block-k.svg", {
        x: 104.41841666666667,
        y: 42.0116550048553
      }),
      new Costume("2", "./LetterBar/costumes/2.svg", { x: 0, y: 0 }),
      new Costume("Block-k4", "./LetterBar/costumes/Block-k4.svg", {
        x: 104.41841500000001,
        y: 37.93053499999999
      }),
      new Costume("Block-k5", "./LetterBar/costumes/Block-k5.svg", {
        x: 63,
        y: 40
      }),
      new Costume("Block-k6", "./LetterBar/costumes/Block-k6.svg", {
        x: 98.49975,
        y: 40.330125668123
      }),
      new Costume("Block-t", "./LetterBar/costumes/Block-t.svg", {
        x: 24.589200000000005,
        y: 32.774400000000014
      }),
      new Costume("Block-l", "./LetterBar/costumes/Block-l.svg", {
        x: 26,
        y: 40
      }),
      new Costume("Block-i", "./LetterBar/costumes/Block-i.svg", {
        x: 19,
        y: 39
      }),
      new Costume("Block-p", "./LetterBar/costumes/Block-p.svg", {
        x: 18,
        y: 33
      })
    ];

    this.sounds = [new Sound("pop", "./LetterBar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "letter pick up" },
        this.whenIReceiveLetterPickUp
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lose life" },
        this.whenIReceiveLoseLife
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 30;
    this.costume = 0;
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveStartGame() {
    this.goto(169, 118);
    this.visible = true;
  }

  *whenIReceiveLetterPickUp() {
    this.costumeNumber++;
    this.goto(-12, 137);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (!(this.costumeNumber === 4 || this.costumeNumber === 8)) {
        yield;
      }
      for (let i = 0; i < 20; i++) {
        this.effects.brightness += 5;
        yield;
      }
      this.costumeNumber++;
      this.effects.clear();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.costume = 4;
  }

  *whenGreenFlagClicked4() {
    while (!(this.costumeNumber === 4)) {
      yield;
    }
    this.broadcast("change");
  }

  *blockName(numberOrText) {}

  *whenIReceiveLoseLife() {}
}
