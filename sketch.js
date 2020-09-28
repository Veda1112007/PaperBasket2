
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


 ground=new Ground(300,390,600,20)
 ball=new Paper();
 dustbin=new Dustbin();
 }


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(245, 59, 59);
  ball.display();
dustbin.display();
ground.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-85});
	}
}


