class CannonBall{
    constructor(x,y,r){
        var options = {
            isStatic: true
          }
        this.body = Bodies.circle(x, y,r, options);
        World.add(world, this.body);
        //this.w=r
        this.r=r
    this.image=loadImage("assets/cannonball.png")
    }
    show(){

        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 2*this.r, 2*this.r);
        pop();  
    
    
    
    }
    
    
    shoot(){
        var ballAngle=cannon.angle-28
        ballAngle=ballAngle*3.14/180
        var velocity = p5.Vector.fromAngle(ballAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body,     { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)}     );


    }
    
    
    
    
    }
    