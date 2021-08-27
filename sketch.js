const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var computerArcher;
var Arrow;
var PlayerArcher


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  PlayerArcher = new Archer(285,player.body.position.y-180,120,120)

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArrow(width - 340,computerBase.body.position.y - 180, 120,120);
    
   
    
  
    
  
  //Create an arrow Object
  if(keyIsDown === "ENTER"){
    Arrow = new arrow(playerArcher.body.position.x-20,playerArcher.body.position.y-40,40,40);
    Arrow.setAngle(playerArcher.angle);
  }
  
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
  computerArcher.display()


  //Display arrow();
  Arrow.display();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    arrow.shoot(player.body.angle)


  }
}

function keyReleased()
{
  
}

