/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("scene0", "./Level/costumes/scene0.svg", {
        x: 242.34530402739733,
        y: -54.58994743835609
      }),
      new Costume("scene1", "./Level/costumes/scene1.svg", {
        x: 263.47193500000003,
        y: 257.25971000000004
      }),
      new Costume("scene2", "./Level/costumes/scene2.svg", {
        x: 263.471935,
        y: 257.25971000000004
      }),
      new Costume("scene3", "./Level/costumes/scene3.svg", {
        x: 262.5,
        y: 34.25342493150683
      }),
      new Costume("scene4", "./Level/costumes/scene4.svg", {
        x: 240.69584189041097,
        y: 95.3330761769486
      }),
      new Costume("scene5", "./Level/costumes/scene5.svg", {
        x: 254.88323740397357,
        y: 181.97854
      }),
      new Costume("scene6", "./Level/costumes/scene6.svg", {
        x: 276.90115661643836,
        y: 132.9308972688931
      }),
      new Costume("scene7", "./Level/costumes/scene7.svg", {
        x: 266.3835733287671,
        y: 234.11363238779023
      }),
      new Costume("scene8", "./Level/costumes/scene8.svg", {
        x: 245.50342465753423,
        y: 163.61986301369862
      }),
      new Costume("scene10", "./Level/costumes/scene10.svg", {
        x: 266.3835733287671,
        y: 185.48439932876715
      }),
      new Costume("scene9", "./Level/costumes/scene9.svg", {
        x: 266.3835733287671,
        y: 185.48439932876715
      })
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      ),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveBehind();
  }

  *whenIReceiveChangeScene() {
    this.costume = "scene" + this.toString(this.stage.vars.scene);
    this.clearPen();
    yield* this.stampOutline();
    yield* this.stampShadow();
  }

  *stampOutline() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.effects.brightness = -100;
    for (let i = 0; i < 8; i++) {
      this.move(3);
      this.stamp();
      this.move(-3);
      this.direction += 45;
    }
    this.effects.clear();
  }

  *stampShadow() {
    this.effects.brightness = 100;
    this.effects.ghost = 90;
    this.y -= 20;
    this.stamp();
    this.y += 20;
    this.effects.clear();
  }

  *whenIReceiveMainMenu() {
    this.clearPen();
    this.visible = false;
  }

  *whenIReceiveStartGame() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.clearPen();
  }
}
