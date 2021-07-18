var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  // to create rows of car
  for(var i=0;i<40;i++){
    cars= new Car(2);
    carGroup1.add(cars.spt);
  }
  // to create rows of log
  for(var i=0;i<40;i++){
    logs= new Log(-2);
    logGroup1.add(logs.spt);
  }
  //Grasses where player can rest
  for(var i=0;i<6;i++){
    var bottomgrass1= createSprite(683,height-50-(i*400),width,grassHeight);
    bottomgrass1.shapeColour="grey";
    if(i%2===0)//adding road
    {
    var road=createSprite(683, height-150-(i*400)-grassHeight,width,300)
    road.shapeColour="black";
    }
   
  }
  
  }

function draw() {
  background("skyblue");
 // Making the logs reapper
 for(i=1;i<logGroup1.length;i++){
  if(logGroup1[i].x<0)
{
logGroup1[i].x=width;
}
}
//Making the cars reapper
for(i=1;i<carGroup1.length;i++) {
  if(carGroup1[i].x>width)
  {
   carGroup1[i].x=0;
  }
  if(carGroup1[i].x<0)
  {
    carGroup1[i].x=width;
  }
}


 

  drawSprites();
}

