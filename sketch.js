var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2
var track, car1_img, car2_img;

var booster1,booster2,booster3,booster4,booster5,booster6,booster7,booster8;
var boosterImg

var border;

var marioSpeed = 6;
var sonicSpeed = 10;

var leaderboard;
var winner = "";

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadAnimation("images/mario1.png","images/mario2.png");
  car2_img = loadAnimation("images/senic1.png","images/senic2.png");

  boosterImg = loadImage("speed.png");
  

  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  booster1 = createSprite(200,200,30,30)
  booster1.addImage(boosterImg)
  booster1.scale = 0.075
  booster2 = createSprite(1000,200,30,30)
  booster2.addImage(boosterImg)
  booster2.scale = 0.075
  booster3 = createSprite(1800,200,30,30)
  booster3.addImage(boosterImg)
  booster3.scale = 0.075
  booster4 = createSprite(2600,200,30,30)
  booster4.addImage(boosterImg)
  booster4.scale = 0.075
  booster5 = createSprite(3400,200,30,30)
  booster5.addImage(boosterImg)
  booster5.scale = 0.075
  booster6 = createSprite(4200,200,30,30)
  booster6.addImage(boosterImg)
  booster6.scale = 0.075
  booster7 = createSprite(5000,200,30,30)
  booster7.addImage(boosterImg)
  booster7.scale = 0.075
  booster8 = createSprite(5800,200,30,30)
  booster8.addImage(boosterImg)
  booster8.scale = 0.075

  border = createSprite(6200,200,30,1200)
  border.visible = false;

  game = new Game();
  game.getState();
  game.start();


  

}


function draw(){
  
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}
