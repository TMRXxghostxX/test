/*const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

//let bodies, engine, world, object

function setup(){
  let canvas = createCanvas(400,400)
  engine = Engine.create()
  world = engine.world;

  object_options = {
    isStatic: true
  }
 Ground = Bodies.rectangle(200,390,200,20, object_options)
  //object = Bodies.rectangle(200,100,50,50, object_options)
  World.add(world, Ground)

ballOptions = {
  restitution: 1
}

 Ball = Bodies.circle(200,100,20, ballOptions)
World.add(world, Ball)

  //console.log(object_options)
  //console.log(object.position.x)
  //console.log(object.position.y)
}

function draw(){
  background(0)
  Engine.update(engine)
  rectMode(CENTER)
  //rect(200,200,50,50) 
  rect(Ground.position.x, Ground.position.y, 400, 20)
  ellipseMode(RADIUS)
  ellipse(Ball.position.x, Ball.position.y, 20);
}*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    
    box2 = new Box(240,100,50,100);
    
    ground1 = new Ground(200,390,400,20);

    pig1 = new Pig(200,200);

    log1 = new Log(100,300,100,PI);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    
    box2.display();
    
    ground1.display();
    
    pig1.display();
   
    log1.display();
}