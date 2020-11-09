var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4,gameobject5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="green"

  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="green"

  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="green"

  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="green"

  gameobject5=createSprite(500,100,50,50);
  gameobject5.shapeColor="green"

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameobject3))
  {
    //True means below code will execute
    movingRect.shapeColor = "blue";
   gameobject3.shapeColor = "blue";
  }
  else
  {
    //False means below code will execute
    movingRect.shapeColor = "yellow";
   gameobject3.shapeColor = "yellow";
  }

  if(isTouching(movingRect,gameobject1))
  {
    //True means below code will execute
    movingRect.shapeColor = "red";
   gameobject1.shapeColor = "red";
  }
  else
  {
    //False means below code will execute
    movingRect.shapeColor = "yellow";
   gameobject1.shapeColor = "yellow";
  }
  
  drawSprites();
}

//Custom function for collision algorithm which returns BOOLEAN VALUE(True/false)

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}