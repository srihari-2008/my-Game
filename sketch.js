var playerName;
var gameState = "START"
var input;
var start,startimage,rocket1,rocket1image,rocket2,rocket2image;
var player,startrocket,launchimage;
var a;
var meteorsGroup;
var bgr;
var score = 0;

function preload(){
  startimage = loadImage("dark green start button.jpg")
  rocket1image = loadImage("rocket1.png")
  rocket2image = loadImage("rocket 2.png")
  launchimage = loadImage("green-start-button.jpg")
  bgrimage = loadImage("bacground 2.jpg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight - 120);
  bgr = createSprite(displayWidth/2,displayHeight/2,1,1)
  start = createSprite(displayWidth/2, displayHeight/2 + 60, 1, 1);
  rocket1 = createSprite(200,400, 1, 1);
  rocket2 = createSprite(500,400, 1, 1);
  startrocket = createSprite(800,200,1,1);
   startrocket.scale = 0.4
  player = createSprite(300,400,1,1);
  
  meteorsGroup = new Group();

  input = createInput();
}

function draw() {
  background(100,55,255);  
  image(bgrimage,0,-displayHeight * 4,displayWidth,displayHeight * 5)
  if(gameState === "START"){
    input.position(displayWidth/2 - 20,displayHeight/2 - 20);
    playerName = input.value()
    text("Hello"+playerName,displayWidth/2 + 10,displayHeight/2 + 20);
    start.addImage(startimage);
    start.scale = 0.2;
    if(mousePressedOver(start)){
      gameState = "screen1"
    }

    

  }
if(gameState === "screen1"){
  image(bgrimage,0,-displayHeight * 4,displayWidth,displayHeight * 5)
  background(155,50,25)
  start.destroy();
  rocket1.addImage(rocket1image)
  rocket1.scale = 0.3
  rocket2.addImage(rocket2image)
  rocket2.scale = 0.3
  input.hide();
  startrocket.addImage(launchimage)
  startrocket.scale = 0.3
  startrocket.visible = false;
  if(mousePressedOver(rocket1)){
    gameState = "bhaskara1"
    
  }
  if(mousePressedOver(rocket2)){
    gameState = "bhaskara2"
  }
  
}
if(gameState === "bhaskara1"){
  image(bgrimage,0,-displayHeight * 4,displayWidth,displayHeight * 5)
  background(120,20,75)
  rocket1.destroy();
  rocket2.destroy();
  input.hide();
  startrocket.visible = true
  player.addImage("player",rocket1image)
  player.scale = 0.3;
  textSize(20)
  text("this is bhaskara 1",900,600)
  if(mousePressedOver(startrocket)){
    bgr.addImage(bgrimage)
    bgr.scale = 3.2;
    /*player.velocityY = -5;
    player.velocityX = 0;*/
    a = 1
    startrocket.destroy();
    
  }
  
if(a == 1){
  bgr.velocityY = 3;
  if(bgr.y>displayHeight){
  bgr.y = 200;
  }
  
  if(keyDown(LEFT_ARROW)){
    player.velocityX = -5;
    player.velocityY = 0;
  }

  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 5;
    player.velocityY = 0;
  }

  if(keyWentUp(RIGHT_ARROW)||keyWentUp(LEFT_ARROW)){
  player.velocityX = 0;
  player.velocityY = 0;  
  }
}
    if(frameCount % 70 === 0 && a === 1)  {
      var meteors = createSprite(250,0,50,36)
      meteors.x = random(0,400);
      meteors.velocityY = 3
      meteorsGroup.add(meteors);

    }
    if(meteorsGroup.isTouching(player)){
      meteorsGroup.destroyEach();
      score = score + 1;
    }
 console.log(score) 
  
}

if(gameState === "bhaskara2"){
  image(bgrimage,0,-displayHeight * 4,displayWidth,displayHeight * 5)
  background(100,250,35)
  rocket1.destroy();
  rocket2.destroy();
  input.hide();
  startrocket.visible = true
  player.addImage("player",rocket2image)
  player.scale = 0.3;
}

  drawSprites();
}