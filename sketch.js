var kid, coin, bag;
var kidImage, coinImage, bagImage;
var background, backgroundImage;


function preload(){
  kidImage = loadImage("images/kid.png");
  coinImage = loadImage("images/coin.png");
  bagImage = loadImage("images/bag.png");

  backgroundImage = loadImage("images/background.png");

}

function setup(){
  createCanvas(displayWidth, displayHeight);

  kid = createSprite(500, displayHeight - 300, 30, 30);
  kid.addImage(kidImage);
  kid.scale = 0.3;
  kid.velocityX = 5;

}

function draw(){
  background(backgroundImage);

  drawSprites();

}