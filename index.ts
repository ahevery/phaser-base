import * as Phaser from 'phaser';
import { Types } from 'phaser';

var config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload(this: Phaser.Scene) {
  this.load.setBaseURL(
    'https://raw.githubusercontent.com/ahevery/phaser-base/master'
  );

  this.load.image('sky', 'assets/sky.png');
  //this.load.image('sky', 'assets/skies/space3.png');

  this.load.image('ground', 'assets/platform.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.spritesheet('dude', 'assets/dude.png', {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  this.add.image(400, 300, 'sky');
}

function update() {}
