var helicopterIMG, helicopterSprite, packageSprite,packageIMG,line1,line2,line3;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	 

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxposition = width/2-100;
	boxY = 610;
	line1Sprite = createSprite(boxposition,boxY,20,100);

	line1=Bodies.rectangle(boxposition+20,boxY,20,100,{isStatic:true}); 
	
	line2Sprite = createSprite(boxposition+100,boxY+40,200,20);
	line2 =Bodies.rectangle (boxposition+100,boxY+15,200,20,{isStatic:true});
	
	line3Sprite = createSprite(boxposition+200,boxY,20,100);
	line3 = Bodies.rectangle(boxposition+180,boxY,200,100,{isStatic:true});
	line1Sprite.shapeColor = "red";
	line2Sprite.shapeColor = "red";
	line3Sprite.shapeColor = "red";
	World.add(world,line1);
	 World.add(world,line2);
	 World.add(world,line3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



