class Particle{

    constructor(x,y,radius){
        var options={
            restitution:0.1,
            friction:0.1
        }
       
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("lightgreen");
        ellipse(0,0,this.radius);
        pop();
    }


}