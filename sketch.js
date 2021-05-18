var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particles1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 80; k <=240; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 240; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 400; k <=560; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 560; k <=720; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
 
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }
  //create 2nd row of plinko objects
 

  //create 3rd row of plinko objects

  
  //create 4th row of plinko objects


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles1.push(new particle(random(width/2-10,width/2+10),10,10));
      
  }

  //display the paricles 

}
