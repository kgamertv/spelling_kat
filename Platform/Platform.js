/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Platform extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Platform/costumes/costume1.svg", {
        x: 60.75,
        y: 14.25
      }),
      new Costume("Key", "./Platform/costumes/Key.svg", { x: 34, y: 28.5 })
    ];

    this.sounds = [
      new Sound("pop", "./Platform/sounds/pop.wav"),
      new Sound("Buzz Whir", "./Platform/sounds/Buzz Whir.wav"),
      new Sound("Crunch", "./Platform/sounds/Crunch.wav"),
      new Sound("Low Squeak", "./Platform/sounds/Low Squeak.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tick platforms" },
        this.whenIReceiveTickPlatforms
      )
    ];

    this.vars.lastX = 32;
    this.vars.lastY = 139;
  }

  *whenIReceiveChangeScene() {
    this.costume = "costume1";
    this.moveBehind();
    this.visible = false;
    if (this.toNumber(this.stage.vars.scene) === 5) {
      yield* this.doorAtKey(32, 39, "Key");
    }
    if (this.toNumber(this.stage.vars.scene) === 10) {
      yield* this.animatePlatform();
    }
  }

  *animatePlatform() {
    this.goto(36, 28);
    this.direction = 90;
    while (true) {
      yield* this.glide(2, 5, 5);
      yield* this.wait(1);
      yield* this.glide(2, -1, 79);
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveTickPlatforms() {
    yield* this.tick(this.x, this.y);
    this.vars.lastX = this.x;
    this.vars.lastY = this.y;
  }

  *tick(newX, newY) {
    if (this.compare(newY, this.vars.lastY) > 0) {
      this.y += 1;
    } else {
      this.y = this.toNumber(this.vars.lastY) + 1;
    }
    if (this.touching(this.sprites["Player"].andClones())) {
      this.stage.vars.platformDx =
        this.toNumber(newX) - this.toNumber(this.vars.lastX);
      this.stage.vars.platformDy =
        this.toNumber(newY) - this.toNumber(this.vars.lastY);
    } else {
      null;
    }
    this.goto(this.toNumber(newX), this.toNumber(newY));
  }

  *animate2() {
    this.goto(15, 120);
    this.direction = 0;
    while (true) {
      yield* this.glide(2, 17, -4);
      yield* this.wait(1);
      yield* this.glide(2, 15, 120);
      yield* this.wait(1);
      yield;
    }
  }

  *doorAtKey(x, y, keyName) {
    this.visible = true;
    this.costume = keyName;
    this.goto(this.toNumber(x), this.toNumber(y));
    while (true) {
      while (!this.touching(this.sprites["Player"].andClones())) {
        yield;
      }
      if (this.arrayIncludes(this.stage.vars.collected, keyName)) {
        yield* this.startSound("Buzz Whir");
        for (let i = 0; i < 25; i++) {
          this.y += 4;
          yield;
        }
        yield* this.wait(1);
        yield* this.startSound("Buzz Whir");
        for (let i = 0; i < 25; i++) {
          this.y -= 4;
          yield;
        }
        yield* this.startSound("Crunch");
      } else {
        yield* this.startSound("Low Squeak");
        while (!!this.touching(this.sprites["Player"].andClones())) {
          yield;
        }
      }
      yield;
    }
  }
}
