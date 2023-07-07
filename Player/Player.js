/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("run-01", "./Player/costumes/run-01.svg", {
        x: 34.838462762860075,
        y: 60.39999999999999
      }),
      new Costume("run-02", "./Player/costumes/run-02.svg", {
        x: 34.95855939065541,
        y: 59.8
      }),
      new Costume("run-03", "./Player/costumes/run-03.svg", {
        x: 34.68023764314236,
        y: 58.499999999999986
      }),
      new Costume("run-04", "./Player/costumes/run-04.svg", {
        x: 35.80426822129397,
        y: 58.09999999999998
      }),
      new Costume("run-05", "./Player/costumes/run-05.svg", {
        x: 36.16960170432537,
        y: 56.89999999999999
      }),
      new Costume("run-06", "./Player/costumes/run-06.svg", {
        x: 36.3744179241063,
        y: 57.39999999999999
      }),
      new Costume("run-07", "./Player/costumes/run-07.svg", {
        x: 36.12853442979474,
        y: 58.39999999999999
      }),
      new Costume("run-08", "./Player/costumes/run-08.svg", {
        x: 35.215224449751986,
        y: 59.39999999999999
      }),
      new Costume("run-09", "./Player/costumes/run-09.svg", {
        x: 34.838462762860075,
        y: 60.39999999999999
      }),
      new Costume("run-10", "./Player/costumes/run-10.svg", {
        x: 34.95855939065541,
        y: 59.8
      }),
      new Costume("run-11", "./Player/costumes/run-11.svg", {
        x: 34.68023764314236,
        y: 58.499999999999986
      }),
      new Costume("run-12", "./Player/costumes/run-12.svg", {
        x: 35.80426822129397,
        y: 58.09999999999998
      }),
      new Costume("run-13", "./Player/costumes/run-13.svg", {
        x: 36.16960170432537,
        y: 56.89999999999999
      }),
      new Costume("run-14", "./Player/costumes/run-14.svg", {
        x: 36.3744179241063,
        y: 57.39999999999999
      }),
      new Costume("run-15", "./Player/costumes/run-15.svg", {
        x: 36.12853442979474,
        y: 58.39999999999999
      }),
      new Costume("run-16", "./Player/costumes/run-16.svg", {
        x: 35.215224449751986,
        y: 59.39999999999999
      }),
      new Costume("Jump01", "./Player/costumes/Jump01.svg", {
        x: 42.18599999999998,
        y: 61.210170000000005
      }),
      new Costume("run_j2", "./Player/costumes/run_j2.svg", {
        x: 35.03539821959376,
        y: 58.7
      }),
      new Costume("HangOn01", "./Player/costumes/HangOn01.svg", {
        x: 40.67400094604491,
        y: 58.784275054931626
      }),
      new Costume("hitbox", "./Player/costumes/hitbox.svg", {
        x: 12.196194999999989,
        y: 35.71343000000002
      }),
      new Costume("hitbox v2", "./Player/costumes/hitbox v2.svg", {
        x: 23.70971,
        y: 35.71342999999999
      }),
      new Costume(
        "hitbox wallslide",
        "./Player/costumes/hitbox wallslide.svg",
        { x: -0.07047166666654903, y: 4.713431666666764 }
      ),
      new Costume("hit angle 0", "./Player/costumes/hit angle 0.svg", {
        x: 15.751730555555525,
        y: -27.17545888888884
      }),
      new Costume("hit angle 1", "./Player/costumes/hit angle 1.svg", {
        x: 12.396175,
        y: -19.88656999999995
      }),
      new Costume("hit angle 2", "./Player/costumes/hit angle 2.svg", {
        x: 7.096165000000042,
        y: -24.13656999999995
      }),
      new Costume("hit angle 3", "./Player/costumes/hit angle 3.svg", {
        x: 21.096205000000026,
        y: -24.136570000000006
      }),
      new Costume("hit angle 4", "./Player/costumes/hit angle 4.svg", {
        x: 12.396164999999996,
        y: -19.88656999999995
      }),
      new Costume("stand", "./Player/costumes/stand.svg", {
        x: 41.998999999999995,
        y: 58.000000000000014
      }),
      new Costume("big hitbox", "./Player/costumes/big hitbox.svg", {
        x: 15.469440875721261,
        y: 41.387540560893854
      }),
      new Costume("stand2", "./Player/costumes/stand2.svg", {
        x: 41.998999999999995,
        y: 58
      }),
      new Costume("stand3", "./Player/costumes/stand3.svg", {
        x: 41.998999999999995,
        y: 58.00000000000003
      }),
      new Costume("stand4", "./Player/costumes/stand4.svg", {
        x: 41.998999999999995,
        y: 58.00000000000006
      }),
      new Costume("stand5", "./Player/costumes/stand5.svg", {
        x: 41.998999999999995,
        y: 58.000000000000014
      }),
      new Costume("guy", "./Player/costumes/guy.svg", {
        x: 19.14763499999998,
        y: 18.939059999999927
      }),
      new Costume("guy2", "./Player/costumes/guy2.svg", {
        x: 19.147655000000015,
        y: 18.939060000000012
      })
    ];

    this.sounds = [
      new Sound("pop", "./Player/sounds/pop.wav"),
      new Sound("death sound", "./Player/sounds/death sound.wav"),
      new Sound("Meow", "./Player/sounds/Meow.wav"),
      new Sound("die", "./Player/sounds/die.wav"),
      new Sound("live", "./Player/sounds/live.wav"),
      new Sound("Video Game 1", "./Player/sounds/Video Game 1.wav"),
      new Sound("Jump", "./Player/sounds/Jump.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tick-player" },
        this.whenIReceiveTickPlayer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game loop" },
        this.whenIReceiveGameLoop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tick- last" },
        this.whenIReceiveTickLast
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tick - first" },
        this.whenIReceiveTickFirst
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "lose life" },
        this.whenIReceiveLoseLife
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "change scene" },
        this.whenIReceiveChangeScene
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Main Menu" },
        this.whenIReceiveMainMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Game" },
        this.whenIReceiveStartGame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player bounce" },
        this.whenIReceivePlayerBounce
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];

    this.vars.speedY = -1.5737704918032789;
    this.vars.speedX = 0;
    this.vars.lastValue = 40.66227397386885;
    this.vars.falling = 0;
    this.vars.jumpForce = 15.5;
    this.vars.acceleration = 1.5;
    this.vars.touching = 0;
    this.vars.temp = 90;
    this.vars.distance = 1;
    this.vars.frame = 0;
    this.vars.jumping = 0;
    this.vars.wallSlide = 0;
    this.vars.longJump = 0;
  }

  *whenGreenFlagClicked() {
    this.broadcast("Main Menu");
  }

  *moveInSteps(steps) {
    this.vars.falling++;
    for (let i = 0; i < this.toNumber(steps); i++) {
      this.vars.lastValue = this.x;
      this.x += this.toNumber(this.vars.speedX) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.warp(this.collideXSlopeOrWall)();
      }
      this.vars.lastValue = this.y;
      this.y += this.toNumber(this.vars.speedY) / this.toNumber(steps);
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.warp(this.colideYCelingOrFloor)();
      }
    }
  }

  *checkTouchingSolid() {
    if (
      this.touching(this.sprites["Level"].andClones()) ||
      this.touching(this.sprites["Wall"].andClones())
    ) {
      this.vars.touching = 1;
    } else {
      this.vars.touching = 0;
    }
  }

  *whenIReceiveTickPlayer() {
    yield* this.movedByMovingPlatform();
    this.stage.costume = this.touching(this.sprites["Level"].andClones());
    yield* this.controlsUpDown();
    yield* this.controlsLeftRight();
    yield* this.moveInSteps(
      Math.abs(this.toNumber(this.vars.speedY)) +
        Math.abs(this.toNumber(this.vars.speedX))
    );
    yield* this.setCostume();
  }

  *controlsUpDown() {
    if (this.keyPressed("up arrow") || this.keyPressed("w")) {
      if (
        this.compare(this.vars.wallSlide, 0) > 0 &&
        this.toNumber(this.vars.jumping) === 0
      ) {
        yield* this.startSound("Jump");
        this.vars.jumping = 1;
        this.vars.falling = 3;
        this.vars.wallSlide = 0;
        this.direction += 180;
        this.vars.speedX = (this.direction / 90) * 7;
        this.vars.longJump = 12;
      }
      if (
        this.compare(this.vars.falling, 3) < 0 &&
        this.toNumber(this.vars.jumping) === 0
      ) {
        yield* this.startSound("Jump");
        this.vars.jumping = 1;
        this.vars.falling = 3;
      }
      if (
        this.compare(this.vars.jumping, 0) > 0 &&
        this.compare(this.vars.jumping, this.stage.vars.jumpDuration) < 0
      ) {
        this.vars.jumping++;
        this.vars.speedY = this.vars.jumpForce;
      }
    } else {
      this.vars.jumping = 0;
    }
    this.vars.speedY += this.toNumber(this.stage.vars.gravity);
    if (this.compare(this.vars.wallSlide, 0) > 0) {
      this.warp(this.checkCanWallSlide)();
      if (this.compare(this.vars.speedY, 0) < 0) {
        this.vars.speedY = this.toNumber(this.vars.speedY) * 0.6;
      }
    }
  }

  *controlsLeftRight() {
    if (this.compare(this.vars.longJump, 0) > 0) {
      this.vars.longJump--;
      return;
    }
    this.stage.vars.keyX =
      this.toNumber(this.keyPressed("right arrow")) -
      this.toNumber(this.keyPressed("left arrow"));
    if (this.toNumber(this.stage.vars.keyX) === 0) {
      if (
        this.compare(this.vars.falling, 2) > 0 &&
        this.compare(this.vars.wallSlide, 1) < 0
      ) {
        this.vars.speedX = this.toNumber(this.vars.speedX) * 0.98;
        return;
      }
      if (this.compare(Math.abs(this.toNumber(this.vars.speedX)), 1) < 0) {
        this.vars.frame = 0;
        this.vars.speedX = 0;
      } else {
        this.vars.frame += 0.5;
      }
    } else {
      this.vars.speedX +=
        this.toNumber(this.stage.vars.keyX) *
        this.toNumber(this.vars.acceleration);
      this.direction = this.toNumber(this.stage.vars.keyX) * 90;
      this.vars.frame++;
    }
    this.vars.speedX =
      this.toNumber(this.vars.speedX) *
      this.toNumber(this.stage.vars.resistance);
  }

  *resetAndBeginLevel() {
    this.stage.vars.invulnerable = 0;
    yield* this.startSound("live");
    this.vars.speedX = 0;
    this.vars.speedY = 0;
    this.vars.falling = 99;
    this.vars.wallSlide = 0;
    this.vars.jumping = 0;
    this.vars.longJump = 0;
    this.direction = 90;
    yield* this.beginSceneGoToXY(
      this.stage.vars.spawnScene,
      this.stage.vars.spawnX,
      this.stage.vars.spawnY
    );
  }

  *whenIReceiveGameLoop() {
    this.effects.ghost = 0;
    while (true) {
      this.broadcast("tick - first");
      this.broadcast("tick platforms");
      this.broadcast("tick-player");
      this.broadcast("tick- last");
      yield;
    }
  }

  *whenIReceiveTickLast() {
    if (this.compare(this.x, 235) > 0) {
      yield* this.beginSceneGoToXY(
        this.toNumber(this.stage.vars.scene) + 1,
        -235,
        0
      );
    }
    if (this.compare(this.x, -235) < 0) {
      yield* this.beginSceneGoToXY(
        this.toNumber(this.stage.vars.scene) + -1,
        235,
        0
      );
    }
    if (this.touching(this.sprites["Danger"].andClones())) {
      this.broadcast("lose life");
    }
  }

  *beginSceneGoToXY(scene, x, y) {
    this.stage.vars.scene = scene;
    if (this.compare(x, "") > 0) {
      this.x = this.toNumber(x);
    }
    if (this.compare(y, "") > 0) {
      this.y = this.toNumber(y);
    }
    this.broadcast("about to chane scene");
    this.broadcast("change scene");
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(0);
    this.costume = "hitbox v2";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    if (this.compare(x, "") > 0) {
      yield* this.fixCollisionInDirection(0);
    } else {
      yield* this.fixCollisionInDirection(90);
    }
    yield* this.setCostume();
    this.broadcast("game loop");
  }

  *fixCollisionInDirection(dir) {
    this.vars.temp = this.direction;
    this.vars.distance = 1;
    this.direction = this.toNumber(dir);
    for (let i = 0; i < 128; i++) {
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 1) < 0) {
        this.direction = this.toNumber(this.vars.temp);
        return;
      }
      this.move(this.toNumber(this.vars.distance));
      this.direction += 180;
      this.vars.distance++;
    }
  }

  *whenIReceiveTickFirst() {
    this.costume = "hitbox v2";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.stage.vars.platformDx = "";
    this.stage.vars.platformDy = "";
  }

  *setCostume() {
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    if (this.compare(this.vars.wallSlide, 0) > 0) {
      this.costume = "HangOn01";
      return;
    }
    if (this.compare(this.vars.falling, 1) > 0) {
      if (this.compare(this.vars.speedY, 0) > 0) {
        this.costume = "Jump01";
      } else {
        this.costume = "run_j2";
      }
      return;
    }
    if (this.compare(this.vars.frame, 0) > 0) {
      this.costume = 1 + Math.floor(this.toNumber(this.vars.frame) % 16);
    } else {
      this.costume = "hit angle 0";
      for (let i = 0; i < 5; i++) {
        this.warp(this.checkTouchingSolid)();
        if (this.compare(this.vars.touching, 1) < 0) {
          this.costume = this.costumeNumber + 5;
          return;
        }
        this.costumeNumber++;
      }
      this.costume = "stand";
    }
  }

  *collideXSlopeOrWall() {
    this.warp(this.checkCanWallSlide)();
    this.y += 1;
    this.warp(this.checkTouchingSolid)();
    if (this.compare(this.vars.touching, 0) > 0) {
      this.y += 1;
      this.warp(this.checkTouchingSolid)();
      if (this.compare(this.vars.touching, 0) > 0) {
        this.y -= 2;
        this.x = this.toNumber(this.vars.lastValue);
        this.vars.speedX = 0;
        return;
      }
      this.vars.speedX = this.toNumber(this.vars.speedX) * 0.8;
    }
    this.vars.speedX = this.toNumber(this.vars.speedX) * 0.95;
    this.warp(this.slip)();
  }

  *colideYCelingOrFloor() {
    this.y = this.toNumber(this.vars.lastValue);
    if (this.compare(this.vars.speedY, 0) > 0) {
      this.vars.speedY = 0;
      return;
    }
    if (this.compare(this.vars.falling, 0) > 0) {
      this.vars.falling = 0;
      this.warp(this.slip)();
    }
    this.vars.speedY = this.toNumber(this.vars.speedY) * 0.8;
  }

  *slip() {
    this.y -= 2;
    this.x += 1;
    this.warp(this.checkTouchingSolid)();
    if (this.compare(this.vars.touching, 1) < 0) {
      this.vars.falling = 9;
      this.vars.speedX++;
      return;
    }
    this.x -= 2;
    this.warp(this.checkTouchingSolid)();
    if (this.compare(this.vars.touching, 1) < 0) {
      this.vars.falling = 9;
      this.vars.speedX--;
      return;
    }
    this.y += 2;
    this.x += 1;
  }

  *checkCanWallSlide() {
    if (this.compare(this.vars.falling, 2) < 0) {
      this.vars.wallSlide = 0;
      return;
    }
    this.costume = "hitbox wallslide";
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.warp(this.checkTouchingSolid)();
    this.vars.wallSlide = this.vars.touching;
    this.costume = "hitbox v2";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
  }

  *whenIReceiveLoseLife() {
    this.stage.vars.invulnerable = 1;
    /* TODO: Implement stop other scripts in sprite */ null;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    yield* this.playSoundUntilDone("die");
    yield* this.wait(0.5);
    this.stage.vars.lives--;
    if (this.compare(this.stage.vars.lives, 0) > 0) {
      yield* this.resetAndBeginLevel();
    } else {
      this.broadcast("game over");
    }
  }

  *movedByMovingPlatform() {
    this.x += this.toNumber(this.stage.vars.platformDx);
    this.y += this.toNumber(this.stage.vars.platformDy);
    this.warp(this.checkTouchingSolid)();
    if (this.compare(this.vars.touching, 0) > 0) {
      this.warp(this.findNoColisionMax)(this.x, this.y, 16);
      if (this.compare(this.vars.touching, 0) > 0) {
        this.broadcast("lose life");
      }
    }
  }

  *findNoColisionMax(x, y, max) {
    this.vars.temp = this.direction;
    this.vars.distance = 1;
    this.direction = 0;
    for (let i = 0; i < this.toNumber(max); i++) {
      for (let i = 0; i < 16; i++) {
        this.goto(this.toNumber(x), this.toNumber(y));
        this.move(this.toNumber(this.vars.distance));
        this.warp(this.checkTouchingSolid)();
        if (this.compare(this.vars.touching, 1) < 0) {
          this.direction = 90;
          return;
        }
        this.direction += 360 / 16;
      }
      this.vars.distance += this.toNumber(this.vars.temp);
    }
    this.goto(this.toNumber(x), this.toNumber(y));
    this.move(this.toNumber(this.vars.temp));
  }

  *whenGreenFlagClicked2() {}

  *whenGreenFlagClicked3() {}

  *whenIReceiveChangeScene() {}

  *whenIReceiveStartGame() {
    this.stage.vars.gravity = -1.5;
    this.vars.jumpForce = 15.5;
    this.stage.vars.jumpDuration = 10;
    this.vars.acceleration = 1.5;
    this.stage.vars.resistance = 0.8;
    yield* this.broadcastAndWait("Reset Game");
    yield* this.broadcastAndWait("setup");
    this.stage.vars.lives = 3;
    this.stage.vars.spawnScene = 1;
    this.stage.vars.spawnX = -150;
    this.stage.vars.spawnY = 55;
    yield* this.resetAndBeginLevel();
  }

  *whenIReceiveMainMenu() {
    this.visible = false;
  }

  *whenIReceiveStartGame2() {
    this.visible = true;
  }

  *whenIReceivePlayerBounce() {
    this.vars.speedY = 10;
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.sceneOfPlayer = this.stage.vars.scene;
  }

  *whenGreenFlagClicked5() {
    if (this.touching(this.sprites[undefined].andClones())) {
      this.vars.speedX += 0;
    }
  }
}
