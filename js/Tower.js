class Tower{
constructor(x,y,w,h){
    var options = {
        isStatic: true
      }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w=w
    this.h=h
this.image=loadImage("assets/tower.png")
}
show(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.w, this.h);
    pop();  



}







}
