class Polygon{

    constructor(x,y,width,height,angle){

       var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(50,200,20);
        this.r = 20;
        
        this.image = loadImage("polygon.png");
        World.add(world, polygon);

        
    }

    
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0,0 , this.r,this.r);
    pop();
  }
}
    







