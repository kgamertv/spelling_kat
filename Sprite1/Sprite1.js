/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("munt", "./Sprite1/costumes/munt.svg", {
        x: 38.6653950000001,
        y: 38.777229999999975
      }),
      new Costume("Key", "./Sprite1/costumes/Key.svg", {
        x: 17.36595678318531,
        y: 10.986744259549084
      }),
      new Costume("Green Flag", "./Sprite1/costumes/Green Flag.svg", {
        x: 70,
        y: 30
      }),
      new Costume("A", "./Sprite1/costumes/A.svg", { x: 28, y: 38 })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound(
        "mixkit-clinking-coins-1993",
        "./Sprite1/sounds/mixkit-clinking-coins-1993.wav"
      ),
      new Sound("Wand", "./Sprite1/sounds/Wand.wav"),
      new Sound("Magic Spell", "./Sprite1/sounds/Magic Spell.wav")
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "spawn beloning" },
        this.whenIReceiveSpawnBeloning
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "spawn beloning" },
        this.whenIReceiveSpawnBeloning2
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
    if (this.costume.name === "munt") {
      yield* this.startSound("mixkit-clinking-coins-1993");
      this.stage.vars.munten++;
    } else {
      if (this.costume.name === "Green Flag") {
        yield* this.startSound("Magic Spell");
        this.stage.vars.spawnScene = this.stage.vars.scene;
        this.stage.vars.spawnX = this.sprites["Player"].x;
        this.stage.vars.spawnY = this.sprites["Player"].y;
      } else {
        if (this.costume.name === "A") {
          yield* this.startSound("Magic Spell");
          this.stage.vars.spawnScene = this.stage.vars.scene;
          this.stage.vars.spawnX = this.sprites["Player"].x;
          this.stage.vars.spawnY = this.sprites["Player"].y;
        } else {
          yield* this.startSound("Wand");
          this.stage.vars.collected.push(this.costume.name);
        }
      }
    }
    for (let i = 0; i < 20; i++) {
      this.y += 2;
      this.effects.brightness += 5;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveSetup() {
    this.stage.vars.collected = [];
    this.vars.frame = 0;
    this.stage.vars.munten = 0;
    this.visible = false;
    yield* this.placeSceneXy("munt", 1, -168, 142);
    yield* this.placeSceneXy("munt", 1, -57, -26);
    yield* this.placeSceneXy("munt", 3, -86, -9);
    yield* this.placeSceneXy("Key", 4, 147, 109);
    yield* this.placeSceneXy("Green Flag", 3, 180, 60);
    yield* this.placeSceneXy("Green Flag", 5, 180, 60);
    yield* this.placeSceneXy("munt", 5, -92, -102);
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

  *whenIReceiveSpawnBeloning() {
    yield* this.placeSceneXy(
      "munt",
      this.stage.vars.sceneOfPlayer,
      this.stage.vars.muntX,
      this.stage.vars.muntY
    );
  }

  *whenIReceiveSpawnBeloning2() {}
}
