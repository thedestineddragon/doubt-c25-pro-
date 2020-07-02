class BaseClass {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.3,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = radius;
        this.image = loadImage("ball.png");
      }
      display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y);
      }
}