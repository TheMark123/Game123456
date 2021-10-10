const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var balls=[]
var boats=[]
var canvas, angle, tower, ground, cannon;
var cannonBall
var index=6
var boatAnimation=[]
var brokenBoatAnimation=[]
var waterSplashAnimation=[]
var gameState="play"

//ar count=
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boatSpritedata = loadJSON("assets/boat/boat.json");
  boatSpritesheet = loadImage("assets/boat/boat.png");
  brokenBoatSpritedata = loadJSON("assets/boat/broken_boat.json");
  brokenBoatSpritesheet = loadImage("assets/boat/broken_boat.png");
  waterSplashSpritedata = loadJSON("assets/water_splash/water_splash.json");
  waterSplashSpritesheet = loadImage("assets/water_splash/water_splash.png");
  sound1=loadSound("assets/background_music.mp3")
}
function setup() {


  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
 ground=new Ground(600, 600, 1200, 10)
 tower=new Tower(160, 350, 160, 310)
 cannon=new Cannon(180, 140, 130, 100,15)

  var boatFrames = boatSpritedata.frames;
  for (var i = 0; i < boatFrames.length; i++) {
    var pos = boatFrames[i].position;
    var img = boatSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    boatAnimation.push(img);
  }

  var brokenBoatFrames = brokenBoatSpritedata.frames;
  for (var i = 0; i < brokenBoatFrames.length; i++) {
    var pos = brokenBoatFrames[i].position;
    var img = brokenBoatSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    brokenBoatAnimation.push(img);
  }

  var waterSplashFrames = waterSplashSpritedata.frames;
  for (var i = 0; i < waterSplashFrames.length; i++) {
    var pos = waterSplashFrames[i].position;
    var img = waterSplashSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    waterSplashAnimation.push(img);
  }
}



function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
 tower.show()
if (gameState=="play"){
         createBoats()
         showBoats()
         
          for( var num=0    ; num < balls.length  ;   num++  ){
          showball(balls[num])
          deadboat(num)
          }
         
          for(var index=0    ;index<boats.length    ;index=index+1      ) {
          if (boats[index].body.position.x<400&&boats[index]!==undefined){

          gameState="end"
          }  
          }


}
if (gameState=="end"){
textSize(30)  
fill("red")
text("GAME OVER YOU LOSE", 600, 300)
sound1.play()


}

 ground.show()


 
 cannon.show()
}

function keyReleased(){
  if (keyCode==DOWN_ARROW){
    balls[balls.length-1].shoot()
    
      }
    }
function keyPressed(){
  if (keyCode==DOWN_ARROW){
    cannonBall=new CannonBall(cannon.x+10,cannon.y,10)
    Matter.Body.setAngle(cannonBall.body,cannon.angle)
    balls.push(cannonBall)
      }
      
}    
function showball(ball){
  if (ball){
    ball.show()
    
    }

  
}
function createBoats(){
  if (boats.length<4){
    boat=new Boat(random(1000,1800),500,150,150,random(-80,-20),boatAnimation  )
    boats.push(boat)
  }
console.log(boats.length) 
}
function showBoats(boat){


  console.log("this.is the number of boats"+boats.length)
 //boats[boats.length-1].show()
 for(i=0;i<boats.length;i++){
   if(boats[i]!==undefined){
   boats[i].show()
   }
 }


 
}
function deadboat(index){
  
   

    



    for (var number=0 ;number<boats.length   ;number++  ){
      
      count=number
      if (balls[index]!==undefined&&boats[count]!==undefined) {
       
        var collision = Matter.SAT.collides(balls[index].body, boats[count].body);
      if (collision.collided){
      boats[count].removeboat(count)
   //  boats[count].animation=brokenBoatAnimation
     setTimeout(()=>{  
     Matter.World.remove(world, boats[count].body);
     delete boats[count]
     },2000)
     
      
     
      }
      }
      
       }



}