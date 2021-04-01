const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon;
function preload(){
  polygon=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  polygon = new Polygon(50,100,50,50);

  slingshot = new Slingshot(polygon.body,{x:200, y:50});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 polygon.display()
 slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(polygon.body.isTouching(block1.body)){
    Matter.Body.setStatic(block1.body , false);
  }
  else if(polygon.body.isTouching(block2.body)){
    Matter.Body.setStatic(block2.body , false)
  }
  else if(polygon.body.isTouching(block3.body)){
    Matter.Body.setStatic(block3.body , false)
  }
  else if(polygon.body.isTouching(block4.body)){
    Matter.Body.setStatic(block4.body , false)
  }
  else if(polygon.body.isTouching(block5.body)){
    Matter.Body.setStatic(block5.body , false)
  }
  else if(polygon.body.isTouching(block6.body)){
    Matter.Body.setStatic(block6.body , false)
  }
  else if(polygon.body.isTouching(block7.body)){
    Matter.Body.setStatic(block7.body , false)
  }
  else if(polygon.body.isTouching(block8.body)){
    Matter.Body.setStatic(block8.body , false)
  }
  else if(polygon.body.isTouching(block9.body)){
    Matter.Body.setStatic(block9.body , false)
  }
  else if(polygon.body.isTouching(block10.body)){
    Matter.Body.setStatic(block10.body , false)
  }
  else if(polygon.body.isTouching(block11.body)){
    Matter.Body.setStatic(block11.body , false)
  }
  else if(polygon.body.isTouching(block12.body)){
    Matter.Body.setStatic(block12.body , false)
  }
  else if(polygon.body.isTouching(block13.body)){
    Matter.Body.setStatic(block13.body , false)
  }
  else if(polygon.body.isTouching(block14.body)){
    Matter.Body.setStatic(block14.body , false)
  }
  else if(polygon.body.isTouching(block15.body)){
    Matter.Body.setStatic(block15.body , false)
  }
  else if(polygon.body.isTouching(block16.body)){
    Matter.Body.setStatic(block16.body , false)
  }

}


