import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Level from "./Level/Level.js";
import Danger from "./Danger/Danger.js";
import Platform from "./Platform/Platform.js";
import SplashScreen from "./SplashScreen/SplashScreen.js";
import MainMenu from "./MainMenu/MainMenu.js";
import Enemy from "./Enemy/Enemy.js";
import SafeZone from "./SafeZone/SafeZone.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import LetterBar from "./LetterBar/LetterBar.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import HeartCandy from "./HeartCandy/HeartCandy.js";
import Wall from "./Wall/Wall.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 139.99390080049372,
    y: 40.66227397386885,
    direction: 90,
    costumeNumber: 28,
    size: 50,
    visible: true,
    layerOrder: 7
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Danger: new Danger({
    x: 0,
    y: -1.4863760052000001,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Platform: new Platform({
    x: 32,
    y: 139,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  SplashScreen: new SplashScreen({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  MainMenu: new MainMenu({
    x: 3,
    y: -113,
    direction: 90,
    costumeNumber: 1,
    size: 100.39999999999998,
    visible: false,
    layerOrder: 14
  }),
  Enemy: new Enemy({
    x: 13,
    y: -73,
    direction: -90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  SafeZone: new SafeZone({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite1: new Sprite1({
    x: -92,
    y: -102,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Sprite2: new Sprite2({
    x: 202,
    y: -32,
    direction: 90,
    costumeNumber: 4,
    size: 30,
    visible: false,
    layerOrder: 9
  }),
  LetterBar: new LetterBar({
    x: -12,
    y: 137,
    direction: 90,
    costumeNumber: 6,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Sprite3: new Sprite3({
    x: 164,
    y: 149,
    direction: 90,
    costumeNumber: 2,
    size: 30,
    visible: true,
    layerOrder: 10
  }),
  HeartCandy: new HeartCandy({
    x: -176,
    y: 159,
    direction: 90,
    costumeNumber: 3,
    size: 50,
    visible: true,
    layerOrder: 11
  }),
  Wall: new Wall({
    x: 15,
    y: 52,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 12
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
