const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase,playerArcher;
var computer, computerBase,computerArcher;

var playerArrows=[];
var computerArrows=[];

var arrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Com(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  playerArcher=new PlayerArcher(340,playerBase.body.position.y-180,120,120);
  
  arrow=new PlayerArrow(player.body.position.x,player.body.position.y,20,20);
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();

  arrow.display();

  if(keyCode===32){
    arrow.shoot(playerArcher.body.angle);
  }
}

/*function keyPressed(){
  if(keyCode === 32){
    var posX=playerArcher.body.position.x;
    var posY=playerArcher.body.position.y;
    var angle=playerArcher.body.angle;
    var arrow=new PlayerArrow(posX,posY,100,10);
    
    arrow.trajectory=[];
    Matter.Body.setAngle(arrow.body,angle);
    playerArrows.push(arrow);
  }
}*/

/*function keyReleased(){
  if(keyCode===32){
    if(playerArrows.length){
      var angle=playerArcher.body.angle+PI/2;
      playerArrows[playerArrows.length-1].shoot(angle);
    }
  }
}*/



