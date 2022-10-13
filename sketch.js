
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
ball = Bodies.circle(260,100,radius/2,ball_options);
 World.add(world,ball);
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius); 
  drawSprites();
 
}



