class   Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.r=r;
        
        World.add(myWorld,this.body);

    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        Fill ("white");
        ellipse(pos.x,pos.y,10,10);

    }