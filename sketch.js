
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var alien, alien2;
var spaceship, missile;
var bgImg, spaceshipImg, alienImg, alien2Img, missileImg; 
var alienGroup, alien2Group, missileGroup;

function preload()
{
   alienImg = loadImage("./Assets/alien.png");
   alien2Img = loadImage("./Assets/Alien2.png");
   spaceshipImg = loadImage("./Assets/spaceship.png");
   bgImg = loadImage("./Assets/space.png");
   missileImg = loadImage("./Assets/missile.png");

}

function setup() {
	createCanvas(1000, 1000);
	 
	spaceship = createSprite(500,930,30,30);
	spaceship.addImage(spaceshipImg);
	spaceship.scale = 0.17;

	alienGroup = createGroup();   
	alien2Group = createGroup(); 
	missileGroup = createGroup(); 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(bgImg,0,0);
  
  drawSprites();
 
  if (frameCount % 80 === 0) {
	createAlien();
  }

  if (frameCount % 100 === 0) {
	createAlien2();
}

  if(keyDown("space"))
  {
	  console.log("here")
	createMissile();
  }

}

function keyPressed()
{
	if(keyIsDown(LEFT_ARROW))
	{
		spaceship.x = spaceship.x - 20;
	}

	if(keyIsDown(RIGHT_ARROW))
	{
		spaceship.x = spaceship.x + 20;
	}
}

    function createAlien() {
         alien = createSprite(random(50, 650),40, 40, 400);
         alien.addImage(alienImg);
	     alien.scale= 0.2;
	     alien.velocityY = 2;
	     alien.lifetime = 400;
	     alienGroup.add(alien);
	}

    function createAlien2() {
	    alien2 = createSprite(random(50, 950),40, 40, 40);
	    alien2.addImage(alien2Img);
	    alien2.scale= 0.3;
	    alien2.velocityY = 2;
	    alien2.lifetime = 400;
	    alien2Group.add(alien2);
	}

	function createMissile() {
		console.log(
			"here2"
		)
		missile = createSprite(900, 500, 20,20)
		missile.addImage(missileImg);
		missile = spaceship.y-20 
		missile.scale = 0.2;
		missile.velocityY = 7;
		missileGroup.add(missile)
		
	}
