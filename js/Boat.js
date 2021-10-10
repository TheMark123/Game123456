class Boat
{
  constructor(x, y, w, h,boatpos,boatAnimation) 
  {
    let options = {
      isStatic:false
    };
    this.animation=boatAnimation
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.speed=0.05
    this.h = h;
    this.boatPosition=boatpos
    
    this.image=loadImage("assets/boat.png")
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    this.speed+=0.05
    var index = floor(this.speed % this.animation.length);
    console.log("this is index"+index)
    Matter.Body.setVelocity(this.body, {
      x: -0.9,
      y: 0
    });
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    imageMode(CENTER);
    image(this.animation[index],0,this.boatPosition, this.w, this.h);
    pop();
    
  }
   removeboat(index){
    this.animation=brokenBoatAnimation
    setTimeout(()=>{  
     
    World.remove(world, boats[index].body);
    delete boats[index]
  },2000)

   }



  
}
