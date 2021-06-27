const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow;
var snowArray = []
var snowImg;
var boy, boyImg;
function preload() {
  bgImg = loadImage("snow1.jpg")
  snowImg = loadImage("snow4.webp")
  boyImg = loadImage("download.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true
  }
  snow  = Bodies.circle(100, 100, 50, options);
  World.add(world, snow);
  boy = createSprite(400, 250, 140, 80);
  boy.addImage(boyImg);
  
}

function draw() {
  background(bgImg); 
  Engine.update(engine) 
  //drawSprites();
imageMode(CENTER)
image(snowImg, snow.position.x, snow.position.y, 50, 50)
for (var i=0; i<50; i++) {
  snowArray.push(new Snow(random(0, 800), random(0, 50)));
  console.log("s");
}
for (var i=0; i<50; i++) {
  snowArray[i].display();
   snowArray[i].update();
}

drawSprites();
// var s = new Snow(random(0, 800), 10)
// s.display();
}