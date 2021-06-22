class Plinko{

    constructor(x,y,radius){
        var options={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("#dd4b4b");
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
    }


}