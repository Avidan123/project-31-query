const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine,world
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  







for(var k =0;k<=0;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10))
}

  drawSprites();
}