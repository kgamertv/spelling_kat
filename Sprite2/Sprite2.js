/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("A", "./Sprite2/costumes/A.svg", { x: 28, y: 38 }),
      new Costume("K", "./Sprite2/costumes/K.svg", { x: 24, y: 40 }),
      new Costume("T", "./Sprite2/costumes/T.svg", { x: 25, y: 33 }),
      new Costume("P", "./Sprite2/costumes/P.svg", { x: 18, y: 33 }),
      new Costume("I", "./Sprite2/costumes/I.svg", { x: 19, y: 39 })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite2/sounds/pop.wav"),
      new Sound(
        "mixkit-clinking-coins-1993",
        "./Sprite2/sounds/mixkit-clinking-coins-1993.wav"
      ),
      new Sound("Wand", "./Sprite2/sounds/Wand.wav"),
      new Sound("Magic Spell", "./Sprite2/sounds/Magic Spell.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Reset Game" },
        this.whenIReceiveResetGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lose life" },
        this.whenIReceiveLoseLife
      )
    ];

    this.vars.myScene = 0;
    this.vars.frame = 0;
  }

  *whenIReceiveChangeScene() {
    if (this.compare(this.stage.vars.scene, this.vars.myScene) === 0) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *startAsClone() {
    while (!this.touching(this.sprites["Player"].andClones())) {
      this.y += 0.5 * Math.sin(this.degToRad(this.toNumber(this.vars.frame)));
      this.vars.frame += 5;
      yield;
    }
    this.vars.myScene = "";
    yield* this.startSound("pop");
    for (let i = 0; i < 20; i++) {
      this.y += 2;
      this.effects.brightness += 5;
      yield;
    }
    this.stage.vars.vergelijk.push(this.costume.name);
    if (
      this.compare(
        this.indexInArray(this.stage.vars.letters, this.costume.name) + 1,
        this.indexInArray(this.stage.vars.vergelijk, this.costume.name) + 1
      ) === 0
    ) {
      this.broadcast("letter pick up");
    } else {
      this.stage.vars.vergelijk = [];
      this.broadcast("lose life");
    }
    this.visible = false;
  }

  *whenIReceiveSetup() {
    this.stage.vars.collected = [];
    this.vars.frame = 0;
    this.stage.vars.munten = 0;
    this.visible = false;
    yield* this.placeSceneXy("K", 1, 113, -13);
    yield* this.placeSceneXy("A", 2, 113, -13);
    yield* this.placeSceneXy("T", 3, -50, -3);
    yield* this.placeSceneXy("K", 4, 3, 59);
    yield* this.placeSceneXy("I", 5, 202, -32);
    yield* this.placeSceneXy("P", 6, 202, -32);
  }

  *placeSceneXy(costumeName, scene, x, y) {
    this.vars.myScene = scene;
    this.costume = costumeName;
    this.goto(this.toNumber(x), this.toNumber(y));
    this.createClone();
    this.vars.myScene = "";
  }

  *whenIReceiveResetGame() {
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.size = 30;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.count = 0;
    this.stage.vars.vergelijk = [];
  }

  *whenIReceiveLoseLife() {
    this.visible = true;
  }
}
