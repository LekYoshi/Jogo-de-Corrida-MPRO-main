var database;
var form, game, player;
var playerCount = 0, gameState = 0;
var bgimg;
var car1,car2,car3,car4
var cars=[]
var carImg1,carImg2,carImg3,carImg4
var track
var allPlayers

function preload() {
  bgimg = loadImage("./assets/images/background1.png");
  carImg1=loadImage("./assets/images/car1.png")
  carImg2=loadImage("./assets/images/car2.png")
  carImg3=loadImage("./assets/images/car3.png")
  carImg4=loadImage("./assets/images/car4.png")
  track = loadImage("./assets/images/track.png")
}

function setup() {
  database = firebase.database()
  canvas = createCanvas(950, 470);
 
  game = new Game();
  game.getState()
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }
  if (playerCount === 4){
    game.updateState(1)
  }
  if (gameState ==1){
    clear()
    game.play()
  }
}


