/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SplashScreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("game over", "./SplashScreen/costumes/game over.svg", {
        x: 115.28602329471585,
        y: 50.610177410617524
      }),
      new Costume("Main Menu", "./SplashScreen/costumes/Main Menu.svg", {
        x: 239.5,
        y: 148.8499635427952
      })
    ];

    this.sounds = [new Sound("pop", "./SplashScreen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start Game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenIReceiveGameOver() {
    this.goto(0, 0);
    this.costume = "game over";
    this.moveAhead();
    this.visible = true;
    this.broadcast("Main Menu");
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "Main Menu";
    this.moveAhead();
    this.visible = true;
  }

  *whenIReceiveStartGame() {
    this.visible = false;
  }
}
