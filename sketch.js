
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    dustbin1 = new Dustbin();
	ball = new Ball(150,600,50);

	ground = new Ground(400,height,800,20);
	

	
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
Engine.update(engine);
 ball.display();
 ground.display();
 dustbin1.display();
 
}


