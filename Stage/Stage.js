/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 385.79534883720953,
        y: 269.75000000000017
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenstageclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.gravity = -1.5;
    this.vars.resistance = 0.8;
    this.vars.scene = 3;
    this.vars.keyX = 0;
    this.vars.jumpDuration = 10;
    this.vars.spawnX = 139.99390080049372;
    this.vars.spawnY = 73.46227397386885;
    this.vars.spawnScene = 3;
    this.vars.munten = 4;
    this.vars.platformDx = 0;
    this.vars.platformDy = 0;
    this.vars.lives = 1;
    this.vars.invulnerable = 0;
    this.vars.costume = 4;
    this.vars.sceneOfPlayer = 5;
    this.vars.count = 0;
    this.vars.muntX = 108;
    this.vars.muntY = -36;
    this.vars.collected = ["Key"];
    this.vars.letters = ["K", "A", "T"];
    this.vars.vergelijk = ["K", "A", "T", "K"];

    this.watchers.munten = new Watcher({
      label: "munten",
      style: "large",
      visible: true,
      value: () => this.vars.munten,
      x: 670,
      y: 180
    });
    this.watchers.muntX = new Watcher({
      label: "munt x",
      style: "normal",
      visible: true,
      value: () => this.vars.muntX,
      x: 245,
      y: 175
    });
    this.watchers.muntY = new Watcher({
      label: "munt y",
      style: "normal",
      visible: true,
      value: () => this.vars.muntY,
      x: 245,
      y: 148
    });
  }

  *whenGreenFlagClicked() {}

  *whenstageclicked() {}

  *whenGreenFlagClicked2() {}
}
