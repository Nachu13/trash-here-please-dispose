var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	white1 = new DustBin(650, 650, 200, 20);
	white2 = new DustBin(550, 610, 20, 100);
	white3 = new DustBin(750, 610, 20, 100);
    trash = new Trash(50, 100);
	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(400, 660, 800, 10, options);
	World.add(world, ground);
	ground.shapeColor = color("pink");

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  white1.display();
  white2.display();
  white3.display();
  trash.display();
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 10);
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(trash.body, trash.body.position, {x:85, y:-85});
	}
	}

