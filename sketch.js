var playerName;
var gameState = "START"
var input;
var start,startimage,rocket1,rocket1image,rocket2,rocket2image;
var player,launch,launchimage;

function preload(){
  startimage = loadImage("dark green start button.jpg")
  rocket1image = loadImage("rocket1.png")
  rocket2image = loadImage("rocket2.jpg")
  launchimage = loadImage("green-start-button.jpg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight - 120);
  start = createSprite(displayWidth/2, displayHeight/2 + 60, 1, 1);
  rocket1 = createSprite(200,400, 1, 1);
  rocket2 = createSprite(500,400, 1, 1);
  launch = createSprite(250,800,1,1)
   //launch.scale = 0.4
  player = createSprite(300,400,1,1)

  input = createInput();
}

function draw() {
  background(100,55,255);  
  if(gameState === "START"){
    input.position(displayWidth/2 - 20,displayHeight/2 - 20)
    playerName = input.value()
    text("Hello"+playerName,displayWidth/2 + 10,displayHeight/2 + 20)
    start.addImage(startimage)
    start.scale = 0.2;
    if(mousePressedOver(start)){
      gameState = "screen1"
    }

  }
if(gameState === "screen1"){
  background(155,50,25)
  start.destroy();
  rocket1.addImage(rocket1image)
  rocket1.scale = 0.3
  rocket2.addImage(rocket2image)
  rocket2.scale = 0.3
  input.hide();
  launch.addImage("launch",launchimage)
  launch.scale = 0.4
  launch.visible = false;
  if(mousePressedOver(rocket1)){
    gameState = "bhaskara1"
    
  }
  if(mousePressedOver(rocket2)){
    gameState = "bhaskara2"
  }
  
}
if(gameState === "bhaskara1"){
  background(120,20,75)
  rocket1.destroy();
  rocket2.destroy();
  input.hide();
  launch.visible = true
  player.addImage("player",rocket1image)
  player.scale = 0.3;
}

if(gameState === "bhaskara2"){
  background(100,250,35)
  rocket1.destroy();
  rocket2.destroy();
  input.hide();
  launch.visible = true
  player.addImage("player",rocket2image)
  player.scale = 0.3;
}

  drawSprites();
}