const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var particles=[];
var plinkos=[];
var divisions=[];

var disvisionHeight=300








function setup() {
  createCanvas(480,800);
  myEngine = Engine.create();
  myWorld= myEngine.world;


  ground=new Ground(200,780,400,50)

  for (var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/5,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
 for (var j=10;j<=width-20;j=j+50)
 {
   plinkos.push(new Plinko(j,275));
 }


  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine);
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  
}






  drawSprites();
}