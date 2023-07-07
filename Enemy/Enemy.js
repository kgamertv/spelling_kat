/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Enemy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Red 1", "./Enemy/costumes/Red 1.svg", {
        x: 18.511903928571343,
        y: 17.647362142857162
      }),
      new Costume("Red 2", "./Enemy/costumes/Red 2.svg", {
        x: 21.072442404337124,
        y: 21.189944853588372
      }),
      new Costume("Red 3", "./Enemy/costumes/Red 3.svg", {
        x: 23.981146468573996,
        y: 25.247813527500426
      }),
      new Costume("Red 4", "./Enemy/costumes/Red 4.svg", {
        x: 21.072442404337124,
        y: 21.189944853588372
      }),
      new Costume("Red squish", "./Enemy/costumes/Red squish.svg", {
        x: 20.565470000000005,
        y: 6.227720000000005
      })
    ];

    this.sounds = [
      new Sound("pop", "./Enemy/sounds/pop.wav"),
      new Sound("Squish Pop", "./Enemy/sounds/Squish Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "about to chane scene" },
        this.whenIReceiveAboutToChaneScene
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.speedY = -51;
    this.vars.frame = 16.83;
    this.vars.myScene = 103;
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.visible = false;
  }

  *whenIReceiveChangeScene() {
    if (this.toNumber(this.stage.vars.scene) === 1) {
      if (this.compare(this.sprites["Player"].x, 0) < 0) {
        yield* this.spawnAtDir("Red", 68, -33, -90);
      } else {
        yield* this.spawnAtDir("Red", -28, -33, 90);
      }
    }
    if (this.toNumber(this.stage.vars.scene) === 2) {
      yield* this.spawnAtDir("Red", 13, -73, -90);
    }
  }

  *startAsClone() {
    this.visible = true;
    this.vars.speedY = 0;
    this.vars.frame = 0;
    while (true) {
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      this.costume = "Red 1";
      yield* this.moveLeftOrRight();
      yield* this.moveDown();
      this.vars.frame += 0.33;
      this.costume = 1 + (Math.floor(this.toNumber(this.vars.frame)) % 4);
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      if (
        this.toNumber(this.stage.vars.invulnerable) === 0 &&
        this.touching(this.sprites["Player"].andClones())
      ) {
        yield* this.tuochingPlayer();
      }
      yield;
    }
  }

  *whenIReceiveAboutToChaneScene() {
    this.deleteThisClone();
  }

  *moveDown() {
    this.vars.speedY--;
    this.y += this.toNumber(this.vars.speedY);
    while (!!this.touching(this.sprites["Level"].andClones())) {
      this.y += 1;
      this.vars.speedY = 0;
    }
  }

  *moveLeftOrRight() {
    this.move(2);
    for (let i = 0; i < 4; i++) {
      if (
        !(
          this.touching(this.sprites["Level"].andClones()) ||
          this.touching("edge")
        )
      ) {
        if (
          !(
            this.touching(this.sprites["Platform"].andClones()) ||
            this.touching(this.sprites["SafeZone"].andClones())
          )
        ) {
          return;
        }
      }
      this.y += 1;
    }
    this.y -= 4;
    this.move(-2);
    this.direction += 180;
  }

  *tuochingPlayer() {
    if (this.compare(this.sprites["Player"].vars.speedY, -3) < 0) {
      this.broadcast("player bounce");
      yield* this.startSound("Squish Pop");
      this.costume = "Red squish";
      yield* this.wait(0.3);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.deleteThisClone();
    }
    this.broadcast("lose life");
  }

  *spawnAtDir(type, x, y, dir) {
    this.goto(this.toNumber(x), this.toNumber(y));
    this.direction = this.toNumber(dir);
    this.createClone();
  }

  *whenGreenFlagClicked2() {
    this.vars.myScene += this.toNumber(this.stage.vars.spawnScene);
  }
}
