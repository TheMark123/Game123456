class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.i2=loadImage("assets/canon.png")
    this.i1=loadImage("assets/cannonBase.png")
  }
  show(){
    console.log(this.angle)
    if (keyIsDown(LEFT_ARROW)&&this.angle>-30){
      console.log("working")
      this.angle=this.angle-1
    }
    if(keyIsDown(RIGHT_ARROW)&&this.angle<81){
      console.log("beans")
      this.angle=this.angle+1
    }
    push();
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER);
    image(this.i2,0,0, this.width, this.height);
    pop();
    image(this.i1, 100,65,150,150);
 

  }
  
}
